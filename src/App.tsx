import React from 'react';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          React + TypeScript + Tailwind + Firebase
        </h1>
        <ExampleComponent 
          title="Composant Exemple" 
          description="Un exemple de composant utilisant TypeScript et TailwindCSS" 
        />
      </div>
    </div>
  );
}

export default App;
