import React from "react"

export default class Editgame extends React.Component {
    constructor(props) {
        super(props);
        this.state ={newGameName:''}
    }
    render() {
        console.log('STATE:',this.state)
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
                            <button onClick={(e)=>{
                                e.preventDefault()
                                this.props.edit(this.state.newGameName)
                                }} type="submit"  className="btn btn-primary">Submit</button>
                        </div>

                </form>
                    </div>


            </div>
        );
    }

}