import { Machine, assign } from 'xstate'

const validatePassword = (data, context) => {
  const { email, password } = context.data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@admin' && password === 'admin') resolve('OK')
      else reject('Wrong email or password')
    }, 1000)
  })
}

export const loginMachine: any = Machine({
  id: 'login',
  initial: 'idle',
  context: {
    message: '',
  },
  states: {
    idle: {
      on: {
        SUBMIT: [
          {
            target: 'validate',
            cond: (ctx, event) =>
              event.data.email !== '' && event.data.password !== '',
          },
          {
            target: 'error',
            actions: assign({
              message: () => 'Please provide email and password',
            }),
          },
        ],
      },
    },
    validate: {
      invoke: {
        id: 'validatePassword',
        src: (data, context) => validatePassword(data, context),
        onDone: {
          target: 'success',
          actions: assign({ message: (ctx, event) => event.data }),
        },
        onError: {
          target: 'error',
          actions: assign({ message: (ctx, event) => event.data }),
        },
      },
    },
    error: {
      on: {
        SUBMIT: {
          target: 'validate',
          cond: (ctx, event) =>
            event.data.email !== '' && event.data.password !== '',
        },
      },
    },
    success: {
      type: 'final',
    },
  },
})
