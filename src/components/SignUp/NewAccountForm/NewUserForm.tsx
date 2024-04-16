'use client';
import { handleCreateUser } from '@/actions';
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// falta la parte de la confirmacion de la contraseña
export const NewUserForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target as HTMLFormElement);
        formData.delete('passwordConfirmation');

        await handleCreateUser(formData);

        setLoading(false);
    };

    return (
        <div className='flex flex-col gap-4 items-center justify-center h-screen '>
            <h1 className=''>New Account</h1>
            <div className='min-w-80  md:max-w-full mx-auto rounded-lg '>
                <div
                    className='p-6 border border-gray-600 sm:rounded-md bg-gradient-to-tr
         from-blue-900 via-indigo-800 to-emerald-800 rounded shadow-sm shadow-sky-500
            '
                >
                    <form
                        onSubmit={handleSubmit}
                        className='w-11/12 sm:w-[400px]'
                    >
                        <label className='block mb-6'>
                            <span className='text-gray-300'>First name</span>
                            <input
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
                            placeholder-gray-800
                            text-gray-300
            '
                                type='text'
                                name='firstName'
                                placeholder='Name'
                                disabled={loading}
                                required
                            />
                        </label>
                        <label className='block mb-6'>
                            <span className='text-gray-300'>Last name</span>
                            <input
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
                            placeholder-gray-800
                            text-gray-300'
                                type='text'
                                name='lastName'
                                placeholder='LastName'
                                disabled={loading}
                                required
                            />
                        </label>
                        <label className='block mb-6'>
                            <span className='text-gray-300'>Email address</span>
                            <input
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
                                disabled={loading}
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
                              placeholder-gray-800
                              text-gray-300
          '
                                placeholder='joe.bloggs@example.com'
                                required
                            />
                        </label>
                        <label className='block mb-6'>
                            <span className='text-gray-300'>
                                Cellphone number
                            </span>
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                }}
                                containerStyle={{
                                    color: 'black',
                                }}
                                autoFormat={false}
                            />
                        </label>

                        <label className='block mb-6'>
                            <span className='text-gray-300'>Password</span>
                            <input
                                disabled={loading}
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
                            placeholder-gray-600
                            text-gray-300
                          '
                                minLength={6}
                                placeholder='(must be 6+ chars)'
                                required
                            />
                        </label>
                        <div className='mb-6'>
                            <div className='mt-2'>
                                <label className='block mb-6'>
                                    <span className='text-gray-300'>
                                        Re-enter Password
                                    </span>
                                    <input
                                        name='passwordConfirmation'
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
                                  placeholder-gray-600
                                  text-gray-300
          '
                                        minLength={6}
                                        placeholder='(must be 6+ chars)'
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div
                            className='mx-auto
            flex flex-col justify-center items-center w-6/12'
                        >
                            <span> Create account</span>
                            <button
                                type='submit'
                                disabled={loading}
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
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {errors.length > 0 && (
                <div>
                    {errors.map((error, index) => {
                        return (
                            <p key={error} className=''>
                                {error}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
