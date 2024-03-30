import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useAnimation } from '../../context/AnimationContext';
function Navbar() {

  const { setPlayAnimation } = useAnimation();

  const handleLinkClick = () => {
    setPlayAnimation(true); // 触发动画
    // 其他逻辑，如关闭菜单等
    closeMenu();
  };
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    // <nav className={`navbar ${navActive ? "active" : ""} ${isVisible ? "visible" : ""}`}>
     <nav className={`navbar ${navActive ? "active" : ""} `}> 
      <div>
        <img src="./logo.png" alt="Logo" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={handleLinkClick}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
               offset={-50}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link

              onClick={handleLinkClick} // 使用新的处理函数
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Abilities
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={170}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Experience
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={handleLinkClick}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        // smooth="easeInOutCubic" // 使用非匀速的缓动函数
        // offset={50}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
