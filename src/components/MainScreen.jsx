import React from 'react'
import Fire from "./video/fire.mp4"

function MainScreen() {
  return (
    <div className="mainscreen" >
      <video src={Fire} muted loop autoPlay>    </video>
      <div className="overLay"></div>
   
  
      <div className="container">
        <div className="header">
          <h1>x</h1>
          <h1>o</h1>
        </div>
        <div className="content">
          <p>TAKE A DEEP BREATH</p>
          <p>.</p>
          <h3>Reflect on 3 things you are grateful for</h3>
          <p>.</p>
          <p>SMILE</p>
        </div>
        <div className="button">
          <button>More quotes</button>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
