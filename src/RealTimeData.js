import {app} from "./firebase"
import {getDatabase,ref,set} from "firebase/database"
const db=getDatabase(app)

function RealTimeData(){
  const PutData=()=>{
    set(ref(db,'user/khushboo'),{
      id:1,
      name:"khushboo",
      age:"18"
    })
  }
  return(
    <div className="App">
      <button className="" onClick={PutData}>save</button>

    </div>
  )
}
export default RealTimeData;