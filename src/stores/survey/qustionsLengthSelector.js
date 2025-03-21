import { selector } from 'recoil';

import surveyAtom from './surveyAtom';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => get(surveyAtom).questions.length,
});

export default questionsLengthSelector;
