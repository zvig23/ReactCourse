import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/LayoutArea/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import interceptorsService from './Services/InterceptorsService';
import { Provider } from 'react-redux';
import { store } from './Redux/ProductsState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
interceptorsService.createInterceptors();
root.render(
    <Provider store={store}>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
