import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container,Card
} from "reactstrap";

export default class Listofgame extends React.Component{

render() {
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
        {/*<li className={"float"}>*/}
        {/*    <div className={"listgame"}>*/}
        {/*    <h4>GTA</h4>*/}
        {/*    <img class="img-thumbnail" src={"https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"}/>*/}
        {/*    <h6>released </h6>*/}
        {/*    <button className={"btn btn-outline-primary"}>Add</button>*/}
        {/*    </div>*/}
        {/*</li>*/}
    </ul>
</div>

    );
}
}