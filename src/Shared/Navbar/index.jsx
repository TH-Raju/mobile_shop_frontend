/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userEmail = cookies.get("email");
  const userId = cookies.get("id");
  const menuItems = (
    <>
      <li>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>

      {userEmail ? (
        <>
          <li>
            <Link to="/AddMobile">
              <p>Add New</p>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <p>Orders</p>
            </Link>
          </li>
          <li className="">
            <button
              onClick={() => handleLogout()}
              className="hover:bg-red-700 hover:text-white bg-red-500  my-2 md:my-0  rounded-lg duration-100"
            >
              <span>Log out</span>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <p>Log in</p>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = async () => {
    cookies.remove("email", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("role", { path: "/" });
    cookies.remove("id", { path: "/" });
    localStorage.clear();
    navigate("/login");
  };

  const [searchValue, setSearchValue] = useState("");

  const searchData = () => {
    console.log(searchValue);
    let data = searchValue.split("");
    let upper = data.shift("").toUpperCase() + data.join("");
    // console.log(upper);
    navigate(`/search/${upper}`);
    //logic to handle the search data here
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          Mobile Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            <button
              className="btn text-xs btn-info ml-2 btn-md "
              onClick={searchData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
