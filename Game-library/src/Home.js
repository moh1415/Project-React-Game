import React from 'react';
import './App.css';
import NavBar from "./comp/Nav";
import Footer from "./comp/Footer";
import SliderImage from "./comp/SliderImage";

class Home extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {

        return (

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Games React</h1>
                    <p class="lead">This is a game website that help you add your favorite list of games.</p>
                </div>
            </div>

        );
    }
}

export default Home;
