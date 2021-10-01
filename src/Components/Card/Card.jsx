import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameCard() {

    return(
        <div className='cardDiv'>
            <div className='imageBox'>
                <img className='image' width={200} height='150px' src='https://www.pngkey.com/png/detail/97-976890_grid-tic-tac-toe-layout.png' alt=''/>
            </div>
            <h5 className='title'>
                First game
            </h5>
            <div className='divTitle'>
                <p className='description'>
                    WarcraftToe
                </p>
            </div>
        </div>
    )
}
export default GameCard;

