import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from '../type/auth';
import { RegistrationForm } from '../type/auth';
import {  signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;

  isLoading: boolean = false;

 // isLoading: boolean = false;

  passwordMatched: boolean = true;

  constructor(private router: Router){


  }

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;
    
    const auth = getAuth();
signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
    this.isAuthenticated = true;
    this.router.navigate(['']);
   // alert('yeahhh login success');
   // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated = false;
    alert('creds does not match our record');
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }).finally(() => (this.isLoading = false));

  }

  register(form: RegistrationForm){

    if(this.isLoading) return;

    this.isLoading = true;

    if(form.password !== form.confirmpassword){
        this.passwordMatched = false;
        return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated = true;
   // console.log(userCredential);
  })
  .catch((error) => {
    this.isAuthenticated = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(() => (this.isLoading = false));

}

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {

      this.router.navigate(['login']);
      this.isAuthenticated = false;
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
 

  }

 
}
