import styled from "styled-components";


const Counter = ({winCounter, loseCounter}) => {
  return (
    <CounterContainer>
        <div className="win_lose">
            <h1 className="win">Total Win: {winCounter}</h1>
            <h1 className="lose">Total Lose: {loseCounter}</h1>   
        </div> 
    </CounterContainer>
  );
}

export default Counter

const CounterContainer = styled.div`
    .win_lose{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .win{
        color: green;
    }
    .lose{
        color: red;
    }
`;