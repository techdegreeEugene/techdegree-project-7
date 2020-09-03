import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class Nav extends Component {

    onButtonClick =(e)=> {
        // Grabs the search term
        this.props.onClick(e.target.innerText);
        // console.log(e.target.innerText)
    }

    // renders the Nav
  render()  {
    return (
        <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/mountains" onClick={this.onButtonClick}>Mountains</NavLink>
                    </li>
                    <li>
                        <NavLink to="/forest" onClick={this.onButtonClick}>Forest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/desert" onClick={this.onButtonClick}>Desert</NavLink>
                    </li>
                </ul>
        </nav>
      )
    }
}

