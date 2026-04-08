import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilter = (category) => {
    const query = new URLSearchParams();
    if (category) query.append("category", category);
    navigate(`/collections?${query.toString()}`);
    setDropdown(null);
    setMobileMenu(false);
  };

  const handleCategoryPage = (basePath, category) => {
    const query = new URLSearchParams();
    if (category) query.append("category", category);
    navigate(`${basePath}?${query.toString()}`);
    setDropdown(null);
    setMobileMenu(false);
  };

  const linkStyle = (path) =>
    `relative px-3 py-2 text-sm font-medium text-white transition-all duration-300
    ${location.pathname === path ? "after:w-full" : "after:w-0 hover:text-yellow-300"}
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300`;

  const shopCategories = [
    "Tops",
    "Shirts",
    "Skirts",
    "Shorts",
    "Pants",
    "Blazers",
    "Dresses",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${isHome && !scrolled ? "bg-transparent" : "bg-pink-800/90 backdrop-blur-md shadow-lg"}`}
    >
      {/* TOP BAR */}
      <div className="bg-black text-white text-center text-sm py-1 font-semibold">
        🚀 Free Shipping On Orders Over ₹1500!
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl md:text-3xl font-bold tracking-widest text-white cursor-pointer"
        >
          STYLE<span className="text-white">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={linkStyle("/")}>HOME</Link>
          <Link to="/about" className={linkStyle("/about")}>OUR STORY</Link>

          {/* SHOP */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("shop")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer text-white hover:text-yellow-300">
              SHOP <span>▼</span>
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-[#1F2937] rounded-2xl shadow-xl py-4
              ${dropdown === "shop" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {shopCategories.map((item) => (
                <p
                  key={item}
                  onClick={() => handleFilter(item)}
                  className="px-6 py-2 text-white hover:bg-yellow-500 rounded-lg cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Link to="/explore" className={linkStyle("/explore")}>EXPLORE</Link>

          {/* MEN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("men")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div
              onClick={() => navigate("/mensstyle")}
              className="flex items-center gap-1 cursor-pointer text-white hover:text-yellow-300"
            >
              MEN <span>▼</span>
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-[#1F2937] rounded-2xl shadow-xl py-4
              ${dropdown === "men" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {["T-Shirt", "Shirt", "Pant", "Jeans", "Blazer", "Jacket", "Suit", "Kurta"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleCategoryPage("/mensstyle", item)}
                  className="px-6 py-2 text-white hover:bg-yellow-500 cursor-pointer rounded-lg"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* WOMEN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("women")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div
              onClick={() => navigate("/womensstyle")}
              className="flex items-center gap-1 cursor-pointer text-white hover:text-yellow-300"
            >
              WOMEN <span>▼</span>
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-[#1F2937] rounded-2xl shadow-xl py-4
              ${dropdown === "women" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {["Top", "T-Shirt", "Pants", "Dress", "Skirt", "Blazer", "Saree", "Kurti"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleCategoryPage("/womensstyle", item)}
                  className="px-6 py-2 text-white hover:bg-yellow-500 cursor-pointer rounded-lg"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* KIDS */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("kids")}
            onMouseLeave={() => setDropdown(null)}
          >
            <div
              onClick={() => navigate("/kidsstyle")}
              className="flex items-center gap-1 cursor-pointer text-white hover:text-yellow-300"
            >
              KIDS <span>▼</span>
            </div>

            <div className={`absolute top-10 left-0 w-56 bg-[#1F2937] rounded-2xl shadow-xl py-4
              ${dropdown === "kids" ? "opacity-100 visible" : "opacity-0 invisible"}
              transition-all duration-300`}
            >
              {["T-Shirt", "Shirt", "Pant", "Shorts", "Frock"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleCategoryPage("/kidsstyle", item)}
                  className="px-6 py-2 text-white hover:bg-yellow-500 cursor-pointer rounded-lg"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Link to="/contact" className={linkStyle("/contact")}>CONTACT</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white text-2xl">
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${mobileMenu ? "block" : "hidden"} md:hidden bg-pink-700 p-4`}>
        <div className="flex flex-col gap-4 text-white">
          <Link to="/">HOME</Link>
          <Link to="/about">OUR STORY</Link>

          {shopCategories.map((item) => (
            <p key={item} onClick={() => handleFilter(item)}>{item}</p>
          ))}

          <p onClick={() => navigate("/mensstyle")}>MEN</p>
          <p onClick={() => navigate("/womensstyle")}>WOMEN</p>
          <p onClick={() => navigate("/kidsstyle")}>KIDS</p>

          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;