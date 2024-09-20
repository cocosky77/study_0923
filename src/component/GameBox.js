import "./GameBox.css";

const GameBox = ({value, onBoxClick}) => {
    return(
        <div>
            <div className='gameBoard-box' onClick={onBoxClick}>
            <div className='gameBoard-box_value'>{value}</div>
          </div>
        </div>
    )
}

export default GameBox;