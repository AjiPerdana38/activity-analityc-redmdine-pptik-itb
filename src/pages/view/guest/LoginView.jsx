import React from 'react'
import ilustration from '../../components/assets/loginImage.png'

const LoginView = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-center lg:justify-around items-center">
      <div>
        <img
          src={ilustration}
          alt='ilustration'
          className='w-80 md:w-[30rem] lg:w-[45rem] mb-5'
        />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[#2196F3] font-semibold text-3xl">Activity Analityc</h1>
        <form
          className="flex flex-col"
        >
          <input
            type="text"
            name="username"
            placeholder="Ketik Username"
            className="w-[320px] md:w-[500px] lg:w-[420px] border border-[#CED4DA] rounded-md px-4 py-2 md:py-4 lg:md:py-2 mt-4 md:mt-6 lg:mt-4 outline-none focus:border-[#2196F3]"
          />
          <input
            type="password"
            name="password"
            placeholder="Ketik Password"
            className="w-[320px] md:w-[500px] lg:w-[420px] border border-[#CED4DA] rounded-md px-4 py-2 md:py-4 lg:md:py-2 mt-4 md:mt-6 lg:mt-4 outline-none focus:border-[#2196F3]"
          />
          <button
            type='submit'
            className='bg-[#2196F3] hover:bg-sky-900 active:bg-sky-300 transition-all duration-500 ease-in-out text-white w-[320px] md:w-[500px] lg:w-[420px] rounded-md px-4 py-2 md:py-4 lg:md:py-2 mt-4 md:mt-6 lg:mt-4 shadow-lg'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginView
