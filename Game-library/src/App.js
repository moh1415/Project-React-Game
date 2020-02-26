import React from 'react';
import './App.css';
import {Alert, Container} from "react-bootstrap";
import NavBar from "./comp/Nav";
import Footer from "./comp/Footer";
import SliderImage from "./comp/SliderImage";
import Listofgame from "./comp/Listofgame";
import Mygames from "./comp/Mygames";
import Home from "./Home";
import axios from 'axios';
import Editgame from "./comp/Editgame";
import Addgame from "./comp/Addgame";

import icons from 'glyphicons'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        Games:[],
        Mylistgame:[],
        newItem:[]
      }
  }

    //get games data from api after the page render
    componentDidMount() {
        console.log('getAllPosts');
        axios({
            method: 'get',
            url: 'https://api.rawg.io/api/games'
        })
            .then(res => {
                // console.log('RESPONSE: ', res);
                // console.log('DATA: ', res.data.results);
                this.setState({
                    Games: res.data.results,
                })
            })
            .catch(err => {
                console.log('ERROR: ', err);
            });
    };
    //assign the game from the last to my own list
    Addgametomylist = (game) => {
        const Mylistgame = [...this.state.Mylistgame];
        const filmIndex = Mylistgame.indexOf(game);

        if (filmIndex !== -1) {
            // Mylistgame.splice(filmIndex, 1);
            console.log(`Removing ${game.name} From Favors`);
        } else {
            Mylistgame.push(game);
            console.log(`Adding ${game.name} To Favors`);
        }
        this.setState({ Mylistgame });

    }

    Addowngame = (game) => {
        const Mylistgame_2 = [...this.state.Mylistgame];
        console.log(Mylistgame_2);
        const filmIndex = Mylistgame_2.indexOf(game);

        if (filmIndex !== -1) {
            // Mylistgame.splice(filmIndex, 1);
            console.log(`Removing ${game.name} From Favors`);
        } else {
            Mylistgame_2.push(game);
            console.log(`Adding ${game.name} To Favors`);
        }
        console.log(Mylistgame_2);
        this.setState({ Mylistgame:Mylistgame_2 });

    }
        //delete selected game
        deleteGame = (game) => {
            const Mylistgame = [...this.state.Mylistgame];
            const filmIndex = Mylistgame.indexOf(game);

            if (filmIndex !== -1) {
                 Mylistgame.splice(filmIndex, 1);
                console.log(`Removing ${game.name} From Favors`);
            } else {

            }
            this.setState({ Mylistgame });
        }

    //Deleted all  my games list
    deleteAllGame = () => {

        this.setState({ Mylistgame:[] });
    }

    ontextchangeforedit = (e) =>
    {
        console.log("hello",e.target.value);
        this.setState({
            newItem:e.target.value,

        })
    }

    saveEdit =(game,id) => {
            console.log("save edit",game)
            // change a game name
            const array = id;
            console.log("arrat",array.id);
                const findgameindex = this.state.Mylistgame.indexOf(array);
                // const findgameindex = this.state.Mylistgame.indexOf({id:id.id});
                // console.log("save ",game,"ID",id.id);
                console.log("index ",findgameindex);
            const game1 = {
                ...this.state.Mylistgame[findgameindex]
            };
            console.log(game1)
            game1.name = game;
             const games = [...this.state.Mylistgame];
             games[findgameindex] = game1;
            this.setState({
                Mylistgame:games,
            })
    }

    deleteSelectedGame = (game) => {
            const MylistgameDelete = [...this.state.Mylistgame];
            const newGameArr = MylistgameDelete.filter(savedGame => game.indexOf(savedGame)==-1)

            console.log(newGameArr, "new game array")
            this.setState({ Mylistgame:newGameArr });

   
    }


    



render() {
// console.log(this.state.Games);
    console.log(this.state.Mylistgame);
  return (
      <Router>
          <div className={"App"}>
              <NavBar></NavBar>
              {/*<button onClick={this.getlistgame}>test</button>*/}
              {/*<Route exact path="/" component={(props) => <Home {...props} games={this.state.Games} />} />*/}
              <Route exact path="/" component={(props) => <Home {...props} games={this.state.Games} />} />

              <Route path="/List" component={(props) => <Listofgame {...props} games={this.state.Games} add={this.Addgametomylist}  />} />

              <Route path="/mygames" component={(props) => <Mygames {...props} ourgame={this.state.Mylistgame} delete={this.deleteGame} edit={this.editGame} Addowngame={this.Addowngame} deleteAllGame={this.deleteAllGame} deleteSelectedGame={this.deleteSelectedGame} />} />

              <Route path="/edit" component={(props) => <Editgame {...props} games={this.state.Mylistgame} edit={this.saveEdit} gamename={this.props.gamename} editTheValue={this.ontextchangeforedit}  />} />

              <Route path="/add" component={(props) => <Addgame {...props} games={this.state.Mylistgame}  gamename={this.props.gamename} Addowngame={this.Addowngame}  />} />
               
               <Footer></Footer>

          </div>


      </Router>


  );
}
}

export default App;
