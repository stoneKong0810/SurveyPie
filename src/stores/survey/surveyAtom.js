import { selector } from 'recoil';

import mainApi from '../../services/apis/mainApi';

const surveyAtom = selector({
  key: 'surveyAtom',
  get: async () => {
    const res = await mainApi.get(
      `/surveys/${window.location.pathname.split('/')[2]}`,
    );
    return res.data;
  },
});

export default surveyAtom;
