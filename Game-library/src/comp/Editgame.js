import React from "react"
import {Link} from "react-router-dom";
export default class Editgame extends React.Component {
    constructor(props) {
        super(props);
        this.state ={newGameName:''}
    }
    render() {
       
        return (
            <div >
            
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Edit Game for {this.props.location.state.name}  </h1>
                        
                    </div>
                </div>

                    <div className="container">
                <form className="form-horizontal">
                    <label>Game Name </label>{" "}
                    <input onChange={(e)=>{this.setState({newGameName:e.target.value})}} value={this.state.newGameName}  type="text"  />


                        <hr/>
                        <div className="form-group">
                            <button onClick={(e,id)=>{
                                e.preventDefault()
                                this.props.edit(this.state.newGameName,this.props.location.state.id)
                                }} type="submit"  className="btn btn-primary">Submit</button>
                                
                        </div>
                        <Link className="btn btn-secondary gamebtn" to="/mygames">Back</Link>
                </form>
                
                    </div>


            </div>
        );
    }

}