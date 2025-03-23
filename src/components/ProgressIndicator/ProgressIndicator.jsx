import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import questionsLengthSelector from '../../stores/survey/qustionsLengthSelector';
import Bar from './Bar/Bar';

function ProgressIndicator() {
  const questionsLength = useRecoilValue(questionsLengthSelector);
  const [answers] = useAnswers();
  const steps = useStep();

  const bars = [];
  for (let i = 0; i < questionsLength; i++) {
    let status = 'PENDING';
    if (i === steps) {
      status = 'IN-PROGRESS';
    } else if (answers[i]) {
      status = 'DONE';
    }
    bars.push(<Bar status={status} key={i} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{steps + 1}</span>/{questionsLength}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #636262;
  margin-left: 8px;

  span {
    font-weight: bold;
    color: #121111;
  }
`;

export default ProgressIndicator;
