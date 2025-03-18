import { selector } from 'recoil';

import questionsAtom from './questionsAtom';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => get(questionsAtom).length,
});

export default questionsLengthSelector;
