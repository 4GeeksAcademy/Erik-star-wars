import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailSpecies = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params)
    useEffect(() => {
        actions.getDetailSpecies(params.id)
    }, [])

    useEffect(() => {
        console.log(store.detailspecies)
    }, [store.detailspecies])

    console.log(store.detailspecies)
    if (!store.detailspecies) return null;
    console.log(store.detailspecies)

    return (
        

        <div className="jumbotron">
            <div className="character-card mx-auto mt-3">
                <div className="character-header">		
            
                    
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`} className="card-img-top" alt="..." />		
                    
                    <img src="" className="character-image"/>
                        <div className="character-details">
                            <h1 className="character-name">{store.detailspecies.name}</h1>
                        </div>
                </div>
                <div className="character-info">
                    <div className="info-column">
                        <h3>Height</h3>
                        <p>{store.detailspecies.average_height}</p>
                        </div>
                    <div className="info-column">
                        <h3>Lifespan</h3>
                        <p>{store.detailspecies.average_lifespan}</p>
                    </div>
                    <div className="info-column">
                        <h3>Classification</h3>
                        <p>{store.detailspecies.classification}</p>
                    </div>
                    <div className="info-column">
                        <h3>Designation</h3>
                        <p>{store.detailspecies.designation}</p>
                    </div>
                     <div className="info-column">
                        <h3>Language</h3>
                        <p>{store.detailspecies.language}</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    
    );


}