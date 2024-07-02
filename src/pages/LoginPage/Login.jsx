import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
  }

  return (
    <div className = "flex-col flex items-center justify-center  mx-auto">

        <div className='mt-[180px] border-2 py-[40px] px-[50px] rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] m-2.5 p-5'>

            <div className = "flex flex-col text-[32px] font-bolder items-center justify-center">
                <div>Войти</div>
            </div>
            <div className = "flex flex-col items-start justify-center mt-[20px] h-[40px]">
                <input
                value={email}
                placeholder = "email"
                onChange = {(ev) => setEmail(ev.target.value)}
                className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-solid border-[grey]"
                />
                <label className="text-[red] text-xs">{emailError}</label>
            </div>
            <div className= "flex flex-col items-start justify-center mt-[20px] h-[40px]">
                <input
                value={password}
                placeholder = "Пароль"
                onChange = {(ev) => setPassword(ev.target.value)}
                className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-solid border-[grey]"
                />
                <label className = "text-[red] text-xsl">{passwordError}</label>
            </div>
        
            <div className = 'flex flex-col items-start justify-center mt-[30px]'>
                <input className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-[1px] border-[var(--color-pantone357C)] hover:bg-green-600 cursor-pointer hover:text-white"  type="button" onClick={onButtonClick} value={'Войти'} />
            </div>
        </div>

    </div>
  )
}

export default Login