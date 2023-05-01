import React from "react";

function footer(){
  return(
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Bwardle01" target="_blank" rel="noreferrer">
            Bronson Wardle
          </a>
          .
          <hr/>
          <a href="www.linkedin.com/in/bronson-wardle-b61951165"
          target="_blank" rel="noreferrer"  >
          LinkedIn
        </a>
        </p>
        </div>
        </footer>
  );
}

export default footer;