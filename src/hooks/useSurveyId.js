import { useParams } from 'react-router';

function useSurveyId() {
  const params = useParams();
  return parseInt(params.surveyId);
}

export default useSurveyId;
