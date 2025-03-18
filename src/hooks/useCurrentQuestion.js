import { useRecoilValue } from 'recoil';

import questionsAtom from '../stores/questions/questionsAtom';
import useStep from './useStep';

function useCurrentQuestion() {
  const steps = useStep();
  const questions = useRecoilValue(questionsAtom);

  return questions[steps];
}

export default useCurrentQuestion;
