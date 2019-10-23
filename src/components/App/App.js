import React, { createContext, useState } from "react"
import Display from "../Display/Display"
import Drumlist from "../Drum/Drumlist"
import { audioData_1 } from "../utils/utils"

export const AppContext = createContext()
function App() {
  const [Switch, toggleSwitch] = useState(false)
  const [drumAudio, setDrumAudio] = useState("")
  const [audioTrack, setAudioTrack] = useState(audioData_1)
  const appState = {
    drumAudio,
    setDrumAudio,
    Switch,
    toggleSwitch,
    audioTrack,
    setAudioTrack
  }

  return (
    <AppContext.Provider value={appState}>
      <div>
        <h1>Drum machine</h1>
      </div>
      <div id="drum-machine">
        <Display />
        <Drumlist data={audioTrack} />
      </div>
    </AppContext.Provider>
  )
}

export default App
