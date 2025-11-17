import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-blogg',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-blogg.html',
  styleUrl: './post-blogg.css',
})
export class PostBlogg {

  http = inject(HttpClient)
  bloggForm: FormGroup = new FormGroup({
    name : new FormControl(""),
    title: new FormControl(""),
    description: new FormControl("")
  })


  onSubmit(){
    debugger
    const data = this.bloggForm.value

    this.http.post("https://api-blogging-site-ashraful.runasp.net/api/Blogging/postBlogg",data,{responseType:"text"}).subscribe({
      next: (res: any)=>{
        debugger
        alert(res);
      },
      error:(err)=>{
        debugger
        alert("error:"+err.error);
      }
    })
  }
}
