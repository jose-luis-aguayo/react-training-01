import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Title} from './Components/Title'
import {List} from './Components/Fragment'
import { Component1 } from './Components/Variable';
import { CounterApp } from './Components/CounterApp';
import { Persona } from './Components/State'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title title="hola" />
  </React.StrictMode>
);