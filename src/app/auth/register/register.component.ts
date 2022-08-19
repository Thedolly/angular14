import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from 'src/app/type/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  form: RegistrationForm = {
    email: '',
    password: '',
    confirmpassword:'',
  };

 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){

    
    //console.log(this.form);
  }
 isLoading(){
   return this.authService.isLoading;
 }

}
