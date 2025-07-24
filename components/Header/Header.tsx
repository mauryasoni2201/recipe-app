import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  <Image src="/logo.svg" alt="site-logo" fill />
                </Link>
              </div>
            </div>
            <div className="header-right">
              <div className="header-links">
                <nav>
                  <ul>
                    <li>
                      <Link href="/" className={path === "/" ? "active" : ""}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/recipes" className={path.startsWith("/recipes") ? "active" : ""}>
                        Recipes
                      </Link>
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
