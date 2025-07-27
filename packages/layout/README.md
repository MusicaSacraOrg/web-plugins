# @musica-sacra/layout

Layout components for building easy and consistent web app layouts in React.

## Installation

npm install @musica-sacra/layout --save

## Provided Components

This package provides the following React layout components:

- `Container`: Main container for the app layout.
- `LayoutBasic`: Basic layout structure with header, main, and footer.
- `LayoutWithSidebar`: Layout with an optional side navigation panel.
- `TwoSidebarLayout`: Layout with both left and right sidebars.

## Basic Usage

Here’s a minimal example of how to use a layout component in your React app:

```import React from "react";
import { LayoutWithSidebar } from "@musica-sacra/layout";

function App() {
return (
<LayoutWithSidebar
sidebar={<div>Navigation</div>}
header={<header>My App</header>}
footer={<footer>© 2025 Musica Sacra</footer>}
>
<main>Main Content</main>
</LayoutWithSidebar>
);
}

export default App;```
