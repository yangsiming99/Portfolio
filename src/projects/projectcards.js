import React, { Component } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./project.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


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
					borderRadius: '1em'
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

					{/* <Col sm={12} md={12} lg={4} style={styles.card_image} className="justify-content-center">
						<Card.Img variant="top" style={styles.card_image} src={thumbnail} />
					</Col>
					<Col sm={12} md={12} lg={7}>
						<Card.Body>
							<Card.Title><h3>{title}</h3></Card.Title>
							<Card.Text>
								{description}
							</Card.Text>
							<Card.Text style={{ display: 'flex' }}>
								{technologies.map(
									(tech, i) => <div style={styles.tools} variant="outline-success" key={i}>{tech}</div>
								)}
							</Card.Text>
							<Card.Text>
								<Button onClick={OpenLink} style={styles.urlTools}>Open Site</Button>
								<Button onClick={OpenGithublink} style={styles.urlTools}>Github Repo</Button>
							</Card.Text>
						</Card.Body>
					</Col> */}