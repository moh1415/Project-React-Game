import React from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import horizontalCss from 'react-animated-slider/build/horizontal.css';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Games Library</h1>
                            <p className="lead">This is a game website that help you add your favorite list of games from different platforms.</p>
                        </div>
                        <div className="container ">
                            <Slider classNames={horizontalCss} autoplay={1000}>
                                {this.props.games.map((item, index) => (
                             <img src={item.background_image} height='1200px' width='400px'/>
                                ))}
                            </Slider>

                        </div>
                    </div>



                </div>

            );
        }

}
export default Home;
