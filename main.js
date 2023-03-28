import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"

import { auth } from './firebase/firebase.js'
import {loginCheck} from './firebase/loginCheck.js'

import './firebase/signinForm.js'
import './firebase/logout.js'
import './firebase/googleLogin.js'


onAuthStateChanged(auth, async (user) =>{
    loginCheck(user)
    //if(user){
    //    loginCheck(user)
    //}else {
    //    loginCheck(user)
    //}

})
 