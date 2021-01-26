import React, { useState } from 'react'
import { useMachine } from '@xstate/react'
import { loginMachine } from '../services/loginMachine'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [form, updateForm] = useState({
    email: '',
    password: '',
  })
  const [machine, send] = useMachine(loginMachine)
  const router = useRouter()

  if (machine.matches('success')) {
    router.push('/pokedex')
  }

  console.log(form, machine.value)

  return (
    <div className='min-h-screen p-2 flex items-center flex-col justify-center font-sans'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          send('SUBMIT', { data: { ...form } })
        }}
        className='px-16 pt-28 pb-24 max-w-xl lg:w-1/3 rounded-lg bg-dark-grey flex flex-col'>
        <input
          type='email'
          placeholder='Email address'
          className='login-input'
          maxLength={255}
          value={form.email}
          onChange={(e) => updateForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='login-input'
          maxLength={128}
          value={form.password}
          onChange={(e) => updateForm({ ...form, password: e.target.value })}
          required
        />
        {machine.matches('error') && (
          <div className='text-red-600'>
            {(machine.context as any).message ??
              'Please provide email & password'}
          </div>
        )}
        <button
          type='submit'
          className='bg-my-yellow rounded-md mt-4 h-14 outline-none text-white font-bold uppercase'>
          Login
        </button>
      </form>
    </div>
  )
}
