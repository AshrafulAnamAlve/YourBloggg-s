import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', 
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  blogg: any[] =[];

  ngOnInit(): void {
    this.getBlogg();
  }

  http= inject(HttpClient)
  
  getBlogg(){
    this.http.get("https://api-blogging-site-ashraful.runasp.net/api/Blogging/getBlogg").subscribe({
      next:(res: any)=>{
        this.blogg=res;
      },
      error:(err)=>{
        alert(err.error);
      }
    })
  }

}
