import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../App.css";

function ProjectsCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const redirectToProjectDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <>
      <style>
        {`
          .bg-green {
            border: 1px solid #088F8F;
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
          
          .bg-green:hover {
            background-color: #017d7d;
            border: 1px solid #017d7d;
          }

          .image-size {
            transition: transform 0.5s;
          }

          .image-size:hover {
            transform: scale(1.1); 
          }
        `}
      </style>
      <Card
        style={{
          backgroundColor: "var(--Fourth-color)",
          color: "var(--third-color)",
          overflow: "hidden",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/" + project.imagecharacter}
          alt={project.name}
          className={`image-size ${imageLoaded ? "" : "blur"}`}
          loading="lazy"
          onLoad={handleImageLoad}
          onClick={redirectToProjectDetails}
          style={{ cursor: "pointer" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title
            className="resp-h5"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.name}
          </Card.Title>
          <Card.Text
            className="resp-text"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.subname}
          </Card.Text>
          <Button
            onClick={redirectToProjectDetails}
            variant="primary"
            className="resp-text bg-green"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectsCard;
