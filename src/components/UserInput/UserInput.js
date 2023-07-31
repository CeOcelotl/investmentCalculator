import React, { useState } from "react";

const initialUserInput = {
  currentSavings : 10000,
  yearlyContribution : 1200,
  expectedReturn : 7,
  duration:10
}

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  //表單提交
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  //表單重製
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  //通用事件處理函式
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput)=>{
      return{
        ...prevInput,
        [input]: value //動態設定物件的屬性，可以在更新狀態時，根據不同的 input 值，更新對應的屬性值。
      }
    });
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
            value={userInput['currentSavings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
            value={userInput['yearlyContribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
            value={userInput['expectedReturn']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
