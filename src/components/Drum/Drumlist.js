import React from "react"
import Drum from "../Drum/Drum"

function Drumlist({ data }) {
  return (
    <div className="drum-container">
      {data.map((e, i) => {
        return <Drum key={i} e={e}></Drum>
      })}
    </div>
  )
}

export default Drumlist
