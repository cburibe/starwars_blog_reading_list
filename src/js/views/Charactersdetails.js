import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/Charactersdetails.css";
import { Context } from "../store/appContext";


export const Charactersdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {actions.getCharactersdetails(params.id);}, []);
	if (store.charactersdetails){
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "35rem" }}>
					<img
						src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1655696600/yoda_bo1xm8.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						<h2 className="card-title text-warning text-center">{store.charactersdetails.properties.name}</h2>{" "}
						<p className="text-center">
							<strong>Birth Year:</strong> {store.charactersdetails.properties.birth_year}
						</p>
						<p className="text-center">
							<strong>Height:</strong> {store.charactersdetails.properties.height}
						</p>
						<p className="text-center">
							<strong>Mass:</strong> {store.charactersdetails.properties.mass}
						</p>
						<p className="text-center">
							<strong>Hair Color:</strong> {store.charactersdetails.properties.hair_color}
						</p>
						<p className="text-center">
							<strong>Skin Color:</strong> {store.charactersdetails.properties.skin_color} 
						</p>
						<p className="text-center">
							<strong>Eyes Color:</strong> {store.charactersdetails.properties.eye_color}
						</p>
						<p className="text-center">
							<strong>Gender:</strong> {store.charactersdetails.properties.gender}
						</p>
						
						<div className="boton">
							<Link className="btn btn-black bg-warning" to={"/Characters"}>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Cargando datos...</div>;
	}
	};
