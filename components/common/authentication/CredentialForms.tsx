import { useState } from 'react'
import { signIn, getCsrfToken } from 'next-auth/react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { useRouter } from 'next/router'

type CredentialForms = {
  formType: string
  fields: string[]
  csrfToken: string | undefined
}

const CredentialForms = ({ formType, fields, csrfToken }: CredentialForms) => {
  const [error, setError] = useState<string | null>('')
  const router = useRouter()
  const callbackUrl = (router.query?.callbackUrl as string) ?? 'http://localhost:3000'

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
            callbackUrl: callbackUrl,
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
              <div className='p-2 text-center text-red-400 rounded text-md'>{error}</div>

              {fields.map((field, index) => {
                let lowerCaseField = field.split(' ').join('').toLowerCase()

                return (
                  <div className='w-full mb-6' key={index}>
                    <label htmlFor={lowerCaseField} className='text-sm font-bold text-white uppercase'>
                      {field}
                      <Field
                        name={lowerCaseField}
                        aria-label={`enter your ${lowerCaseField}`}
                        aria-required='true'
                        type='text'
                        className='w-full p-3 mt-2 text-gray-900'
                      />
                    </label>
                    <div className='text-sm text-red-600'>
                      <ErrorMessage name={lowerCaseField} />
                    </div>
                  </div>
                )
              })}
              <div className='flex flex-col items-center justify-center w-full'>
                <button
                  className='w-full p-3 text-lg font-bold text-white rounded-md bg-button hover:bg-button-hover'
                  type='button'
                  onClick={formik.submitForm}
                >
                  {formik.isSubmitting ? 'Please wait...' : `${formType}`}
                </button>
                <div className='p-3'>
                  <span className='text-white'>
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
