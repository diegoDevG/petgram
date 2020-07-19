import React from 'react'
import UserForm from './../components/UserForm/index';
import { useStateValue } from './../state';
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION, LOGIN_MUTATION } from './../gql/mutations/AuthMutation';


const NotRegisterUser = () =>{
    const [{user}, dispatch] = useStateValue()
    const [ signup, {data, loading, error}] = useMutation(SIGNUP_MUTATION, {
        onCompleted() {
            dispatch({
                type: 'changeAuth',
                newIsAuth: { isAuth: true}
            })
        }       
    })

    const [ login, {logingdata, logingLoading, errorLogin}] = useMutation(LOGIN_MUTATION, {
        onCompleted() {
            dispatch({
                type: 'changeAuth',
                newIsAuth: { isAuth: true}
            })
        }       
    })

    const handleOnSubmit = ({ email, password }) => {
        const input = { email, password }
        signup({
            variables: {input}
        })       
    }

    const handleOnSubmitlogin = ({ email, password }) => {
        const input = { email, password }
        login({
            variables: {input}
        })       
    }

    const erorMsg = error && `${error}`
    const errorMsgLogin = errorLogin && ` ${errorLogin}`

    return(
        <>
            <UserForm title={'Registrarse'} onSubmit={handleOnSubmit} error={erorMsg} disabled={loading}/>          
            <UserForm title={'Iniciar Sesión'} onSubmit={handleOnSubmitlogin} error={errorMsgLogin} disabled={logingLoading} />
            {/* {errorLogin && <Error>{errorMsgLogin}</Error> } */}
        </>
    )
}

export default NotRegisterUser

