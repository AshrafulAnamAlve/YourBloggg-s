import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  userForm: FormGroup = new FormGroup({
    Name: new FormControl(""),
    Email: new FormControl(""),
    Password: new FormControl(""),
    ConfurmPassword : new FormControl("")
  })
  http = inject(HttpClient);

 onSubmit(){
    var data = this.userForm.value;
    this.http.post("https://api-blogging-site-ashraful.runasp.net/api/Blogging/userPost",data,{responseType:"text"}).subscribe({
      next:(res: any)=>{
        alert(res)
        this.userForm.reset();
      },
      error:(err)=>{
        alert(err.error.message);
      },
    });
  }

}
