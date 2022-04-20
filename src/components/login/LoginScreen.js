import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


export const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    
    dispatch({
      type: types.login,
      payload: {
        name: 'wfgp12'
      }
    })

    const lastPath = localStorage.getItem('location') || '/'
    navigate(lastPath,{
      replace: true
    })
    
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />

        <button 
          className='btn btn-primary'
          onClick={handleLogin} 
        >
          Login
        </button>
    </div>
  )
}