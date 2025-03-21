import { selector } from 'recoil';

import getSurvey from '../../services/getSurvey';

const surveyAtom = selector({
  key: 'surveyAtom',
  get: async () => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);

    return res.data;
  },
});

export default surveyAtom;
