import { createClient } from '@supabase/supabase-js'

const URL_PROJECT = import.meta.env.VITE_PROJECT_URL
const API_PROJECT = import.meta.env.VITE_PROJECT_API

const supabase = createClient(URL_PROJECT, API_PROJECT)

async function signupWithPassword(values) {
  let message
  const { email, password, username } = values
  const { data, error } = await supabase.auth.signUp(
    { email, password },
    { data: { username } }
  )

  if (error) {
    message = error.message
  } else {
    message = 'Signup successfully'
  }

  return {
    data,
    message,
  }
}

async function loginWithPassword(values) {
  const { email, password } = values
  let message
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    message = error.message
  } else {
    message = 'Login successfully'
  }

  return {
    data,
    message,
  }
}

export { supabase, signupWithPassword, loginWithPassword }
