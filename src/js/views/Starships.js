import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Startships = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
            <div className="container">
                {store.planets.map((value, i) => (
                    <div key={i} className="card m-1 g-4 row flex-row bg-dark" style={{ width: "21rem", height: "40rem" }}>
                            <img src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1655696418/b9980a0902baa4976f3b09633c2131b2978f2449_hq_oldtm4.jpg" className="card-img-top" alt="perfil" />
                            <div className="card-body">
                                <p className="text-card text-warning">Name: {value.name}</p>
                                <div className="cardbuttons">
                                    <button type="button" className="btn btn-border text-warning border-warning ms-2" onClick={() => actions.addfavorites(value.name)}>
                                    <i className="far fa-heart"></i>
                                    </button>                             
                                    <Link className="btn btn-border text-black ms-2 bg-white" to={"planetsdetails/" + value.uid}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
    )
}
