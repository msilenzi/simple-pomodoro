import Controls from "./Controls"
import Stages from "./Stages"
import Steps from "./Steps"
import Timer from "./Timer"

function Pomodoro() {
  return (
    <div className="pomodoro flex flex-centered flex-column g-3">
      <Stages />
      <Timer />
      <Steps />
      <Controls />
    </div>
  )
}

export default Pomodoro