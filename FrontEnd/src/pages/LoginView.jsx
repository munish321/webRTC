import { useState } from 'react'
import { factory } from '../repository/factory'
function LoginView() {
    const [response,setResponse]=useState(null)
    const loginRepository = factory.get('login')
    const handleSubmit =async()=>{
        const payload = {
            username: 'kminchelle',
            password: '0lelplR',
        }
       const res = await loginRepository.createLoginSession('auth/login',payload)
       setResponse(res)
    }
  return (
    <>
        <div onClick={handleSubmit} >LoginView</div>
        <p>{JSON.stringify(response?.data)}</p>
    </>
    
  )
}

export default LoginView