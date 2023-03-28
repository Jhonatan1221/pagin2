import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
import { auth } from "./firebase.js"


const googleButton = document.querySelector('#googleLogin')
googleButton.addEventListener('click', async () =>{

    const provider = new GoogleAuthProvider()

    try{
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)
    const modal = booststrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()

    showMessage('welcome' + credentials.user.displayName, 'success')

    }catch(error){
        console.log(error)
    }

  

})