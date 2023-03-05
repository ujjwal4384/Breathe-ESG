import React, { useEffect, useState } from 'react'
import styles from '../../css/login.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LineWave } from 'react-loader-spinner'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { signup } from '../../controllers/auth.js'

export default function SignUpCard() {
  const [submitting, setSubmitting] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    username: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .required('Password is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })

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

  const onSubmit = async (email, username, password) => {
    try {
      setSubmitting(true)
      const response = await signup(email, username, password)
      window.location.href = '/dashboard'
    } catch (error) {
      notify(error.response.data.message)
      setSubmitting(false)
    }
  }

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
      <h1 style={{ fontWeight: 700, fontSize: '3em' }}>Signup</h1>
      <h3 style={{ fontWeight: 350 }}>Welcome! Create an account.</h3>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values.email, values.username, values.password)
        }}
      >
        <Form>
          <div>
            <div className={styles.inputField}>
              <Field
                name="email"
                type="email"
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
                type="text"
                name="username"
                placeholder="Username"
                className={styles.inputBox}
              />
              <div className={styles.inputLine}></div>
            </div>
            <ErrorMessage
              name="username"
              component="div"
              style={{ marginTop: '0.7em', color: 'red' }}
            />
            <div className={styles.inputField}>
              <Field
                name="password"
                type="password"
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
                Signup
              </button>
            </div>
          )}
        </Form>
      </Formik>

      <div style={{ marginLeft: '25%', marginTop: '1em', fontSize: '0.8em' }}>
        Already have an account?
        <a href="/login" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#66A68F', fontWeight: 750 }}>Login</span>
        </a>
      </div>
    </div>
  )
}
