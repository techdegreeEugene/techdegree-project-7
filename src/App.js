import React, {Component} from 'react';
import PicList from './Components/PicList';
import axios from 'axios';
import apiKey from './config';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Header from "./Components/Header";

class App extends Component {
    //empty state for flickr var
    state = {
        flickr: [],
    };


    performSearch = (tag) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    flickr: response.data.photos.photo,
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };

    

    render() {
        // console.log(this.state.flickr)
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path='/' render={() => ( 
                    <div className="container">
                    <Header
                        searchTag={"cats"}
                        onSearch={this.performSearch.bind(this)}
                    />
                    <PicList title="cats" data={this.state.flickr} />
                    </div>)}/>
                        
                
                <Route path='/:tag' render={({match}) => (
                    <div className="container">
                        <Header
                            searchTag={match.params.tag}
                            onSearch={this.performSearch.bind(this)}
                        />
                        <PicList title={match.params.tag} data={this.state.flickr}/>
                    </div>)}
                />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;