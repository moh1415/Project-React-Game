import React from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

import NavBar from "./comp/Nav";
import Footer from "./comp/Footer";

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // const content =[{image:"http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png",title:"games"}]
            return (
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Games React</h1>
                            <p className="lead">This is a game website that help you add your favorite list of games.</p>
                        </div>
                        <div className="container ">
                            <Slider classNames={horizontalCss} autoplay={1000}>
                                {this.props.games.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ background: `url('${item.background_image}') no-repeat center center` }}
                                    >

                                        <div className="center">
                                            <h1 className="head">{item.name}</h1>
                                            {/*<p>Want dicover </p>*/}
                                            {/*<button className="btn btn-primary">click </button>*/}
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>



                </div>

            );
        }

}
export default Home;
