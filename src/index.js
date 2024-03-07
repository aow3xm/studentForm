import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSinhVien from './Components/SinhVien/FormSinhVien';

ReactDOM.render(
  <Provider store={store}>
    <FormSinhVien/>
  </Provider>,
  document.getElementById('root')
);