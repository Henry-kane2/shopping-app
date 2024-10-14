import React from 'react'
import { useContext } from 'react'
import { LoginContext } from './Context/LoginContext';

const Profile = () => {
        const {username}=useContext(LoginContext);
        const {userage}=useContext(LoginContext)
        const {password}=useContext(LoginContext)

  return (
    <>
      <h1>Profile</h1>
      <h2>username:{username}</h2>
      <h2>age:{userage}</h2>
      <h2>password:{password}</h2>

    </>
  )
}

export default Profile;
