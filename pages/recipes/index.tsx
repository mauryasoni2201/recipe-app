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
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        setSearchTerm(val.trim());
        setCurrentPage(1);
      }, 1000),
    []
  );

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleSearching = (value: string) => {
    debouncedSearch(value);
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["recipes", searchTerm, currentPage],
    queryFn: () => {
      if (searchTerm) {
        return getAllData(`${process.env.NEXT_RECIPES_API_URL}/search?q=${searchTerm}`);
      }
      return getAllData(`${process.env.NEXT_RECIPES_API_URL}?limit=${LIMIT}&skip=${LIMIT * (currentPage - 1)}`);
    },
  });

  const paginatedSearchResults = useMemo(() => {
    if (searchTerm && data?.recipes) {
      console.log(`Executed`);
      return data.recipes.slice((currentPage - 1) * LIMIT, currentPage * LIMIT);
    }
    return data?.recipes || [];
  }, [data, searchTerm, currentPage]);

  const totalPages = useMemo(() => {
    if (searchTerm && data?.recipes) {
      return Math.ceil(data.recipes.length / LIMIT);
    }
    if (data?.total && data?.limit) {
      return Math.ceil(data.total / data.limit);
    }
    return 1;
  }, [data, searchTerm]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <Error message={error.message} />;
  } else if (searchTerm && paginatedSearchResults.length === 0) {
    content = <p className="text-center pt-medium p">No Recipes Found.</p>;
  } else if (paginatedSearchResults.length > 0) {
    content = <RecipeListing noAnimate={true} recipes={paginatedSearchResults} />;
  } else {
    content = <p className="text-center pt-medium p">No Recipes Found.</p>;
  }

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
        image: `https://${process.env.NEXT_RECIPES_API_DOMAIN}/recipe-images/3.webp`,
      },
    },
  };

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

        {totalPages > 1 && (
          <div className="pagination-wrap">
            <Stack spacing={2} alignItems="center">
              <Pagination page={currentPage} onChange={handlePageChange} count={totalPages} color="primary" />
            </Stack>
          </div>
        )}
      </Section>
    </>
  );
};

export default Recipes;
