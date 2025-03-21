import { Route, Routes } from 'react-router';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage/CompletionPage';
import SurveyPage from './pages/SurveyPage/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path={'/survey/:surveyId'} element={<SurveyPage />}>
            <Route path={':step'} element={<SurveyPage />} />
          </Route>
          <Route path={'/done/:surveyId'} element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  background-color: #fff;
  width: 800px;
  min-height: 500px;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
