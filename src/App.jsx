import React from 'react';
import Counter from './components/Counter';

export default function App() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>My React Counter</h1>
        <p className="page__intro">
          A small interactive application built with React and tested with Vitest.
        </p>
      </header>

      <Counter />

      <footer className="page__footer">
        Built with React · Tested with Vitest and React Testing Library
      </footer>
    </main>
  );
}
