import React from 'react'
import { githubLogo2, googleLogo } from '../Assets'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { addUser, removeUser } from '../redux/bazarSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = e => {
    if (e) e.preventDefault()
    // Rest of your function code
    console.log(auth)
    signInWithPopup(auth, provider)
      .then(result => {
        // The signed-in user info.
        const user = result.user
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            image: user.photoURL,
            email: user.email
          })
        );
        setTimeout(() => {
          navigate('/')
        }, 1500);
        //...
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out sucessful
        toast.success('Log out Sucessfully!')
        dispatch(removeUser());
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div
          onClick={handleGoogleLogin}
          className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'
        >
          <img className='w-8' src={googleLogo} alt='googleLogo' />
          <span className='text-sm text-gray-900'>Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
        >
          Sign Out
        </button>
      </div>
      <div className='w-full flex items-center justify-center gap-10'>
        <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
          <img className='w-12' src={githubLogo2} alt='githubLogo' />
          <span className='text-sm text-gray-900'>Sign in with GitHub</span>
        </div>
        <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>
          Sign Out
        </button>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Login
