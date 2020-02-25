import React from "react";
import {Link} from "react-router-dom";

export default class GameItem extends React.Component{
        constructor(props) {
        super(props)
            
        }

    render() {
        
        return (
            <li className={"float"} >
                    {/* <button onClick={this.props.list} className="btn btn-danger">Select me</button> */}
                   
                <div className={"listgame "}>
                    <h5>{this.props.game.name} <i onClick={this.props.list} class="material-icons big">add</i></h5>
                    <img className=""
                         src={this.props.game.background_image}/>

                    <h6>Released {this.props.game.released} </h6>
                    <h4><div className="badge badge-dark">Rating {this.props.game.rating}</div></h4>
                    <br/>
                    <span>

                        <button onClick={()=>this.props.delete(this.props.game)} className={"btn btn-danger gamebtn"}>Delete</button>{'  '}
                        {/* <Link   to="/edit"></Link>{' '} */}
                        {/* <Link className="btn btn-secondary gamebtn" to={{pathname: '/edit',state: {name: this.props.game}}}>Edit</Link> */}
                        </span>

                        <Link className="btn btn-secondary gamebtn" to={{pathname: '/edit',state: {name: this.props.game.name,id: this.props.game}}}>Edit</Link>

                </div>


            </li>
        );
    }
}