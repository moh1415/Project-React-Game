import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container,Card
} from "reactstrap";

export default class Listofgame extends React.Component{

render() {
    // get all game list from the api and render it
    const allGames = this.props.games.map((game, index) => {
        return (
            <li className={"float"} key={index}>
                <div className={"listgame "}>
                    <h5>{game.name}</h5>
                    <img className=""
                         src={game.background_image}/>

                    <h6>Released {game.released} </h6>
                    <div className="badge badge-dark">Rating {game.rating}</div>
                    <br/>
                    <button onClick={()=>this.props.add(game)} className={"btn btn-outline-primary gamebtn"}>Add</button>
                </div>


            </li>
        );
    });
    return (
<div>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Our Games List</h1>
            <p className="lead">This is a game website that help you add your favorite list of games.</p>
        </div>
    </div>
    <ul>
        {allGames}
     
    </ul>
</div>

    );
}
}