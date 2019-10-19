import React, { Fragment, useContext } from "react"
import { AppContext } from "../App/App"

function Display() {
  const { drumAudio } = useContext(AppContext)

  return (
    <Fragment>
      <div id="display">{drumAudio}</div>
    </Fragment>
  )
}

export default Display
