import { useState } from "react";
import './imageCard.css'


export default function ImageCard(props) {
    


    return(
        <div className="imageCard">
            <img>{props.source}</img>
        </div>
    )
}