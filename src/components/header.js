// import all things needed for app to use.
import React, { useState } from 'react';
import Navigation from "./navigation";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./Contact

function Header() {
  const [currentPage, handlePageChange] = useState("About");

    // The renderPage method uses a switch statement to switch to the page needed.
    const renderPage = () => {
      switch (currentPage) {
         case "About me":
           return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Resume":
          return <Resume />;
          case "Contact":
            return <Contact />;
        default:
          return <About />;
      }
    };

    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Bwardle01?tab=repositories">
                <span className="content is-large">Bronson Wardle</span>
              </a>
              </div>
              </nav>
                {/* Pass the state value/setter as props to the navTabs*/}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;