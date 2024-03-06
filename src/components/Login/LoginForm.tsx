'use client'

import { FormEvent } from 'react'
import { redirect } from 'next/navigation';
import { handleLogin } from '@/actions';

export function LoginForm() {

    const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.target as HTMLFormElement);
        event.preventDefault();
        await handleLogin(formData);
      }

    return (
        <div className='h-screen '>


            <div className='flex flex-col items-center mt-20'>
                <span>Login</span>
                <form onSubmit={handleLoginSubmit} className=' m-4 w-11/12 sm:w-[400px] mx-auto flex flex-col justify-center items-center gap-2  bg-gradient-to-tr
           from-blue-900 via-indigo-800 to-emerald-800 rounded shadow-sm shadow-sky-500 p-4' >
                    <label className='block mb-6'>
                        <span className='text-gray-300'>Email address</span>
                        <input
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
                            name='email'
                            type='email'
                            className='
                                block
                                w-full
                                mt-1
                                border-gray-600
                                rounded-sm
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                bg-transparent
                                placeholder-blue-400
                                text-gray-300
            '
                            placeholder='joe.bloggs@example.com'
                            required
                        />
                    </label>

                    <label className='block mb-6'>
                        <span className='text-gray-300'>Password</span>
                        <input
                            name='password'
                            type='password'
                            className='
                              block
                              w-full
                              mt-1
                              border-gray-600
                              rounded-md
                              shadow-sm
                              focus:border-indigo-300
                              focus:ring
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                              bg-transparent
                              placeholder-blue-400
                              text-gray-300
                            '
                            minLength={6}
                            placeholder='(must be 6+ chars)'
                            required
                        />
                    </label>
                    <button
                        type='submit'
                        name='submit'
                        className='
                                h-10
                                px-5
                                text-indigo-100
                                bg-indigo-700
                                rounded-lg
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-indigo-800
                              '
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
