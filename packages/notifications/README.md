# @musica-sacra/notifications

Complex notification system for MusicaSacra apps.

This plugin utilizes react contextApi and creates NotificationsContextProvider to wrap your application with.

## Installation

`npm install @musica-sacra/notifications`

## Basic Usage

```jsx
// Import the context provider and wrap your application with it:

import { ExampleComponent } from './components/exampleComponent/ExampleComponent';
import { NotificationsContextProvider } from '@musica-sacra/notifications';

export function App() {
    return (
        <div className="App">
            <NotificationsContextProvider>
                <ExampleComponent />
            </NotificationsContextProvider>
        </div>
    );
}
```

```jsx
// Inside your components, you can use the provided methods like addNotification or removeNotifiction:

import { useContext} from 'react';
import { NotificationsContext, NotificationTypes } from '@musica-sacra/notifications';

export function ExampleComponent() {
    const { addNotification, removeNotification } = useContext(NotificationsContext);
    
    // const addNotification: (message: string, type?: NotificationTypeType, timeout?: number) => string
    // This will create a notification with message, type of succes and timeout of 5 seconds
    // The addNotification function returns the id of the created notification, so you can remove it yourself
    const notificationId = addNotification('My first notification', NotificationTypes.SUCCESS, 5000)
    
    // Remove the notification, if you dont remove it, it will remove itself after the timeout expires
    removeNotification(notificationId)
    
    return (<div>...</div>)
}
```