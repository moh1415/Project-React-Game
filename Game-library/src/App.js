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
        Mylistgame:[{"id":3498,"slug":"grand-theft-auto-v","name":"Grand Theft Auto V","released":"2013-09-17","tba":false,"background_image":"https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg","rating":4.48,"rating_top":5,"ratings":[{"id":5,"title":"exceptional","count":1866,"percent":58.83},{"id":4,"title":"recommended","count":1068,"percent":33.67},{"id":3,"title":"meh","count":188,"percent":5.93},{"id":1,"title":"skip","count":50,"percent":1.58}],"ratings_count":3144,"reviews_text_count":15,"added":10633,"added_by_status":{"yet":199,"owned":6815,"beaten":2551,"toplay":306,"dropped":433,"playing":329},"metacritic":96,"playtime":68,"suggestions_count":412,"user_game":null,"reviews_count":3172,"saturated_color":"0f0f0f","dominant_color":"0f0f0f","platforms":[{"platform":{"id":4,"name":"PC","slug":"pc","image":null,"year_end":null,"year_start":null,"games_count":204374,"image_background":"https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"},"released_at":"2013-09-17","requirements_en":{"minimum":"Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.","recommended":"Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"},"requirements_ru":null},{"platform":{"id":18,"name":"PlayStation 4","slug":"playstation4","image":null,"year_end":null,"year_start":null,"games_count":4514,"image_background":"https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"},"released_at":"2013-09-17","requirements_en":null,"requirements_ru":null},{"platform":{"id":16,"name":"PlayStation 3","slug":"playstation3","image":null,"year_end":null,"year_start":null,"games_count":3567,"image_background":"https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"},"released_at":"2013-09-17","requirements_en":null,"requirements_ru":null},{"platform":{"id":14,"name":"Xbox 360","slug":"xbox360","image":null,"year_end":null,"year_start":null,"games_count":2490,"image_background":"https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"},"released_at":"2013-09-17","requirements_en":null,"requirements_ru":null},{"platform":{"id":1,"name":"Xbox One","slug":"xbox-one","image":null,"year_end":null,"year_start":null,"games_count":3101,"image_background":"https://media.rawg.io/media/games/2c4/2c4ec7b64079b561667850593d23c417.jpg"},"released_at":"2013-09-17","requirements_en":null,"requirements_ru":null}],"parent_platforms":[{"platform":{"id":1,"name":"PC","slug":"pc"}},{"platform":{"id":2,"name":"PlayStation","slug":"playstation"}},{"platform":{"id":3,"name":"Xbox","slug":"xbox"}}],"genres":[{"id":4,"name":"Action","slug":"action","games_count":80551,"image_background":"https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg"},{"id":2,"name":"Shooter","slug":"shooter","games_count":22973,"image_background":"https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"}],"stores":[{"id":290375,"store":{"id":3,"name":"PlayStation Store","slug":"playstation-store","domain":"store.playstation.com","games_count":6195,"image_background":"https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"},"url_en":"https://store.playstation.com/en-us/product/UP1004-CUSA00419_00-GTAVDIGITALDOWNL","url_ru":"https://store.playstation.com/ru-ru/product/EP1004-CUSA00411_00-GTAVDIGITALDOWNL"},{"id":290378,"store":{"id":2,"name":"Xbox Store","slug":"xbox-store","domain":"microsoft.com","games_count":2739,"image_background":"https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"},"url_en":"https://www.microsoft.com/en-us/store/p/grand-theft-auto-v/bpj686w6s0nh?cid=msft_web_chart","url_ru":null},{"id":290377,"store":{"id":7,"name":"Xbox 360 Store","slug":"xbox360","domain":"marketplace.xbox.com","games_count":1759,"image_background":"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"},"url_en":"https://marketplace.xbox.com/en-US/Product/GTA-V/66acd000-77fe-1000-9115-d802545408a7","url_ru":null},{"id":290376,"store":{"id":1,"name":"Steam","slug":"steam","domain":"store.steampowered.com","games_count":39785,"image_background":"https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"},"url_en":"http://store.steampowered.com/app/271590/","url_ru":null}],"clip":{"clip":"https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4","clips":{"320":"https://media.rawg.io/media/stories-320/91d/91d6b5963064a5f686f635c302095b55.mp4","640":"https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4","full":"https://media.rawg.io/media/stories/f64/f64ce0b857918b0c202f2a5d3217848e.mp4"},"video":"dZubIhK-Z6w","preview":"https://media.rawg.io/media/stories-previews/f65/f6593df6c8df32c7f4763f9cb112a514.jpg"},"tags":[{"id":40836,"name":"Full controller support","slug":"full-controller-support","language":"eng","games_count":8166,"image_background":"https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"},{"id":40847,"name":"Steam Achievements","slug":"steam-achievements","language":"eng","games_count":17553,"image_background":"https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"},{"id":13,"name":"Atmospheric","slug":"atmospheric","language":"eng","games_count":7142,"image_background":"https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"},{"id":123,"name":"Comedy","slug":"comedy","language":"eng","games_count":3890,"image_background":"https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg"},{"id":18,"name":"Co-op","slug":"co-op","language":"eng","games_count":4828,"image_background":"https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"},{"id":144,"name":"Crime","slug":"crime","language":"eng","games_count":1386,"image_background":"https://media.rawg.io/media/games/54a/54a3e4c617217848dc43c4de9989fe37.jpg"},{"id":8,"name":"First-Person","slug":"first-person","language":"eng","games_count":6448,"image_background":"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"},{"id":4,"name":"Funny","slug":"funny","language":"eng","games_count":7518,"image_background":"https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"},{"id":42,"name":"Great Soundtrack","slug":"great-soundtrack","language":"eng","games_count":2783,"image_background":"https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"},{"id":192,"name":"Mature","slug":"mature","language":"eng","games_count":544,"image_background":"https://media.rawg.io/media/games/426/4268e6b58ffa49f77c9d27f1cd06d35f.jpg"},{"id":62,"name":"Moddable","slug":"moddable","language":"eng","games_count":397,"image_background":"https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"},{"id":7,"name":"Multiplayer","slug":"multiplayer","language":"eng","games_count":18899,"image_background":"https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"},{"id":36,"name":"Open World","slug":"open-world","language":"eng","games_count":2434,"image_background":"https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"},{"id":24,"name":"RPG","slug":"rpg","language":"eng","games_count":9002,"image_background":"https://media.rawg.io/media/games/088/088b41ca3f9d22163e43be07acf42304.jpg"},{"id":37,"name":"Sandbox","slug":"sandbox","language":"eng","games_count":2330,"image_background":"https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"},{"id":31,"name":"Singleplayer","slug":"singleplayer","language":"eng","games_count":64755,"image_background":"https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"},{"id":149,"name":"Third Person","slug":"third-person","language":"eng","games_count":2049,"image_background":"https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"},{"id":150,"name":"Third-Person Shooter","slug":"third-person-shooter","language":"eng","games_count":801,"image_background":"https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"},{"id":411,"name":"cooperative","slug":"cooperative","language":"eng","games_count":2139,"image_background":"https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"}],"short_screenshots":[{"id":-1,"image":"https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"},{"id":1827219,"image":"https://media.rawg.io/media/screenshots/1b4/1b4eefb4cc2a77d4d35bb4a6926f3189.jpg"},{"id":1827221,"image":"https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"},{"id":1827222,"image":"https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"},{"id":1827223,"image":"https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"},{"id":1827224,"image":"https://media.rawg.io/media/screenshots/2dc/2dc7ea94641f7329d177f228564b968a.jpg"},{"id":1827225,"image":"https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"}]}],
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



    // ontextchange = (e) =>
    // {
    //     console.log("hello",e.target.value);
    //     this.setState({
    //         newItem:e.target.value
    //     })
    // }
    //
    //
    // addItem = (e) =>
    // {
    //     e.preventDefault();
    //     console.log("work");
    //     this.setState({
    //         Mylistgame:[...this.state.Mylistgame,this.state.newItem],
    //         newItem:""
    //     })
    // }
    ontextchangeforedit = (e) =>
    {
        console.log("hello",e.target.value);
        this.setState({
            newItem:e.target.value,

        })
    }

    saveEdit =(game) => {
            console.log("save edit",game)

            // change a game name
    }



    

editGame = () => {
    console.log("hello");
//     const findgameindex = this.state.Mylistgame.findIndex(game => {
//         return game.id === id;
//     });
//     const game = {
//         ...this.state.Mylistgame[findgameindex]
//     };
//     game.name = e.target.value;
//     const games = [...this.state.Mylistgame];
//     games[findgameindex] = game;
//     this.setState({
//         Mylistgame:games,
//     })
}


render() {
// console.log(this.state.Games);
    console.log(this.state.Mylistgame);
  return (
      <Router>
          <div className={"App"}>
              <NavBar></NavBar>
              {/*<button onClick={this.getlistgame}>test</button>*/}
              <Route exact path="/" component={Home} />

              <Route path="/List" component={(props) => <Listofgame {...props} games={this.state.Games} add={this.Addgametomylist}  />} />

              <Route path="/mygames" component={(props) => <Mygames {...props} ourgame={this.state.Mylistgame} delete={this.deleteGame} edit={this.editGame} Addowngame={this.Addowngame} deleteAllGame={this.deleteAllGame} />} />

              <Route path="/edit" component={(props) => <Editgame {...props} games={this.state.Mylistgame} edit={this.saveEdit} gamename={this.props.gamename} editTheValue={this.ontextchangeforedit}  />} />

              <Route path="/add" component={(props) => <Addgame {...props} games={this.state.Mylistgame}  gamename={this.props.gamename} Addowngame={this.Addowngame}  />} />
               
               <Footer></Footer>

          </div>


      </Router>


  );
}
}

export default App;
