import { selector } from 'recoil';

import surveyState from './surveyState';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => get(surveyState).questions.length,
});

export default questionsLengthSelector;
