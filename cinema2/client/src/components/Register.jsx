import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../components/features/auth/authSlice'
import styled from 'styled-components'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

       dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

    return <>
        <WindowsStyle>
            <section className = "heading">
                <h2>
                    <FaUser /> Register
                </h2>
                <p>Please create an account</p>
            </section>

            <section className='form'> 
                <form onSubmit={onSubmit}>
                    <WindowStyle className='form-group'>
                        <input 
                            type = "text" 
                            className = 'form-control' 
                            id='name'
                            name='name' 
                            value={name} 
                            placeholder = 'Enter your name' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <WindowStyle className='form-group'>
                        <input 
                            type = "email" 
                            className = 'form-control' 
                            id='email'
                            name='email' 
                            value={email} 
                            placeholder = 'Enter your email' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <WindowStyle className='form-group'>
                        <input 
                            type = "password" 
                            className = 'form-control' 
                            id='password'
                            name='password' 
                            value={password} 
                            placeholder = 'Enter password' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <WindowStyle className='form-group'>
                        <input 
                            type = "password2" 
                            className = 'form-control' 
                            id='password2'
                            name='password2' 
                            value={password2} 
                            placeholder = 'Confrim password' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <ButtonStyle to ={'/confirm/'}>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-block'>
                                Submit
                            </button>
                        </div>
                    </ButtonStyle>
                </form>
            </section>
        </WindowsStyle>
    </>
}
const WindowsStyle = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const WindowStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ButtonStyle = styled(Link)`
  display: grid;
  justify-content: center;
 // size: 20px;
  //align-items: center;
`;

export default Register