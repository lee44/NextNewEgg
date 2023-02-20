import { useState } from 'react'
import { signIn, getCsrfToken } from 'next-auth/react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const CredentialForm = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const [error, setError] = useState<string | null>('')

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', tenantKey: '' }}
        validationSchema={Yup.object({
          email: Yup.string().max(30, 'Must be 30 characters or less').email('Invalid email address').required('Please enter your email'),
          password: Yup.string().required('Please enter your password'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: 'http://localhost:3000/profile',
          })
          if (res?.error) {
            setError(res?.error)
          } else {
            setError(null)
          }
          setSubmitting(false)
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col items-center justify-center py-2'>
              <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
              <div className='text-red-400 text-md text-center rounded p-2'>{error}</div>
              <div className='w-full mb-4'>
                <label htmlFor='email' className='uppercase text-sm font-bold'>
                  Email
                  <Field
                    name='email'
                    aria-label='enter your email'
                    aria-required='true'
                    type='text'
                    className='w-full text-gray-900 mt-2 p-3'
                  />
                </label>
                <div className='text-red-600 text-sm'>
                  <ErrorMessage name='email' />
                </div>
              </div>
              <div className='mb-6'>
                <label htmlFor='password' className='uppercase text-sm font-bold'>
                  password
                  <Field
                    name='password'
                    aria-label='enter your password'
                    aria-required='true'
                    type='password'
                    className='w-full text-gray-900 mt-2 p-3'
                  />
                </label>
                <div className='text-red-600 text-sm'>
                  <ErrorMessage name='password' />
                </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <button type='submit' className='bg-button hover:bg-button-hover p-3 rounded-md w-full font-bold text-lg'>
                  {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default CredentialForm
