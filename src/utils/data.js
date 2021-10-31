import React from "React";
import shelfie from "../assets/shelfie.svg";
import wx from "../assets/wx.png";
import ck from "../assets/ck.png";
import plantare from "../assets/plantare.png";
import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";

//Projects data
export const projectsArr = [
  {
    title: "Plantare",
    img: plantare,
    github: "https://github.com/cibellem/plantare",
    app: "https://plantare.herokuapp.com/",
    description:
      "Faux Plant Ecommerce that leverages Firebase to handle user authentication and Stripe for checkout.",
    type: "Full Stack MERN",
  },
  {
    title: "Shelfie",
    img: shelfie,
    github: "https://g;ithub.com/cibellem/react-bookSearch",
    app: "https://react-book-shelfie.herokuapp.com/",
    description:
      "Book search built using Google Books API. This is a Crud application built with React, Expres and MongoDB. Users can retrieve books by title, author or key and favorite them. ",
    type: "Front End",
  },
  {
    title: "Clean Kitchen",
    img: ck,
    github: "https://github.com/cibellem/cleankitchen",
    app: "https://ckitchenpos.herokuapp.com/",
    description:
      "CRUD application that intent to simplify a Kitchen point of sale system. This was a group project, developed during my Bootcamp. ",
    type: "Full Stack",
  },

  {
    title: "WeatherBoard",
    img: wx,
    github: "https://github.com/cibellem/react-wdashboard",
    app: "https://shrouded-sea-44886.herokuapp.com/",
    description:
      "Weather application that retrieve user's browser geolocation to display current weather. Consumes Open weather API ",
    type: "Front End",
  },
];

//Skills data
export const skillsArr = [
  {
    stack: "Front End",
    tools: [
      "JavaScript (ES6)",
      "React",
      "Ionic",
      "Amplify",
      "HTML",
      "CSS/Scss",
      "Styled Components",
    ],
  },
  {
    stack: "Back End",
    tools: [
      "Node.js",
      "Express.js",
      "AWS Lambda",
      "AWS AppSync",
      "NATS Streaming",
      "Firebase",
      "MongoDB",
    ],
  },
];

//Social data
export const links = [
  {
    href: "https://www.linkedin.com/in/cibelle-montor-2a1a58157/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/cibellem",
    icon: <FaGithub />,
  },
  {
    href: "mailto:montorcibelle@gmail.com",
    icon: <FaMailBulk />,
  },
];
