import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const steps = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData.questions || [];

  return questions[steps];
}

export default useCurrentQuestion;
