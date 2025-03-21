import { useNavigate } from 'react-router';
import styled from 'styled-components';

import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/QuestionBox/ActionButtons/Button/Button';
import useSurveyId from '../../hooks/useSurveyId';

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congrats} alt={'done'} width={'209px'} height={'204px'} />
      <MidText>설문이 완료되었습니다!</MidText>
      <ReloadButton
        type={'TERTIARY'}
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt={'reload'} width={'24px'} height={'24px'} />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButton = styled(Button)`
    display: inline-flex;
    align-items: center;: 10 px;
`;

export default CompletionPage;
