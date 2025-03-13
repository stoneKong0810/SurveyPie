import TextInput from './TextInput/TextInput';

function SurveyForm({ formType, answer, setAnswer }) {
  let InputComponent = null;

  if (formType === 'select') {
    //Todo: 셀렉트 인풋 컴포넌트 만들어야 함 InputComponent = SelectInput;
  } else if (formType === 'text') {
    InputComponent = TextInput;
  } else if (formType === 'textarea') {
  }

  return (
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default SurveyForm;
