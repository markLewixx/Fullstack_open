import Feedback from "./Feedback";

const Statistics =({good,neutral,bad})=>{
    const total =()=> good+neutral+bad
    let positive=good;
    let neutralVal=0;
    let negative=-bad
    console.log(positive,neutralVal,negative)
    const totalEvaluation= ((positive+neutralVal+negative)/3)*100
    const avarage=()=> totalEvaluation/total()
    const feedback=()=>{

        if(totalEvaluation>0){
            return totalEvaluation+"% : Positive"
        }
        else if(totalEvaluation<0){
            return totalEvaluation+"% : Negative"
        }
        else{
            return "Neutral"
        }
        
    }

    if(good===0 && neutral===0 && bad===0){
        return(
            <p>No feedback given</p>
        )
    }
    else
    return(
        <table>
            <tbody>
            <tr>
            <td>Good</td>
            <td>{good}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
            <td>Bad</td>
            <td>{bad}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
            <td>Total</td>
            <td>{total()}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
            <td>Avarage</td>
            <td>{avarage().toFixed(2)}</td>
            </tr>
            </tbody>
        
            <tbody>
            <tr>
            <td>Feedback Percent:</td>
            <td>{feedback()}</td>
            </tr>
            </tbody>
            
        </table>
    )
}

export default Statistics