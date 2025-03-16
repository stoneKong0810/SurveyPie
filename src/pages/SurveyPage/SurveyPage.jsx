import { useState } from 'react';
import { useParams } from 'react-router';

import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import questionsData from '../../data/questionsData';

function SurveyPage() {
  const questions = questionsData;

  const [answers, setAnswers] = useState([]);

  const params = useParams();

  const steps = parseInt(params.step);
  return (
    <>
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
    </>
  );
}

export default SurveyPage;
