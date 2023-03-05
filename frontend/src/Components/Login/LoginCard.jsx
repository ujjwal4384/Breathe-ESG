import React, { useEffect, useState } from 'react'
import styles from '../../css/login.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LineWave } from 'react-loader-spinner'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { login } from '../../controllers/auth.js'

export default function LoginCard() {
  const [submitting, setSubmitting] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })

  const onSubmit = async (email, password) => {
    try {
      setSubmitting(true)
      const response = await login(email, password)
      window.location.href = '/dashboard'
    } catch (error) {
      notify(error.response.data.message)
      setSubmitting(false)
    }
  }

  const notify = (errorMessage) =>
    toast.error(errorMessage, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

  return (
    <div className={styles.loginContainer}>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <h1 style={{ fontWeight: 700, fontSize: '3em' }}>Login</h1>
      <h3 style={{ fontWeight: 350 }}>Welcome back! Log in to your account.</h3>
      <div className={styles.thirdPartyContainer}>
        <button className={styles.loginFormContainer} fullWidth>
          <img
            src="/images/googleLogo.png"
            alt="Google login"
            className={styles.googleIcon}
          />
          <div> Sign up with google </div>
        </button>
        <button className={styles.loginFormContainer} fullWidth>
          <img
            src="/images/linkedInLogo.png"
            alt="linkedin login"
            className={styles.googleIcon}
          />
          <div> Sign up with Linkedin </div>
        </button>
      </div>
      <br />
      <div>
        <h2 style={{ marginLeft: '33%' }}>-OR-</h2>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values.email, values.password)
        }}
      >
        <Form>
          <div>
            <div className={styles.inputField}>
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.inputBox}
              />
              <div className={styles.inputLine}></div>
            </div>
            <ErrorMessage
              name="email"
              component="div"
              style={{ marginTop: '0.7em', color: 'red' }}
            />
            <div className={styles.inputField}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={styles.inputBox}
              />
              <div className={styles.inputLine}></div>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              style={{ marginTop: '0.7em', color: 'red' }}
            />
          </div>
          <div
            style={{
              marginTop: '2em',
              fontWeight: '750',
              color: '#66A68F',
              fontSize: '0.9rem',
            }}
          >
            Forgot Password?
          </div>
          {submitting ? (
            <LineWave
              height="100"
              width="600"
              color="#4fa94d"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          ) : (
            <div style={{ marginTop: '2em' }}>
              <button className={styles.loginButton} type="submit">
                Login
              </button>
            </div>
          )}
        </Form>
      </Formik>

      <div style={{ marginLeft: '25%', marginTop: '1em', fontSize: '0.8em' }}>
        Don’t have an account?
        <a href="/signup" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#66A68F', fontWeight: 750 }}>
            Create Account
          </span>
        </a>
      </div>
    </div>
  )
}
