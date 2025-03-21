import { useRecoilValue } from 'recoil';

import surveyAtom from '../stores/survey/surveyAtom';
import useStep from './useStep';

function useCurrentQuestion() {
  const steps = useStep();
  const surveyData = useRecoilValue(surveyAtom);
  const questions = surveyData.questions || [];

  return questions[steps];
}

export default useCurrentQuestion;
