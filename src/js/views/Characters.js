import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Characters.css";


export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters();
    }, []);
    return (
            <div className="container">
                {store.characters.map((value, i) => (
                    <div key={i} className="card m-1 g-4 row flex-row bg-dark" style={{ width: "20rem", height: "40rem" }}>
                            <img src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1655696600/yoda_bo1xm8.jpg" className="card-img-top" alt="perfil" />
                            <div className="card-body">
                                <p className="text-card text-warning">Name: {value.name}</p>
                                <div className="cardbuttons">
                                    <button type="button" className="btn btn-border text-warning border-warning ms-2" onClick={() => actions.addfavorites(value.name)}>
                                    <i className="far fa-heart"></i>
                                    </button>        
                                    <Link className="btn btn-border text-black ms-2 bg-white" to={"charactersdetails/" + value.uid}>
                                        Learn More
                                    </Link>                     
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
    )
}

