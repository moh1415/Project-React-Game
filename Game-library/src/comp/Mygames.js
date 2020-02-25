import React from "react";
import Editgame from "./Editgame";
import {Link} from "react-router-dom";
import GameItem from "./GameItem";
export default class Mygames extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[],
        }
    }

    listOfDeleted = (game) => {
        const list = [...this.state.list];
        const filmIndex = list.indexOf(game);

        if (filmIndex !== -1) {
            list.splice(filmIndex, 1);
           
        } else {
            list.push(game);
           
        }
        this.setState({ list });

    }
    render() {
            // to get all game list
        const myGameslist = this.props.ourgame.map((game, index) => {
            return (
                <div>
                    
                <GameItem list={()=>this.listOfDeleted(game)} delete={this.props.delete} key={index} game={game}></GameItem>
                </div>
            );
        });

        // to get all seleced list 
        const deletedlist = this.state.list.map((game, index) => {
            
            return (
                <div>
                <li key={index} className="lead">{game.name}</li>
                <button onClick={()=>this.props.deleteSelectedGame(game)} className="btn btn-outline-dark">Clear</button>
                </div>
            );
        });
        // console.log(this.state)
        const gameofselect = ()=> {
            let item1 = "";
        //    let test = this.state.list.map((game, index) => {return {game}} );
            if(this.state.list=="")
            {
                console.log("work");
            }
            else {
                return (
                    item1 =   <div>
                        
                    <p className="lead">You select : <ul>
                       {deletedlist}
                       {/* <button onClick={()=>this.props.deleteSelectedGame(test) } class="btn btn-outline-dark">Clear</button> */}
                   </ul></p>
                
                   </div>
                  
                )
            }
           
            }
                
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">My Games List</h1>
                        <p className="lead">This is a game website that help you add your favorite list of games.</p>
                        <h4 className="lead">Want add your own games</h4>
                            {gameofselect()}
                            
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