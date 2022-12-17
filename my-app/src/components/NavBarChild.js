import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <button onClick={props.handleButton}>Login</button>
        :
        <form>
            <label htmlFor="username">Username:</label>
            <input placeholder="username" id="username" />

            <label htmlFor="password">Password:</label>
            <input placeholder="password" id="password" />
            <button onClick={props.handleButton}>Submit</button>
        </form>
    )
}

export default NavBarChild