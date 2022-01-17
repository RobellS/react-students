
import ScoreMain from "./ScoreMain"
import Student from "./Student"

function Main(props){


    return(
        <div>
            {/* {console.log(props.studentData.students)} */}
            {props.studentData.students.map((studentData, index) => {
                return  <Student studentData={studentData} key={index} />
            })}
        </div>


    )
}
export default Main