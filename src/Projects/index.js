import * as React from "react";
import shelfie from "./assets/book.png";
import wx from "./assets/wx.png";
import ck from "./assets/ck.png";
import plantare from "./assets/plantare.png";
import github from "./assets/github.png";
import {
  ProjectSection,
  ProjectBlock,
  ProjectName,
  ProjectText,
  ProjectMiniHeader,
  ProjectSessionHeader,
  ProjectImg,
  GitIcon,
} from "./Styles";

const projectsArr = [
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
      "Book search built using Google Books API. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at quas illo ea magnam magni optio commodi ipsa provident. ",
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

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <ProjectSessionHeader>
        {" "}
        <span className="marker">Some Projects I worked on </span>
      </ProjectSessionHeader>
      {projectsArr.map((item) => (
        <ProjectBlock key={item.title}>
          <ProjectMiniHeader>{item.type}</ProjectMiniHeader>
          <ProjectName>{item.title}</ProjectName>
          <ProjectImg src={item.img} />
          <ProjectText>{item.description}</ProjectText>

          <a target="_blank" rel="noreferrer" href={item.github}>
            {" "}
            <GitIcon src={github} />
          </a>
          <a href={item.app} rel="noreferrer" target="_blank">
            Learn More
          </a>
        </ProjectBlock>
      ))}
    </ProjectSection>
  );
};
export default Projects;
