import { useRecoilState } from 'recoil';

import answersAtom from '../stores/answers/answersAtom';
import useStep from './useStep';

function useCurrentAnswer() {
  const [answers, setAnswers] = useRecoilState(answersAtom);

  const steps = useStep();

  const answer = answers[steps];
  const setAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[steps] = newAnswer;

      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
