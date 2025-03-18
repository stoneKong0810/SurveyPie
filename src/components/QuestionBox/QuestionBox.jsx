import { useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import answersAtom from '../../stores/answers/answersAtom';
import questionsAtom from '../../stores/questions/questionsAtom';
import ActionButtons from './ActionButtons/ActionButtons';
import Description from './Description/Description';
import SurveyForm from './SurveyForm/SurveyForm';
import Title from './Title/Title';

function QuestionBox() {
  const [answers, setAnswers] = useRecoilState(answersAtom);
  const questions = useRecoilValue(questionsAtom);

  const params = useParams();
  const steps = parseInt(params.step);
  const question = questions[steps];
  const answer = answers[steps];

  const setAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[steps] = newAnswer;

      return newAnswers;
    });
  };

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <SurveyForm
        formType={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
