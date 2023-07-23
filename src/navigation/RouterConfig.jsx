import { Route, Routes } from 'react-router-dom';

import { HOME, START_QUIZ } from './CONSTANTS';
import { Home, StartQuiz } from '../pages';

import { Page } from '../components';

function RouterConfig() {
    return (
      <Routes>
        <Route path="/" element={<Page />}>
  
          <Route exact path={HOME} element={<Home />} />
          <Route exact path={START_QUIZ} element={<StartQuiz />} />
        </Route>
      </Routes>
    );
  }
  
  export default RouterConfig;