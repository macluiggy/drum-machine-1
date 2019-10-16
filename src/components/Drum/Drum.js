import React, { Fragment } from "react"

function Drum({ e: { id, src, letter } }) {
  return (
    <Fragment>
      <button
        className="drum-pad"
        id={id}
        onClick={e => playDrumSound(e.target.firstChild.id)}
      >
        <audio src={src} className="clip" id={letter}></audio>
        {letter}
      </button>
    </Fragment>
  )
}

function playDrumSound(elementId) {
  console.log(elementId)
  let audioElement = document.getElementById(elementId)
  audioElement.play()
}

export default Drum
