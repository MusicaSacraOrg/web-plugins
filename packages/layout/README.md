# `@musica-sacra/layout`

Layout components for building easy and consistent web app layouts in React.

## Installation

```
npm install @musica-sacra/layout --save
```

## Provided Components

This package provides the following React layout components:

- `Layout`: Main container for the app layout.
- `Header`: Top navigation or branding section.
- `Sidebar`: Optional side navigation panel.
- `Main`: Main content area.
- `Footer`: Bottom section of the layout.

## Basic Usage

Here’s a minimal example of how to use the layout components in your React app:

```tsx
import React from "react";
import { Layout, Header, Sidebar, Main, Footer } from "@musica-sacra/layout";

function App() {
  return (
    <Layout>
      <Header>My App</Header>
      <Sidebar>Navigation</Sidebar>
      <Main>Main Content</Main>
      <Footer>© 2025 Musica Sacra</Footer>
    </Layout>
  );
}

export default App;
```

## Notes

- All components are built using Flexbox.
- They support composition and custom classNames or styles.
- Intended to work well with Tailwind CSS or similar utility-first frameworks.
