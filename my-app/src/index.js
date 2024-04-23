import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginForm from './components/LoginForm';
import { loginUser } from './store/actions';

const App = () => (
    <Provider store={store}>
        <LoginForm login={loginUser} />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));


