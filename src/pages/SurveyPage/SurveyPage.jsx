import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import QuestionBox from '../../components/QuestionBox/QuestionBox';
import questionsData from '../../data/questionsData';

function SurveyPage() {
  const questions = questionsData;

  const [answers, setAnswers] = useState([]);

  const params = useParams();

  const steps = parseInt(params.step);
  return (
    <SurveyPageWrapper>
      {/*<ProgressIndicator />*/}
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
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
