import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  path.startsWith("/recipes");
  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">
                <Link href={"/"}>
                  <Image fill src={"/logo.svg"} alt="site-logo" />
                </Link>
              </div>
            </div>
            <div className="header-right">
              <div className="header-links">
                <nav>
                  <ul>
                    <li>
                      <Link className={``} href={"/"}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href={"/recipes"}>Recipes</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
