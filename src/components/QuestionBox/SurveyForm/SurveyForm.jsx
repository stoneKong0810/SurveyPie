import styled from 'styled-components';

import SelectInput from './SelectInput/SelectInput';
import TextAreaInput from './TextAreaInput/TextAreaInput';
import TextInput from './TextInput/TextInput';

function SurveyForm({ formType, answer, setAnswer, options }) {
  let InputComponent = null;

  if (formType === 'select') {
    InputComponent = SelectInput;
  } else if (formType === 'text') {
    InputComponent = TextInput;
  } else if (formType === 'textarea') {
    InputComponent = TextAreaInput;
  }

  return (
    <SurveyFormWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </SurveyFormWrapper>
  );
}

const SurveyFormWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;

export default SurveyForm;
