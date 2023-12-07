import '../styles/signin.scss'
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className='sign__body' >
        <h2>Facom Admin</h2>
        <h3>Sign in</h3>

        <div className='sign__input' >
            <input placeholder='Enter your email' />
            <input placeholder='Enter your password' />
        </div>

        <Link to={'/dash'} >
            <h4 className='sign__btntxt' >Sign in</h4>
        </Link>
    </div>
  )
}

export default SignIn