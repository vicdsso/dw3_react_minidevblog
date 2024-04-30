import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userAutentication } from '../hooks/userAutentication'
import { useAuthValue } from '../context/AuthContext'
import styles from './NavBar.module.css'

const NavBar = () => {
  const { user } = useAuthValue()
  const { logout } = userAutentication()
  const navigate = useNavigate()
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
          Blog <span>Dev</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to='/'
              className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to='/login'
                  className={({ isActive }) => (isActive ? styles.active : null)}>Login</NavLink>
              </li>
              <li>
                <NavLink to='/register'
                  className={({ isActive }) => (isActive ? styles.active : null)}>Register</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to='/createPost'
                  className={({ isActive }) => (isActive ? styles.active : null)}>New Post</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard'
                  className={({ isActive }) => (isActive ? styles.active : null)}>Dashboard</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to='/about'
              className={({ isActive }) => (isActive ? styles.active : null)}>About</NavLink>
          </li>
          {user && (
            <li>
              <button className={styles.logout} onClick={logout}>Exit</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavBar