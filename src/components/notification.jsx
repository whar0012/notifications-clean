import './notification.css'

// the notification component takes 2 props
// children: which is the content that we'll display in the div with class "notification-content"
//   this gives us the ability to decide, where the content should go
//   but leave the decision what it should look like, and behave like to the parent component.
// onClose: we expect a close function. We don't know what it does, we let the parent decide
//   in this component, we trigger it when the "close" button is clicked
export const Notification = ({ children, onClose }) => {
  return (
    <div className="notification">
      <div className="notification-button" onClick={onClose}>
        CLOSE
      </div>
      <div className="notification-content">{children}</div>
    </div>
  )
}
