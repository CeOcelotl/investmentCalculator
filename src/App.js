import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);//userInput 這裡是儲存使用者輸入的數據
  const calculateHandler = (userInput) => { // userInput 這裡是參數，會傳遞給 setUserInput 函式，用於更新 userInput 狀態的值。
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
     {!userInput && <p>No investment calculated yet.</p>}
     {userInput &&<ResultsTable data={yearlyData} initialInvestment={userInput['currentSavings']}/>}
    </div>
  );
}

export default App;
