import React, { useContext } from "react"
import { AppContext } from "../App/App"
import { audioData_1, audioData_2 } from "../utils/utils"

function Display() {
  const {
    drumAudio,
    setDrumAudio,
    Switch,
    toggleSwitch,
    setAudioTrack,
    audioTrack
  } = useContext(AppContext)

  const toogle = () => {
    toggleSwitch(!Switch)
    setDrumAudio("")
  }

  const toogleAudioList = () => {
    if (audioTrack === audioData_1) {
      setAudioTrack(audioData_2)
      setDrumAudio("")
    } else {
      setAudioTrack(audioData_1)
      setDrumAudio("")
    }
  }

  return (
    <div className="item-container">
      <div id="display">{drumAudio.toUpperCase()}</div>
      <div id="drum-switch">
        <button id={Switch ? `button-off` : `button-on`} onClick={toogle}>
          {Switch ? "TURN OFF" : "TURN ON"}
        </button>
      </div>
      <div id="audio-switch">
        {Switch ? (
          <button onClick={toogleAudioList} id="change-audio-button-on">
            {audioTrack === audioData_1
              ? `Playing audio track 1. Click here to change`
              : `Playing audio track 2. Click here to change`}
          </button>
        ) : (
          <button id="change-audio-button-off">
            Playing audio track 1. Click here to change
          </button>
        )}
      </div>
    </div>
  )
}

export default Display
