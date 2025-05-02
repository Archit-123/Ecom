import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAf-rrCgzkYYQBbzQzGPumKk8zug3rPbSY',
  authDomain: 'myapp-b9b74.firebaseapp.com',
  projectId: 'myapp-b9b74',
  appId: '1:595026057378:web:b995799e25e7e3ed7a9ffb',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
