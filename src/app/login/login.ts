import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(""),
    Password: new FormControl("")
  });
  http = inject(HttpClient)
  router = inject(Router);

  onLogin(){
    var data = this.loginForm.value;
    this.http.post("https://api-blogging-site-ashraful.runasp.net/api/Blogging/userLogin",data,{responseType: 'text'}).subscribe({
      next:(res : any)=>{
        console.log(res)
        if(res=="Login Successfull"){
          alert(res);
          localStorage.setItem("isLoggedIn", 'true');
          this.router.navigateByUrl("/post-blogg");
        }
      }
    })
  }

 
}
