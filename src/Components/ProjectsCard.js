import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../App.css";

function ProjectsCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
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
      `}
      </style>
      <Card
        style={{
          backgroundColor: "var(--Fourth-color)",
          color: "var(--third-color)",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/" + project.imagecharacter}
          alt={project.name}
          className={`image-size ${imageLoaded ? "" : "blur"}`}
          loading="lazy"
          onLoad={handleImageLoad}
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
            as={Link}
            to={`/projects/${project.id}`}
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
