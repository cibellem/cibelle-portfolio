import React from "react";
import shelfie from "../assets/shelfie.svg";
import wx from "../assets/wx.png";
import ck from "../assets/ck.png";
import plantare from "../assets/plantare.png";
import resume from "../assets/resume.pdf";

import { FaLinkedin, FaGithub, FaMailBulk, FaPaperclip } from "react-icons/fa";

//Projects data
export const projectsArr = [
  {
    title: "Plantare",
    img: plantare,
    github: "https://github.com/cibellem/plantare",
    app: "https://plantare.herokuapp.com/",
    description:
      "Faux Plant Ecommerce with user authentication and a checkout flow.",
    type: "Full Stack MERN",
  },
  {
    title: "Shelfie",
    img: shelfie,
    github: "https://g;ithub.com/cibellem/react-bookSearch",
    app: "https://react-book-shelfie.herokuapp.com/",
    description:
      "Book search built using Google Books API. Users can retrieve books by title, author or key.",
    type: "Front End",
  },
  {
    title: "Clean Kitchen",
    img: ck,
    github: "https://github.com/cibellem/cleankitchen",
    app: "https://ckitchenpos.herokuapp.com/",
    description:
      "Clean Kitchen is a POS system that intent to simplify the work of these working in the kitchen. ",
    type: "Full Stack",
  },

  {
    title: "WeatherBoard",
    img: wx,
    github: "https://github.com/cibellem/react-wdashboard",
    app: "https://shrouded-sea-44886.herokuapp.com/",
    description:
      "Weather application that retrieve user's browser geolocation to display current weather. ",
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
      "HTML",
      "CSS/Scss",
      "Styled Components",
      "Figma",
    ],
  },
  {
    stack: "Back End",
    tools: [
      "Node.js",
      "Express.js",
      "AWS Lambda",
      "AWS AppSync",
      // "NATS Streaming",
      "Firebase",
    ],
  },
];

//Social data
export const links = [
  {
    href: "https://www.linkedin.com/in/cibelle-montor-2a1a58157/",
    icon: <FaLinkedin />,
    ariaLabel: "Access Cibelle's LinkedIn",
  },
  {
    href: "https://github.com/cibellem",
    icon: <FaGithub />,
    ariaLabel: "Access Cibelle's Github Account",
  },
  {
    href: "mailto:montorcibelle@gmail.com",
    icon: <FaMailBulk />,
    ariaLabel: "Send an email to Cibelle",
  },
  {
    href: resume,
    icon: <FaPaperclip />,
    ariaLabel: "Resume",
  },
];

//Jobs data

//Social data
export const jobs = [
  {
    company: "Microsoft",
    linkToCompany: "https://info.flip.com/",
    date: "2022 - 2023",
    position: "Software Engineer",
    pos: "left",
    description:
      "Engineered and maintained Front End user features for Flip,  a free video discussion app used by millions of educators and students worldwide.  ",
  },

  {
    company: "Cyber Dive",
    linkToCompany: "https://www.cyberdive.co/",
    date: "2020 - 2022",
    position: "Software Engineer",
    pos: "right",
    description:
      "Worked across the full stack in a fast-paced startup and engineered the parent dashboard for Aqua One, a fully monitored smartphone for kids.",
  },
  {
    company: "Little Taller",
    linkToCompany: "https://littletaller.com/",
    date: "2020 - 2020",
    position: "Front End Developer",
    pos: "left",
    description:
      "Successfully delivered an admin portal where users could view/export student reports. Leveraged admin capabilities to allow admins to manage users and their permissions. ",
  },
];
