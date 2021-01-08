import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlitzClient } from '@glitz/core';
import { GlitzProvider } from '@glitz/react';
import transformers from '@glitz/transformers';
import App from './App';

const glitz = new GlitzClient({ transformer: transformers() });

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <App />
  </GlitzProvider>,
  document.getElementById('root')
);