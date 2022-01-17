import ScoreMain from "./ScoreMain"
function Student(props){

    return(
        <div id="student">
            <h2>Student Name: {props.studentData.name}</h2>
            <p><b>Bio: </b>{props.studentData.bio}</p>
            {/* {console.log(props.studentData.scores)}  */}
            <ScoreMain scoreData={props.studentData.scores} />

        </div>
    )
}

export default Student