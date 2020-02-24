import React from "react";


export default class Addgame extends React.Component{
    constructor(props) {
        super(props);
        this.state={
             gamename:'',
            gamerating:'',
            newItem1:""
        }
    }
    ontextchange = (e) =>
    {
        console.log("hello",e.target.value);
        this.setState({
            newItem:e.target.value,

        })
    }
    ontextchange1 = (e) =>
    {
        console.log("hello",e.target.value);
        if(e.target.value<=5)
        {
            this.setState({
                newItem1:e.target.value
            })
        }

    }



    render() {
            // console.log(this.onChange())
        const test = {name:this.state.newItem,rating:this.state.newItem1,background_image:"http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png",released:"Not assign yet"};
        return (
            <div >
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Add Game </h1>
                    </div>
                </div>

                <div className="container">
                    <form className="form-horizontal">
                        <label>Game Name </label>{" "}
                        <input onChange={this.ontextchange} value={this.state.newItem} type="text"/>{" "}
                        <label>Game Rating </label>{" "}
                        <input maxLength="1" onChange={this.ontextchange1} value={this.state.newItem1} type="number"/>



                        <hr/>
                        <div className="form-group">
                            <button onClick={()=>this.props.Addowngame(test)}  type="submit"  className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>


            </div>
        );
    }

}