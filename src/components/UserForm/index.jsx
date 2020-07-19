import React, { useState } from 'react'
import { Form, Input, Button, Title, Error } from './styles'

//Custom hook
const useInputValue = initialValue => {
    const [value, setValue] = useState('')
    const onChange = e => setValue(e.target.value)

    return { value, onChange }
}

const UserForm = ({ onSubmit, title, error, disabled }) =>{
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit({ 
            email: email.value, 
            password: email.value 
        })
    }

    return(
        <>
            <Form onSubmit= { handleSubmit } disabled={disabled}>
                <Title>{ title }</Title>
                <Input type="email" required placeholder='Email' {...email} disabled={disabled}/>
                <Input type="password" required placeholder='Password' {...password} disabled={disabled}/>
                <Button disabled={disabled}>{ title }</Button>
            </Form>
            {error && <Error>{error}</Error> }
            {/* {error && <Error>{errorMsgLogin}</Error> } */}
        </>
    )
}

export default UserForm
