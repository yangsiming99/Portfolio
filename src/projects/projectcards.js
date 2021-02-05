import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./project.css";
import { Button } from "react-bootstrap";


const ProjectCard = ({ 
	title,
	description,
	thumbnail, 
	technologies, 
	link, 
	githublink, 
	bulletPoints 
}) => {
	const OpenLink = () => {
		window.open(link, "_blank")
	}

	const OpenGithublink = () => {
		window.open(githublink, "_blank")
	}

	const ImageHalf = (
		<div className="image-half">
			<img 
				style={{
					width: '100%', 
					height:'auto',
					borderRadius: '1em',
					border: '1px solid rgb(223, 220, 220)'
				}} 
				className="card-image" 
				src={thumbnail}
				alt="Descriptive"
			/>
		</div>
		);

	const descHalf = (
		<div className="desc-half">
			<h3>{title}</h3>
			{bulletPoints !== undefined 
			? 
			<ul style={{textAlign:'left'}}>
				{bulletPoints.map((val, key) => <li key={key}>{val}</li>)}
			</ul>
			:<></>}
			<p>{description}</p>
			<div className="toolbar">
				{technologies.map(
										(tech, i) => <div className="tools" variant="outline-success" key={i}>{tech}</div>
									)}
			</div>
			<div className="link-bar">
				{link !== undefined
				? <Button onClick={OpenLink} className="url-tools">Open Site</Button>
				: <></>}
				{githublink !== undefined
				? 				<Button onClick={OpenGithublink} className="url-tools">Github Repo</Button>
				: <></>}
			</div>
		</div>
	)

	return (
			<div className="project-card">
				{ImageHalf}
				{descHalf}
			</div>
	);
}

export default ProjectCard;