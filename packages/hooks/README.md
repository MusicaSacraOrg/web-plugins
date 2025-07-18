# @musica-sacra/hooks

Plugin with useful hooks for MusicaSacra web applications.

## Installation

```console
npm install @musica-sacra/hooks --save
```

<br/>

---

# Hook useBem

Hook for creating css classes with bem naming convention. 

## Basic Usage

Hook useBem accepts one required argument: the base classname of the parent. 

```jsx
import { useBem } from '@musica-sacra/hooks'

function App() {
    const { bem, element, modifier } = useBem('app'); // Pass the parent base className as argument
    
    return (
        <div className={bem()}> {/* Will return base classname 'app' */}
            <div className={bem('child')}> {/* Will return 'app__child' classname */}
                ...
            </div>
        </div>
    )
}
```

## Methods

### bem(name?: string | Record<string / boolean>)
Base method. Returns scrambled classname string.

```js
bem() // Without argument, returns base
bem('child') // With string paassed, returns 'base__child'
bem({
    'child': true,
    'child--blue': false
}) // With object passed, will go trough each key and return joined classname from truthy values
```

### element()

Returns unscrambled classname string.

```js
element() // Without argument, returns base
element('child') // With string paassed, returns 'base__child'
element({
    'child': true,
    'child--blue': false
}) // With object passed, will go trough each key and return joined classname from truthy values
```

### modifier()

Method for applying bem modifiers only.

```js
modifier() // Without argument, returns base
modifier('modifier') // With string paassed, returns 'base--modifier'
modifier({
    'blue': true,
    'red': false
}) // With object passed, will go trough each key and return joined classname from truthy values
```

