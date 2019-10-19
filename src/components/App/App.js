import React, { createContext, useState } from "react"
import Display from "../Display/Display"
import Drumlist from "../Drum/Drumlist"
import { audioData_1, audioData_2 } from "../utils/utils"

export const AppContext = createContext()
function App() {
  const [Switch, ToggleSwitch] = useState(true)
  const [drumAudio, setDrumAudio] = useState("")
  const [audioTrack, setAudioTrack] = useState(audioData_2)
  const appState = {
    drumAudio,
    setDrumAudio,
    Switch,
    ToggleSwitch
  }

  return (
    <AppContext.Provider value={appState}>
      <div id="drum-machine">
        <Display />
        <Drumlist data={audioTrack} />
      </div>
    </AppContext.Provider>
  )
}

export default App
