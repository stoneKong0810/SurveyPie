import ActionButtons from './ActionButtons/ActionButtons';
import Description from './Description/Description';
import SurveyForm from './SurveyForm/SurveyForm';
import Title from './Title/Title';

function QuestionBox({ question, steps, questionsLength, answer, setAnswer }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <SurveyForm
        formType={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons steps={steps} questionsLength={questionsLength} />
    </div>
  );
}

export default QuestionBox;
