import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Stack } from "@mui/material";
import { getAllData } from "@/utils/request";
import debounce from "lodash.debounce";
import CommonHead from "@/components/CommonHead/CommonHead";
import Section from "@/components/Section/Section";
import MetaDataProps from "@/models/MetaDataProps";
import Loader from "@/components/Loader/Loader";
import Error from "@/components/Error/Error";
import RecipeListing from "@/components/RecipeListing/RecipeListing";

const LIMIT = 10;

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearchTerm] = useState("");
  const meta: MetaDataProps = {
    metaData: {
      title: "Freshly | Recipes",
      description:
        "Discover mouth-watering recipes, cooking tips, and flavorful food categories that will inspire your next meal.",
      keywords: "delicious recipes, food blog, easy meals, cooking tips, recipe ideas, foodie hub",
      og: {
        title: "Freshly | Recipes",
        description:
          "Explore a variety of curated recipes and cooking tips perfect for any occasion. Welcome to your new go-to food destination!",
      },
    },
  };
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["recipes", currentPage],
    queryFn: () => getAllData(`${process.env.NEXT_RECIPES_API_URL}?limit=${LIMIT}&skip=${LIMIT * (currentPage - 1)}`),
    enabled: search.trim() === "",
  });
  const {
    data: searchData,
    error: searchError,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useQuery({
    queryKey: ["recipes", search],
    queryFn: () => getAllData(`${process.env.NEXT_RECIPES_API_URL}/search?q=${search}`),
    enabled: search.trim().length > 0,
  });
  useEffect(() => {
    if (data?.total && data?.limit) {
      setPages(Math.ceil(data.total / data.limit));
    }
  }, [data]);
  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        setSearchTerm(val);
        setCurrentPage(1);
      }, 1000),
    []
  );
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  const handleSearching = (value: string) => {
    debouncedSearch(value);
  };

  let content;
  if (isLoading || isSearchLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <Error message={error.message} />;
  } else if (isSearchError) {
    content = <Error message={searchError.message} />;
  } else if (searchData && search !== "") {
    if (searchData.recipes.length) {
      content = <RecipeListing recipes={searchData.recipes} />;
    } else {
      content = <p className="text-center pt-medium p">No Recipes Found.</p>;
    }
  } else if (data) {
    if (data.recipes.length) {
      content = <RecipeListing recipes={data.recipes} />;
    } else {
      content = <p className="text-center pt-medium p">No Recipes Found.</p>;
    }
  }
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <Section>
        <div className="title-and-search">
          <h1 className="h1 text-center">Recipes</h1>
          <div className="search">
            <input type="search" placeholder="Search" onChange={(e) => handleSearching(e.target.value)} />
          </div>
        </div>
        {content}
        {pages > 1 && !search ? (
          <div className="pagination-wrap">
            <Stack spacing={2} alignItems="center">
              <Pagination page={currentPage} onChange={handlePageChange} count={pages} color="primary" />
            </Stack>
          </div>
        ) : null}
      </Section>
    </>
  );
};

export default Recipes;
