import React from 'react'

function Toys(props) {
    return (
        <div className="toyInfo">

            <img className="toyPic" src={props.toyInfo.img} alt="Logo" />;
            <h2>Toy Name: {props.toyInfo.name}</h2>
            <h2>Toy Color: {props.toyInfo.color}</h2>
            <h2>Toy Price: {props.toyInfo.price}</h2>

        </div>
    )
}

export default Toys