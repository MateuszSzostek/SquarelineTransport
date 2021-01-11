import React, { useState }  from "react";

interface IScrollFunc{
  scrollTo: any;
}

export default (props: IScrollFunc) => {
  let [menuOpen, setMenuOpen] = useState(false);
  let [menuClose, setMenuClose] = useState(false);
  let [menuHover, setMenuHover] = useState(false);



  function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }

  let handleClickMenuBtn = () => {
    if(getWidth() < 1200){
      if (!menuOpen) {
        setMenuOpen(true)
      }
      else {
        setMenuClose(true);
        setTimeout(()=>{
          setMenuOpen(false);
          setMenuClose(false);
        },
        300)
      }
    }
  }
  let handleMouseEnterMenuBtn = () => {
    if (!menuHover) {
      setMenuHover(true);
    }
  }
  let handleMouseLeaveMenuBtn = () => {
    if (menuHover) {
      setMenuHover(false);
    }
  }
  let handleClickLinkBtn = () => {
    if(getWidth() < 1200)
    {
      setMenuClose(true);
    setTimeout(()=> {
      setMenuOpen(false);
        setMenuClose(false);
    },300);
    }
  }

  const dataLinks = [
    {
      id: 0,
      name: "HOME"
    },
    {
      id: 1,
      name: "ABOUT US"
    },
    {
      id: 2,
      name: "SERVICES"
    },
    {
      id: 3,
      name: "CONTACT"
    },
  ]

  let links = dataLinks.map(s => <div key={s.id} onClick={() => {props.scrollTo(s.id); handleClickLinkBtn();}} className={"nav-link" + (menuOpen ? " active" : "")}>{s.name}</div>) 

  return (
    <React.Fragment>
      <div className="nav-container flex-container row justify-content-between">
        <div className="logo flex-container">
        </div>
        <div className={"nav-elements flex-container row"  + (menuOpen ? " active" : "") + (menuClose ? " close" : "")}>
          {links}
        </div>
        <div className={"menu-button" + (menuOpen ? " open" : "") +
                (menuHover ? " hover" : "")} 
                onMouseEnter={handleMouseEnterMenuBtn}
                onClick={handleClickMenuBtn}
                onMouseLeave={handleMouseLeaveMenuBtn}>
                <div className="menu-element"></div>
                <div className="menu-element"></div>
                <div className="menu-element"></div>
              </div>
      </div>
    </React.Fragment>
  )
} 