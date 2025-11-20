import { useEffect } from 'react';
import  { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {
const authStatus = useAuthStore(state => state.status);
const login = useAuthStore( state => state.login);
const logout = useAuthStore(state => state.logout);
const uaer = useAuthStore(state => state.user);

useEffect(()=>{
  setTimeout(()=>{

    logout();
  }, 1500);
}, [])

if (authStatus === 'checking') {
  return <h3>Loading..</h3>
}


  return (
    <>
    <h3>Login Page</h3>
    {
      (authStatus === 'authenticaded'
        ? <div> autenticado como {JSON.stringify(uaer, null, 2)}</div>
        : <div>no autenticado</div>
      )
    }
    {
      (authStatus === 'authenticaded')
      ?(
        <button onClick={logout}>Logout</button>
      )
      : (
        <button onClick={ ()=> login('daniel@gmail.com','123')}>Login</button>
      )
    }

    </>
  )
}
