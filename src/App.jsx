import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
function App() {
  const [mode, setmode] = useState(localStorage.getItem("mode")?localStorage.getItem("mode"):"lightmode" );
  

  // localStorage.setItem("mode", mode)
  return (
    <div className={mode == "darkmode" ? "App dark" : "App"}>
      <header>
        <nav>
          <div className="container">
            <div className="nav_top">
              <h1>TODO LIST</h1>
            </div>
            <div className="nav_bottom">
              <form action="">
                <input type="search" placeholder='Search note...' />
                <CiSearch />
              </form>
              <div className="all_btn">
                <button>all <FaChevronDown /></button>
              </div>
              <div className="mode_btn">
                <button onClick={() => {
                  if (mode == "lightmode") {
                    setmode("darkmode")
                  }
                  else {
                    setmode("lightmode")
                  }

                }}><FaRegMoon /></button>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero_max">
              <div className="max_btn">
                <button onClick={() => {
                  if (modal == "noactive") {
                    setmodal("active")
                  }
                  else {
                    setmodal == ("noactive")
                  }
                }}><FaPlus /></button>
              </div>
              <div className="hero_mini">
                <div className="mini_cards">
                  <div className="mini_left">
                    <div className="submit">

                    </div>
                    <div className="mini_info">
                      <h1>Note #1</h1>
                    </div>
                  </div>
                  <div className="mini_right">
                    <div className="mini_icon">
                      <MdOutlineEdit />
                    </div>
                    <div className="mini_icon">
                      <RiDeleteBin5Line />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="modal" >
          <h1>New Note</h1>
          <form action="">
            <input type="text" placeholder='Input your note...' />
          </form>
          <div className="modal_btn">
            <div className="cancel">
              <button>Cancel</button>
            </div>
            <div className="apply">
              <button>Apply</button>
            </div>
          </div>
        </div>

      </header>
    </div>
  )
}

export default App