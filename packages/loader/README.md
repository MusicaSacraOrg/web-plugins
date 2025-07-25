# @musica-sacra/loader

A simple and customizable React Loader component for indicating loading states in your app.

## Installation

`npm install @musica-sacra/loader`

## Basic Usage

```jsx
// Any of your component file, e.g. AppComponent.tsx

import { Loader } from "@musica-sacra/loader";

function App() {
  return (
    <Loader loading={true}>
      {/* This content will be shown when loading is false */}
      <div>Content loaded!</div>
    </Loader>
  );
}

