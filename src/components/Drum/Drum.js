import React, { useEffect, useContext } from "react"
import { AppContext } from "../App/App"

function Drum({ e: { id, src, letter } }) {
  const { setDrumAudio, Switch } = useContext(AppContext)
  let audioElement = null
  let audioRef = React.createRef()

  useEffect(() => {
    document.addEventListener("keydown", playDrumSoundFromKeyboard)
    return () =>
      document.removeEventListener("keydown", playDrumSoundFromKeyboard)
  })

  function playDrumSound() {
    if (Switch) {
      audioElement = audioRef.current
      if (!audioElement) return
      // console.log(audioElement)
      setDrumAudio(audioElement.parentNode.id)
      audioElement.volume = 0
      audioElement.currentTime = 0
      audioElement.volume = 1
      audioElement.play()
    }
  }

  function playDrumSoundFromKeyboard(event) {
    if (Switch) {
      audioElement = document.getElementById(event.key.toUpperCase())
      if (!audioElement) return
      setDrumAudio(audioElement.parentNode.id)
      audioElement.click()
    }
  }

  return (
    <div className="drum-items">
      {Switch ? (
        <button className="drum-pad" id={id} onClick={playDrumSound}>
          <audio src={src} className="clip" id={letter} ref={audioRef}></audio>
          {letter}
        </button>
      ) : (
        <button
          className="drum-pad"
          id={id}
          // onClick={e => playDrumSound(e.target.firstChild.id)}
          disabled
        >
          {/* <audio src={src} className="clip" id={letter}></audio> */}
          {letter}
        </button>
      )}
    </div>
  )
}

export default Drum
