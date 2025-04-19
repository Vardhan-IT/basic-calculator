import React, { useState } from "react";
import styled from "@emotion/styled";

const CalculatorContainer = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Display = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 24px;
  text-align: right;
  border: none;
  border-radius: 5px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.operator ? "#ff9500" : "#fff")};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleNumber = (num) => {
    setDisplay(display + num);
  };

  const handleOperator = (op) => {
    setDisplay(display + op);
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  return (
    <CalculatorContainer>
      <Display value={display} readOnly />
      <ButtonGrid>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleOperator("/")} operator>
          /
        </Button>
        <Button onClick={() => handleOperator("*")} operator>
          ×
        </Button>
        <Button onClick={() => handleOperator("-")} operator>
          -
        </Button>

        <Button onClick={() => handleNumber("7")}>7</Button>
        <Button onClick={() => handleNumber("8")}>8</Button>
        <Button onClick={() => handleNumber("9")}>9</Button>
        <Button onClick={() => handleOperator("+")} operator>
          +
        </Button>

        <Button onClick={() => handleNumber("4")}>4</Button>
        <Button onClick={() => handleNumber("5")}>5</Button>
        <Button onClick={() => handleNumber("6")}>6</Button>
        <Button onClick={handleEqual} operator>
          =
        </Button>

        <Button onClick={() => handleNumber("1")}>1</Button>
        <Button onClick={() => handleNumber("2")}>2</Button>
        <Button onClick={() => handleNumber("3")}>3</Button>
        <Button onClick={() => handleNumber("0")}>0</Button>
      </ButtonGrid>
    </CalculatorContainer>
  );
}

export default Calculator;
