import React from "react";
import Editgame from "./Editgame";
import {Link} from "react-router-dom";
import GameItem from "./GameItem";
export default class Mygames extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {

        const myGameslist = this.props.ourgame.map((game, index) => {
            return (
                <GameItem delete={this.props.delete} key={index} game={game}></GameItem>
            );
        });


        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">My Games List</h1>
                        <p className="lead">This is a game website that help you add your favorite list of games.</p>
                        <h4>Want add your own games</h4>

                        <Link to="/add" className="btn btn-primary">Add Game</Link>{" "}
                        {/*<button onClick={()=>this.props.Addowngame({name:"ada"})} className="btn btn-primary">Add Game</button>{" "}*/}
                        <button onClick={()=>this.props.deleteAllGame()} className="btn btn-danger">Delete All Games</button>
                    </div>
                </div>
                <ul>

                    {myGameslist}
                </ul>

            </div>


        );
    }
}