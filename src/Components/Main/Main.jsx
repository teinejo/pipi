import './Main.css';
import React from "react";
import {Button, Container} from "react-bootstrap";
import GameCard from "../Card/Card";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TicTacToe from "../../Games/src/App";


function Main(){
    return(
        <Container fluid className='main' >
            <div className='cardGrid'>
                <div>
                    <GameCard Title={'TicTacToe'} description={'WarcraftToe!'}></GameCard>
                    <Button className='playButton' href='/TicTacToe' variant='success'>Play</Button>
                </div>
            </div>
            <Router>
                <Switch>
                    <Route exact path='/TicTacToe' component={TicTacToe}/>
                </Switch>
            </Router>
        </Container>

    )
}

export default Main;