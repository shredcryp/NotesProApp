import React from 'react'

function MainScreen(title, children) {
  return (
    <div className="container">
        {title && (
            <>
            <h1 className="heading">{title}</h1>
            <hr />
            </>
        )}
        {children}
    </div>
  )
}

export default MainScreen