import React from "react";
import { Link } from "react-router-dom";

import archStudio from "../../asset/images/archStudios.PNG";
import Insure from "../../asset/images/insure.png";
import insure1 from "../../asset/refactorImages/insure1.jpg";
import insure2 from "../../asset/refactorImages/insure2.jpg";

import Furniture_shoot from "../../asset/refactorImages/room1.PNG";
import room2 from "../../asset/refactorImages/room2.jpg";
import room3 from "../../asset/refactorImages/room3.jpg";
import EasyBank from "../../asset/images/easybank.PNG";

import Photosnap from "../../asset/refactorImages/photosnapImg.PNG";
import Photosnap1 from "../../asset/refactorImages/photosnap1.svg";
import Photosnap2 from "../../asset/refactorImages/photpsnap2.svg";
import arch from "../../asset/refactorImages/archStudioProject.svg";
import archContact from "../../asset/refactorImages/archContect.svg";
import easybank1 from "../../asset/refactorImages/easybank1.jpg";
import easybank2 from "../../asset/refactorImages/easybank2.jpg";

const projects = [
  {
    id: 1,
    name: "Photosnap",
    details:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. They provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    link: "https://photosnap-seven.vercel.app/",
    tech_stack: "React | Javascript | Material-UI",
    img: Photosnap,
    alt: "Picture of archStudios Landing page",
    projectImg: Photosnap1,
    projectImg2: Photosnap2,
  },
  {
    id: 2,
    name: "Arch Studios",
    details:
      "Arch Studios is an architect firm that specializes in Urban Design and has allowed them to focus on creating exceptional structures that live in harmony with their surroundings. Arch considers every detail from every surrounding element to inform their designs. The Arch team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything  do. This extends to the relationship our projects have with their surroundings.",
    link: "https://arch-studio.dlrayjr89.vercel.app/",
    tech_stack: "React | Javascript | Material-UI",
    img: archStudio,
    alt: "Picture of archStudios Landing page",
    projectImg: arch,
    projectImg2: archContact,
  },
  {
    id: 3,
    name: "EasyBank",
    details:
      "Easybank is a conventional way to save money with easy without any hassle. Need a bank with easy access to your money without problems. Easybank is the way to go ",
    link: "https://easy-banking-lilac.vercel.app/",
    tech_stack: "JavaScript | React | material-UI",
    img: EasyBank,
    alt: "Picture of EasyBank Landing page",
    projectImg: easybank2,
    projectImg2: easybank1,
  },

  {
    id: 4,
    name: "JSFurniture",
    details:
      "A Project creating a landing page for a furniture store called JSFurniture. Shop for the latest, most modern design in home decor all while keeping you budget intact This was a front end challenge provided buy frontend mentors.",
    link: "https://js-furnitures.vercel.app/",
    tech_stack: "HTML | CSS | React | Material-UI | Javascript",
    img: Furniture_shoot,
    alt: "Picture of Sauti Landing page",
    projectImg: room2,
    projectImg2: room3,
  },
  {
    id: 5,
    name: "Insure Insurance",
    details:
      "Insure Insurance Landing Page project. Insure is a life insurance company that ensures you and your loved one's are fully protected. User friendly process, great prices and they put their people first.",
    link: "https://insure-insurance.vercel.app/",
    githublink: "https://github.com/Dlray89/insure_insurance",
    img: Insure,
    tech_stack: "HTML | React | Material-UI",
    alt: "Picture of Sauti Landing page",
    projectImg: insure1,
    projectImg2: insure2,
  },
];

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <React.Fragment>
          <div>{project.name}</div>

          <div>{project.details}</div>

          <div>
            <Link to={`/projects/${project.id}`}>
                project
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
