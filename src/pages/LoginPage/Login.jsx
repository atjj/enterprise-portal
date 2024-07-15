import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('');



  const handleLogin = async (e) => {
    e.preventDefault();

    
    try {
        const response = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
            "username": login,
            "password": password
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          });

      console.log(response)

      window.location.href = 'http://localhost/wordpress/wp-admin';
    } catch (err) {
        setError('Ошибка логина. Проверьте имя пользователя и пароль.');
    }
  };
  return (
    <section className = "flex-col flex items-center justify-center  mx-auto">

        <div className='mt-[180px] border-2 py-[40px] px-[50px] rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] m-2.5 p-5'>

            <div className = "flex flex-col text-[32px] font-bolder items-center justify-center">
                <div>Войти</div>
            </div>
            <div className = "flex flex-col items-start justify-center mt-[20px] h-[40px]">
                <input
                value={login}
                placeholder = "Логин"
                onChange = {(ev) => setLogin(ev.target.value)}
                className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-solid border-[grey]"
                />

            </div>
            <div className= "flex flex-col items-start justify-center mt-[20px] h-[40px]">
                <input
                value={password}
                type='password'
                placeholder = "Пароль"
                onChange = {(ev) => setPassword(ev.target.value)}
                className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-solid border-[grey]"
                />
            </div>
        
            <div className = 'flex flex-col items-start justify-center mt-[30px]'>
                <input className = "h-12 w-[400px] text-[large] border pl-2 rounded-lg border-[1px] border-[var(--color-pantone357C)] hover:bg-green-600 cursor-pointer hover:text-white"  type="button" onClick={handleLogin} value={'Войти'} />
                {error && <p>{error}</p>}
            </div>
        </div>

    </section>
  )
}

export default Login