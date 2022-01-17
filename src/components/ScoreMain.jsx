import Scores from "./Scores"

function ScoreMain(props){


    return(
        <div>
            {props.scoreData.map((data, index) => {
                return  <Scores score={data} key={index} />
            })}
        </div>


    )
}
export default ScoreMain