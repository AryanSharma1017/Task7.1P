import { Link } from "react-router-dom"

import "./navigation.css"

const TopBar = () => {
  return (

    <div className="Top">
      <Link to='/'>
        <div className="Home">
              DEV@Deakin
        </div>
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Search" />
      </div>

      <div className="btn1">
        
        <Link to='login'>
          <button >
            Login
          </button>
        </Link>
      </div>
      <div className="btn1">
        
        <Link to='signup'>
          <button>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;