// necesary to write JSX
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App'

// finds the HTML element with id="root" in index.html file
const rootElement = document.getElementById("root");

// creates a react root using DOM container (rootElement)
const root = createRoot(rootElement);

// converts component into JSX and injects final HTML into <div id="root">
root.render(<App />);