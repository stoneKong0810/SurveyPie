import { atom } from 'recoil';

import questionsData from '../../data/questionsData';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: questionsData,
});

export default questionsAtom;
