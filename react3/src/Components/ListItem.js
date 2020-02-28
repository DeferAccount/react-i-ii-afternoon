import React from 'react'

function ListItem(props){
    return (
    <div className='List-Item'>
        <div className='card-info'>
           

            <p>{props.card.id}</p>
            <p>{props.card.name.first}, {props.card.name.last}</p>
            <p><b>From: </b>   {props.card.city}, {props.card.country}</p>
            <p><b>Employer: </b>  {props.card.employer}</p>
            <p><b>Job Title: </b>  {props.card.title}</p>
            <p><b>Favorite Movies: </b>  <li>{props.card.favoriteMovies}</li></p>
        
        </div>

    </div>
    )
}

export default ListItem; 