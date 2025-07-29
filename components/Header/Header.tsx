import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(true);
    document.body.classList.add("no-scroll");
  };
  const handleMenuClose = () => {
    setOpen(false);
    document.body.classList.remove("no-scroll");
  };
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
            <div className="menu-button">
              <button onClick={handleMenuOpen}>
                <Image src="/hamburger.svg" alt="menu-button" fill />
              </button>
            </div>
            <div className={`header-right ${open ? "show" : ""}`}>
              <div className="header-links">
                <div className="close-button">
                  <button onClick={handleMenuClose}>
                    <Image src={"/closebutton.svg"} alt="close-button" fill />
                  </button>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link onClick={handleMenuClose} href="/" className={path === "/" ? "active" : ""}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuClose}
                        href="/recipes"
                        className={path.startsWith("/recipes") ? "active" : ""}
                      >
                        Recipes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuClose}
                        href="/categories"
                        className={path.startsWith("/categories") ? "active" : ""}
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuClose}
                        href="/favorites"
                        className={path.startsWith("/favorites") ? "active" : ""}
                      >
                        Favorites
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
