import { useRecoilValue } from 'recoil';

import answersAtom from '../stores/answers/answersAtom';

function useAnswers() {
  return useRecoilValue(answersAtom);
}

export default useAnswers;
