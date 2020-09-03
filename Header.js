import React, { Component } from 'react';
import Nav from './Nav';
import SearchForm from "./SearchForm";

class Header extends Component {
    componentDidMount() {
        this.props.onSearch(this.props.searchTag);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        if (prevProps.searchTag !== this.props.searchTag) {
            this.props.onSearch(this.props.searchTag);
        }
    }

    render() {
        return (
            <header>
                <div>
                    <h2>Flickr Pic Search</h2>
                    {/* enables search for search form */}
                    <SearchForm onSearch={this.props.onSearch}/>
                </div>
                <div>
                    {/* enables search for Nav items by clicking on them*/}
                    <Nav onClick={this.props.onSearch}/>
                </div>
            </header>
        )
    }
}

export default Header;