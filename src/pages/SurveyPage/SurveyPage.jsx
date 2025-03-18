import { Suspense } from 'react';
import styled from 'styled-components';

import QuestionBox from '../../components/QuestionBox/QuestionBox';

function SurveyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SurveyPageWrapper>
        {/*<ProgressIndicator />*/}
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
