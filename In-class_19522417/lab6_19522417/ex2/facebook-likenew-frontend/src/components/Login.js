import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {auth, provider} from '../firebase.js'
import {useStateValue} from "../StateProvider.js";
import {actionTypes} from "../Reducer.js";


const Login = () => {
    const [{}, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

    return(
        <LoginWrapper>
            <div className='login_logo'>
                <img src='https://res.cloudinary.com/dkwihofta/image/upload/v1671767067/124010_aahpbd.png' alt='login'/>
                <h1>Popular Social</h1>
            </div>
            <Button type='submit' className='login_btn' onClick={signIn}>Sign In</Button>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
    display: grid;
  place-items: center;
  height: 100vh;
  .login_logo{
    display: flex;
    flex-direction: column;
    img{
      object-fit: contain;
      height: 150px;
      max-width: 200px;
    }
  }
  .login_btn{
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 800;
    &:hover {
      background-color: white;
      color: #2e81f4;
    }
  }
`

export default Login