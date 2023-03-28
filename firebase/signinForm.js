import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
import { auth } from "./firebase.js"

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e =>{
    e.preventDefault()
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    try{
    const credentials = await signInWithEmailAndPassword(auth,email,password)
    console-console.log(credentials)
    const modal = boostrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()
    } catch(error){
        if(error.code === "auuth/wrong-password"){
            showMessage('wrong password','error')
        } else if(error.code === "auth/user-not-found"){
            showMessage('user not found', 'error')
        }else{
            showMessage(error.showMessage,'error')
        }
    }
    
    
})