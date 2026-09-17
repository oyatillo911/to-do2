import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
function App() {
  const [userdata, setuserdata] = useState(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[],);
  localStorage.setItem("data", JSON.stringify(userdata))
  
  
  const [mode, setmode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "lightmode");
  localStorage.setItem("mode", mode)

  const [modal, setmodal] = useState(false)

  const [name, setname] = useState("")
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
                  setmodal(true)
                }}><FaPlus /></button>
              </div>
              <div className="hero_mini">
                {
                  userdata.map((item, i) => {
                    return <div className="mini_cards" key={i}>
                      <div className="mini_left">
                        <div className="submit">

                        </div>
                        <div className="mini_info">
                          <h1>{item.name}</h1>
                        </div>
                      </div>
                      <div className="mini_right">
                        <div className="mini_icon">
                          <button><MdOutlineEdit /></button>
                        </div>
                        <div className="mini_icon" >
                          <button onClick={() =>{
                            const newdata = userdata.filter((info)=>{
                              return info.id !== item.id;
                            })
                            setuserdata(newdata)
                          }}><RiDeleteBin5Line /></button>
                        </div>
                      </div>
                    </div>

                  })

                }

              </div>
            </div>
          </div>
        </div>
        {
          modal && <div className="modal" >
            <h1>New Note</h1>
            <form action="" onSubmit={(e) => {
              e.preventDefault()

            }}>
              <input
                value={name}
                type="text" onInput={(e) => {
                  setname(e.target.value)
                }}
                placeholder='Input your note...'
              />
            </form>
            <div className="modal_btn">
              <div className="cancel">
                <button onClick={() => {
                  setmodal(false)
                }}>Cancel</button>
              </div>
              <div className="apply" typeof='submit'>
                <button type='button' onClick={() => {
                  if (!name.trim()) return;
                  const obj = {
                    id: Math.floor(Math.random() * 9999),
                    name: name,
                  }
                  setuserdata([...userdata, obj])
                  setname("")
                  setmodal(false)
                }}>Apply</button>
              </div>
            </div>
          </div>
        }


      </header>
    </div>
  )
}

export default App