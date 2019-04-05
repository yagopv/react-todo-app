import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

function TodoApp() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default TodoApp;
