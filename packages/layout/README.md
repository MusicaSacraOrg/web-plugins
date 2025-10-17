# @musica-sacra/layout

Layout components for building easy and consistent web app layouts in React.

## Installation

`npm install @musica-sacra/layout --save`

## Provided Components

This package provides the following React layout components:

- `Container`: Styled wrapper. 
- `LayoutBasic`: Single column layout utilizing previously mentioned Container as main wrapper.
- `Queen`: Double column layout with main content and left sidebar. 

## \<Container />

Basic styled wrapper that provides container of with 1200px with auto margins on sides.

```jsx
import { Container } from '@musica-sacra/layout'

export function ExampleComponent() {
    return (
        <Container>
            {/* Your Content */}
        </Container>
    )
}
```

## \<LayoutBasic />

Component for creating page layouts. Single column. Provides aditional wrapper around `<Container/>`.

```jsx
import { LayoutBasic } from '@musica-sacra/layout'

export function ExampleComponent() {
    return (
        <LayoutBasic>
            {/* Your Content */}
        </LayoutBasic>
    )
}
```

## \<Queen />

Double column layout with main content and sidebar on the left side. 

```jsx
import { Queen } from '@musica-sacra/layout'

export function ExampleComponent() {
    return (
        <Queen
            sidebar={<div>{/* Your Sidebar Content*/}</div>}
        >
            {/* Your Main Content */}
        </Queen>
    )
}
```

Also provides context through hook useSidebar(), which gives you methods:
- closeSidebar()

```jsx
import { useSidebar } from '@musica-sacra/layout';

export function ExampleSidebar() {
    const { closeSidebar } = useSidebar();

    return (
        <div>
            <button onClick={closeSidebar}>Click me</button>
        </div>
    );
}
```