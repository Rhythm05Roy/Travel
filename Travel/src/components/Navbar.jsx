import React, { Component } from 'react'
import "./NavbarStyle.css";
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

class Navbar extends Component{
  state = {clicked: false};
  handleClick = ()=>{
    this.setState({ clicked: !this.state.clicked })
  }
  render(){
     return(
      <nav className='NavbarItems'>
           <h1 className='navbar-logo'>Travel</h1>
           <div className='menu-icons' onClick={this.handleClick}>
            <i className={ this.state.clicked ? "fas fa-times":"fas fa-bars" }></i>
           </div>
           <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
            {MenuItems.map((val,i)=>{
                return (
                    <li key={i}>
                    <Link to={val.url} className={val.cName}><i className={val.icon}></i>{val.title}</Link>
                    </li>
                );
                })}
              <button>Sign Up</button>
           </ul>
        </nav>
     )
  }
}
export default Navbar;