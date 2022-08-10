import React, { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';

import Router from './router/Router';
import store from './store/store';
import { history } from './store/rootReducer';
import { loginCheck } from './utils/loginCheck';
import { onSubscribeResize, offSubscribeResize } from './utils/subscribeResize';

const App: React.FC = () => {
  loginCheck();

  useEffect(() => {
    onSubscribeResize();
    return () => offSubscribeResize();
  }, []);

  return (
    <main className="wrapper">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    </main>
  );
};

export default App;
