import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/type/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
  };



  //email: string ='';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(){

   

    this.authService.login(this.form);


    //console.log(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

}
