import Image from "next/image";
import Link from "next/link";

import beam from "@/public/work/beam.png";
import meshsync from "@/public/work/meshsync.png";

import orama from "@/public/work/orama.png";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import comingsoon from "@/public/work/comingsoon.png";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: meshsync,
      title: "MeshSync",
      description: "Edit 3D objects in parallel",
      link: "https://meshsync.web.app/",
      target: "_self",
    },
    {
      id: 2,
      image: orama,
      title: "Orama Initiative",
      description: "Capturing the change through the eyes of the people",
      link: "https://orama-initiative.web.app/",
      target: "_self",
    },
    {
      id: 3,
      image: beam,
      title: "Beam",
      description: "Behavioural Evaluation and Activity Monitoring using mobile and smartwatch sensors",
      link: "",
      target: "_self",
    },
    {
      id: 4,
      image: comingsoon,
      title: "Coming Soon",
      description: "AR driven city explorer",
      link: "",
      target: "_blank",
    },
    {
      id: 5,
      image: comingsoon,
      title: "Asclepius",
      description: "Mobile ecommerce",
      link: "",
      target: "_blank",
    },
    {
      id: 6,
      image: comingsoon,
      title: "Coming Soon",
      description: "Connect and interact with people in close proximity",
      link: "",
      target: "_blank",
    },
    
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
