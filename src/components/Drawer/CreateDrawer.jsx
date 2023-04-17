import React from 'react'
import withDrawer from './withDrawer'

const Create = ({ isOpen, onClose }) => {
  return (
    <div>
      <h1>Content Component</h1>
      <p>Some text goes here...</p>
    </div>
  )
}

const CreateWithDrawer = withDrawer(Create)

export default CreateWithDrawer
