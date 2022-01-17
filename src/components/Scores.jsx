function Scores(props){

    return(

        <div id="score">
            <p><b><u>Date</u>: </b>{props.score.date}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p><b><u>Score</u>: </b>{props.score.score}</p>

        </div>
    )
}
export default Scores