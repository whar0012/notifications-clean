import { useState } from 'react'
import { Notification } from './components/notification'
import { Sender } from './components/sender'
import { Message } from './components/message'
import notifications from './notifications'
import './App.css'

function App() {
  // take the initial notifications and put them in state
  // so that we can remove them when the user clicks the close button
  const [data, setData] = useState(notifications)

  // when the user closes one of the notifications
  // we filter out the notification with that id
  // so that our state only contains unclosed notifications
  const handleClose = (id) => {
    setData(data.filter((x) => x.id !== id))
  }

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>
        {/* keep in mind plural form, avoid: you have 1 notifications */}
        {/* so check if length is 1, if so dont put an s at the end, making the word "notifiation" */}
        {/* if length is larger than 1, then we put an s at the end, making the word "notifications" */}
        You have {data.length} notification{data.length === 1 ? '' : 's'}
      </p>

      {/* the clear all button sets the data in state to an empty array */}
      {/* because we "map" over that data, if it's empty. we don't render anything */}
      {/* and no notifications are shown */}
      <button onClick={() => setData([])}>Clear all notifications</button>
      <div>
        {/* we set the notifications in state, it's an array. to display them we "map" over them */}
        {data.map((item) => (
          // foreach notification we render the "Notification" component and set the content as children prop
          <Notification
            // when you map over an array, and you want to render a react component for each item
            // you **must** set a unique "key" property. each notification has an ID property
            // so we will use that
            key={item.id}
            // we pass a function to our component, that will remove the item with that id from the state
            // which makes it not show up any more
            onClose={() => handleClose(item.id)}
          >
            {/* "inside" the notification component, we add 2 children in the children prop */}
            {/* the first is the sender name */}
            <Sender>{item.name}</Sender>
            {/* // and the second is the message */}
            <Message>{item.message}</Message>
          </Notification>
        ))}
      </div>
    </div>
  )
}

export default App
