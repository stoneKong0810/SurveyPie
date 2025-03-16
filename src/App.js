import { Route, Routes } from 'react-router';

import CompletionPage from './pages/CompletionPage/CompletionPage';
import SurveyPage from './pages/SurveyPage/SurveyPage';

function App() {
  return (
    <div className={'App'}>
      <Routes>
        <Route path={'/survey/:surveyId'} element={<SurveyPage />}>
          <Route path={':step'} element={<SurveyPage />} />
        </Route>
        <Route path={'/done'} element={<CompletionPage />} />
      </Routes>
    </div>
  );
}

export default App;
