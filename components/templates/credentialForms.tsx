import { useState } from 'react'
import { signIn, getCsrfToken } from 'next-auth/react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

type CredentialForms = {
  formType: string
  fields: string[]
  csrfToken: string | undefined
}

const CredentialForms = ({ formType, fields, csrfToken }: CredentialForms) => {
  const [error, setError] = useState<string | null>('')

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: formType === 'Sign Up' ? Yup.string().required('Please enter your name') : Yup.string(),
          email: Yup.string().max(30, 'Must be 30 characters or less').email('Invalid email address').required('Please enter your email'),
          password: Yup.string().required('Please enter your password'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn('credentials', {
            name: values?.name,
            email: values.email,
            password: values.password,
            callbackUrl: 'http://localhost:3000',
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
          <form>
            <div className='flex flex-col items-center justify-center py-2'>
              <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
              <div className='text-red-400 text-md text-center rounded p-2'>{error}</div>

              {fields.map((field, index) => {
                let lowerCaseField = field.split(' ').join('').toLowerCase()

                return (
                  <div className='w-full mb-6' key={index}>
                    <label htmlFor={lowerCaseField} className='uppercase text-sm font-bold'>
                      {field}
                      <Field
                        name={lowerCaseField}
                        aria-label={`enter your ${lowerCaseField}`}
                        aria-required='true'
                        type='text'
                        className='w-full text-gray-900 mt-2 p-3'
                      />
                    </label>
                    <div className='text-red-600 text-sm'>
                      <ErrorMessage name={lowerCaseField} />
                    </div>
                  </div>
                )
              })}
              <div className='w-full flex flex-col items-center justify-center'>
                <button
                  className='bg-button hover:bg-button-hover p-3 rounded-md w-full font-bold text-lg'
                  type='button'
                  onClick={formik.submitForm}
                >
                  {formik.isSubmitting ? 'Please wait...' : `${formType}`}
                </button>
                <div className='p-3'>
                  <span>
                    {formType === 'Sign In' ? 'New to NextNewegg? ' : 'Have an account? '}
                    <Link className='text-lg text-blue-500 hover:underline' href={formType === 'Sign In' ? '/auth/signup' : '/auth/signin'}>
                      {formType === 'Sign In' ? 'Sign Up' : 'Sign In'}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default CredentialForms
