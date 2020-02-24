import React from "react";
import {Link} from "react-router-dom";

export default class GameItem extends React.Component{
        constructor(props) {
        super(props)
        }

    render() {
        return (
            <li className={"float"} >

                <div className={"listgame "}>
                    <h5>{this.props.game.name}</h5>
                    <img className=""
                         src={this.props.game.background_image}/>

                    <h6>Released {this.props.game.released} </h6>
                    <div className="badge badge-dark">Rating {this.props.game.rating}</div>
                    <br/>
                    <span>

                        <button onClick={()=>this.props.delete(this.props.game)} className={"btn btn-danger gamebtn"}>Delete</button>{'  '}
                        <Link   to="/edit"></Link>{' '}
                        <Link 
                        className="btn btn-secondary gamebtn"
                        to={{
  pathname: '/edit',
  state: {
    name: this.props.game.name
  }
}}>Edit</Link>
                        </span>


                </div>


            </li>
        );
    }
}