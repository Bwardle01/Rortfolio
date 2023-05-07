import React from "react";
import Project from './project';

const projects = [
  {
    id: 0,
    title: "Movie-Mania",
    languages: "HTML, CSS, JavaScript.",
    packages: "API's used for this project: WatchMode: https://api.watchmode.com/,  OMDb: https://www.omdbapi.com/",
    image: "/imgs/screenshot-moviemania.png",
    description: "This project allows a user to pick a random movie to watch by genre",
    repo: "https://github.com/mia2380/Sneak-Attack-Project-1",
    live: "https://mia2380.github.io/Sneak-Attack-Project-1/",
  },
  {
    id: 1,
    title: "Final group project goes here.",
    languages: "Javascript, CSS, HTML.",
    packages: "React, React-scripts, React-router-dom, React-dom, Apollo-server, graphql, mongooseDB, Semantic-UI, Express, Axios, ",
    image: "",
    description: "",
    repo: "https://github.com/Catalystix/Clawesome-Crew",
    live: "",
  },
  {
    id: 2,
    title: "Cats off to ya",
    languages: "Javascript, Handlebars.",
    packages: "mysql12, sequilize, multer, gsap, express, dotenv, datauri, cloudinary, body-parser, express-handlebars",
    image: "/imgs/cats-off-to-ya.png",
    description: "This project is an app where users can uploaded their pictures of their pets and rate other peoples pets. In order to use the app you will need to create an account and login. You can view/uplaod pictures you in the profile tab as well as log out.",
    repo: "https://github.com/heyitsthatgirl/HoN-Pet-Edition",
    live: "https://hot-or-not-pets-edition.herokuapp.com/homepage",
  },
  {
    id: 3,
    title: "Work day scheduler",
    languages: "HTML, CSS, Javascript.",
    packages: "None",
    image: "/imgs/workday.png",
    description: "With this project you will be able to create tasks through out the day. All data submitted with be updated and saved with real time",
    repo: "https://github.com/Bwardle01/WorkDayScheduler",
    live: "https://bwardle01.github.io/WorkDayScheduler/",
  },
  {
    id: 4,
    title: "My first portfolio",
    languages: "HTML, CSS.",
    packages: "NONE",
    image: "/imgs/firstproject.png",
    description: "This was my first ever portfolio. This will demonstrate how far ive came with my app development skill",
    repo: "https://github.com/Bwardle01/Portfolio1",
    live: "https://bwardle01.github.io/Portfolio1/",
  },
  {
    id: 5,
    title: "Employee tracker",
    languages: "Javascript.",
    packages: "MySQL, inquirer, MySQL12",
    image: "/imgs/employee.png",
    description: "This project is an employee tracker through the terminal. This will allo wyou to show all departments, roles, and employess added to the DB. You can add and update any catagory. You can also update and add manager info.",
    repo: "https://github.com/Bwardle01/Employee-tracker-12",
    live: "Clone the repo to run the code. ",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">My projects</p>
      

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;