import { useRecoilState } from 'recoil';

import answersAtom from '../stores/answers/answersAtom';

function useAnswers() {
  return useRecoilState(answersAtom);
}

export default useAnswers;
