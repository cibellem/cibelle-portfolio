import * as React from "react";
import styled from "styled-components";

const ProjectSection = styled.article`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const ProjectBlock = styled.div`
  border-radius: 5px;
  padding: 20px;
  border-left: 8px solid #0ef897;
  border-top: 8px solid #0ef897;
  border-right: 2px solid #0ef897;

  border-bottom: 2px solid #0ef897;
  box-shadow: -6px -5px 0px 0px #000000c9;
  &:hover {
    transform: translateX(20px);
  }
`;

const ProjectName = styled.h5`
  font-size: 1.4rem;
  margin: 0;
`;

const ProjectText = styled.p`
  font-size: 1rem;
`;

const ProjectMiniHeader = styled.h6`
  font-size: 1rem;
  margin: 0;
`;

const ProjectSessionHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const ProjectImg = styled.img`
  font-size: 1.5rem;
  text-align: center;
`;

const projectsArr = [
  {
    title: "Plantare",
    img: "",
    github: "https://github.com/cibellem/plantare",
    app: "https://plantare.herokuapp.com/",
    description:
      "Faux Plant Ecommerce that leverages Firebase to handle user authentication and Stripe for checkout.",
    type: "Full Stack MERN",
  },
  {
    title: "Shelfie",
    img: "",
    github: "https://github.com/cibellem/react-bookSearch",
    app: "https://react-book-shelfie.herokuapp.com/",
    description: "Book search built using Google Books API.",
    type: "Front End",
  },
  {
    title: "Clean Kitchen",
    img: "",
    github: "https://github.com/cibellem/cleankitchen",
    app: "https://ckitchenpos.herokuapp.com/",
    description:
      "CRUD application that intent to simplify a Kitchen point of sale system. This was a group project, developed during my Bootcamp. ",
    type: "Full Stack",
  },

  {
    title: "WeatherBoard",
    img: "",
    github: "https://github.com/cibellem/react-wdashboard",
    app: "https://shrouded-sea-44886.herokuapp.com/",
    description:
      "Weather application that retrieve user's browser geolocation to display current weather. Consumes Open weather API ",
    type: "Front End",
  },
];

const Projects = () => {
  let array = [1, 2, 3];

  return (
    <ProjectSection>
      <ProjectSessionHeader>Some Projects I worked on</ProjectSessionHeader>

      {projectsArr.map((item) => (
        <ProjectBlock>
          <ProjectMiniHeader>{item.type}</ProjectMiniHeader>
          <ProjectName>{item.title}</ProjectName>
      
          <ProjectText>{item.description}</ProjectText>
        </ProjectBlock>
      ))}
    </ProjectSection>
  );
};
export default Projects;
