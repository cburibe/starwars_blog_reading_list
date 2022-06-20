import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Planetsdetails.css"


export const Planetsdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanetsdetails(params.id);
	}, []);
	if (store.planetsdetails) {
	return (
		<div className="container contenedor">
			<div className="card m-2 bg-dark" style={{ width: "35rem" }}>
				<img src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1655696418/b9980a0902baa4976f3b09633c2131b2978f2449_hq_oldtm4.jpg" className="card-img-top"/>
				<div className="card-body">
					<h2 className="card-title text-warning text-center">{store.planetsdetails.properties.name}</h2>{" "}
					<p className="text-center">
						<strong>Diametro:</strong> {store.planetsdetails.properties.diameter}
					</p>
					<p className="text-center">
						<strong>Periodo de Rotación:</strong> {store.planetsdetails.properties.rotation_period}
					</p>
					<p className="text-center">
						<strong>Periodo Orbital:</strong> {store.planetsdetails.properties.orbital_period}
					</p>
					<p className="text-center">
						<strong>Gravedad:</strong> {store.planetsdetails.properties.gravity}
					</p>
					<p className="text-center">
						<strong>Población:</strong> {store.planetsdetails.properties.population}
					</p>
					<p className="text-center">
						<strong>Clima:</strong> {store.planetsdetails.properties.climate}
					</p>
					<p className="text-center">
						<strong>Tipo de Terreno:</strong> {store.planetsdetails.properties.terrain}
					</p>
					<p className="text-center">
						<strong>Agua Superficial:</strong> {store.planetsdetails.properties.surface_water}
					</p>
					<div className="boton">
						<Link className="btn btn-dark bg-warning" to={"/planets"}>
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
