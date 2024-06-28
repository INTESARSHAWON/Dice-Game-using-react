import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  
  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max-min) + min));
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDice = ()=>{
    if(!selectedNumber){
      setError("You haven't select any number");
      return;
    } 
    setError("");

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber == randomNumber){
      setScore((prev)=> prev + randomNumber);
    }
    else{
      setScore((prev)=> prev - 2);
    }

    setSelectedNumber(undefined);
  }

  const resetScore= () =>{
    setScore(0);
  }

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector
              error={error}
              setError={setError}
              selectedNumber={selectedNumber} 
              setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RoleDice
          currentDice={currentDice} roleDice={roleDice}
        />
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={()=> setShowRules((prev=> !prev))}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>

        {showRules && <Rules/>}

    </MainContainer>    
  );
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;