import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit() {
   
    console.log('Message:', { name: this.name, email: this.email, subject: this.subject, message: this.message });

    this.submitted = true;

    setTimeout(() => {
      this.name = ''; this.email = ''; this.subject = ''; this.message = '';
      this.submitted = false;
    }, 5000);
  }
}
