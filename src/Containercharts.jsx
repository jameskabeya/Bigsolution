import Chartwork from "../Charts/Chartwork"
import Charttask from "../Charts/Charttask"
import Chartperformance from "../Charts/Chartperformance"
export default function Containercharts() {
    return (
        <div className="flex mt-20 ml-[20%] w-[70%] justify-between p-6">
            <div className="gap-2">
                <img src="./src/assets/project.svg" alt="" />
                <Chartperformance />
            </div>
            <div>
                <Chartwork />
                <Charttask />
            </div>
        </div>
    )
}