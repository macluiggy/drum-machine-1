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
      <div id="display">{drumAudio}</div>
      <div id="drum-switch">
        <button onClick={toogle}>{Switch ? "OFF" : "ON"}</button>
      </div>
      <div id="audio-switch">
        {Switch ? (
          <button onClick={toogleAudioList}>Change Audio List</button>
        ) : (
          <button onClick={toogleAudioList} disabled>
            Change Audio List
          </button>
        )}
      </div>
    </div>
  )
}

export default Display
