// displays the message, and wraps it in a div with a specific css class that
// we'll use for styling. We use the children prop again here, so the parent can
// decide what to put there
export const Message = ({ children }) => {
  return <div className="notification-message">{children}</div>
}
