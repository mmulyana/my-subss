import { createClient } from '@supabase/supabase-js'

const URL_PROJECT = import.meta.env.VITE_PROJECT_URL
const API_PROJECT = import.meta.env.VITE_PROJECT_API

const supabase = createClient(URL_PROJECT, API_PROJECT)

async function signupWithPassword(values) {
  const { email, password, username } = values
  const { data, error } = await supabase.auth.signUp({ email, password },{ data: { username } })
  
  return {
    data,
    error,
  }
}

async function loginWithPassword(values) {
  const { email, password } = values
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return {
    data,
    error,
  }
}

export { supabase, signupWithPassword, loginWithPassword }
