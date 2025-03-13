import { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import QuestionBox from './components/QuestionBox/QuestionBox';
import questionsData from './Data/questionsData';

function App() {
  const questions = questionsData;

  const steps = 0;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[steps]}
        steps={steps}
        questionsLength={questions.length}
        answer={answers[steps]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const copyAnswers = [...answers];
            copyAnswers[steps] = newAnswer;
            return copyAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
