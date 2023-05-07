import React from "react";

function Resume(){
  return(
    <div className='columns'>
      <div className='column'>
        <a className="button is-primary"
        href={"/Bronson W resume.pdf"}>
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>View My outdated Resume</span>
        </a>
      </div>
      <div className='column'>
        <p className="content is-medium">Experience</p>
        <ul>
          <li>Browser based tech: HTML, CSS, Javascript, React.js</li>
          <li>--</li>
          <li>Frameworks: Bootstrap, Handlebars</li>
          <li>--</li>
          <li>Databases: MySQL, NoSQL, MongoDB</li>
          <li>--</li>
          <li>Server side development: MERN stack (MongoDB, Express.js, Node.js)</li>
          <li>--</li>
          <li>Future developemt: Python, AWS, Java</li>
          <li>--</li>
          <li>Git and Github repo management</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;