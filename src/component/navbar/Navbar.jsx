import React, { useState } from "react";
import "./navbar.css";
import { BsSearch } from 'react-icons/bs'
import Home from "../home/Home";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Hidden } from '@mui/material';
import { border } from '@mui/system';
const Navbar = () => {
  const [showDialog, setshowDialog] = useState(false);
  const openDialog = () => setshowDialog(true);
  const closeDialog = () => setshowDialog(false);
  const [navbar, setNavbar] = useState(false);

  function toggle() {
    var pop = document.getElementById("pop");
    pop.classList.toggle('active');
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground)
  return (
    <div className={navbar ? 'gpt3__navbar active' : 'gpt3__navbar'}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png" alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a className={navbar ? 'font a active' : 'font a'} href="#Home">Home</a>
          </p>
          <p>
            <a className={navbar ? 'font a active' : 'font a'} href="#About">About</a>
          </p>
          <p>
            <a className={navbar ? 'font a active' : 'font a'} href="#Info">Info</a>
          </p>
          <p>
            <div class="dropdown">
              <button className={navbar ? 'dropbtn active' : 'dropbtn'} href="#Tours">Tours</button>
              <div class="dropdown-content">
                <a className="a" href="#">Link 1</a>
                <a className="a" href="#">Link 2</a>
                <a className="a" href="#">Link 3</a>
              </div>
            </div>

          </p>
        </div>
      </div>
      <BsSearch className={navbar ? 'search active' : 'search'} onClick={openDialog} style={{ margin: '4px' }} />
      {/* <button onClick={openDialog} style={{ position: 'absolute' }}><i class="fa-solid fa-magnifying-glass fa-xs"></i></button> */}
      <Dialog open={showDialog} onClose={closeDialog} style={{ padding: '0px', cursor: 'wait', backgroundColor: 'rgba(23, 162,184, 0.64)' }}>
        <DialogContent style={{ overflow: 'hidden', padding: '0px' }}>
          <input type="text" placeholder='Search....' style={{ padding: '8px' }} />
          <label style={{
            display: 'inline-block', padding: '0px'
          }}><i class="fa-solid fa-magnifying-glass" style={{ color: '#FF8C00', backgroundColor: 'blue', padding: '19px', border: '#FF8C00' }}></i> </label>
        </DialogContent>
        {/* <DialogActions style={{ padding: '0' }}> */}

        {/* </DialogActions> */}
      </Dialog>
    </div >

  );
};

export default Navbar;
