import React from 'react'

function UserLoggedIn(props) {
  return (
    <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <button onClick={props.handleLoggOut}>Log out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={props.handleLoggIn}>Log in</button>
                    </div>
                )
            }
        </div>
  )
}

export default UserLoggedIn