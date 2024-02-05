import Controls from "./Controls"
import Stages from "./Stages"
import Steps from "./Steps"
import Timer from "./Timer"

function Pomodoro() {
  return (
    <>
      <Stages />
      <Timer />
      <Steps />
      <Controls />
    </>
  )
}

export default Pomodoro