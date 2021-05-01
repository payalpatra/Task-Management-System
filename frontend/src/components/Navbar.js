import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ click, cart }) => {
  
  // Step 6
  const [cartCount,setCartCount] = useState(0)

// Updating Cart Value
useEffect(() => {
  let count = 0;
  cart.forEach((item) => {
    count += item.qty;
  });
  setCartCount(count);
}, [cart,cartCount])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" style={{textDecoration: 'none'}} className="">
    <div style={{display: 'flex',marginLeft:"20px"}}>

          <img src="https://i.pinimg.com/280x280_RS/e3/dc/86/e3dc8699f58c5a48c740b633e4c8651f.jpg" style={{height: "40px",width:" 40px",marginTop: "",marginRight: "4px", fontSize:""}}  alt="" />
          <h1 style={{color:"#fff"}}>Interapt</h1>
    </div>
      
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/" className="">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/taskmanager" className="">
            <span>Task Manager</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/admin" className="">
            <span>Admin</span>
          </Link>
        </li>
      </ul>

      <ul className="navbar__links">
        <li>
          <Link to="/task" className="cart__link">
          <i class="fas fa-calendar-check fa-lg"></i>
            <span>Tasks</span>
            <div className="cart__counter">{cartCount}</div>
          </Link>
        </li>
        <li></li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.taskShop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
