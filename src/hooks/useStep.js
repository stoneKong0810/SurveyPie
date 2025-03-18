import { useParams } from 'react-router';

function useStep() {
  const params = useParams();
  return parseInt(params.step);
}

export default useStep;
