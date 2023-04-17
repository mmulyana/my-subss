import React, { useState, useEffect, useRef } from 'react'

const withDrawer = (WrappedComponent) => {
  const Drawer = ({ isOpen, onClose, openButton }) => {
    const drawerRef = useRef(null)

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
          onClose()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [onClose])

    return (
      <>
        {openButton}
        <div className={`relative drawer ${isOpen ? 'open' : ''}`} ref={drawerRef}>
          <WrappedComponent onClose={onClose} />
        </div>
      </>
    )
  }

  return Drawer
}

export default withDrawer
