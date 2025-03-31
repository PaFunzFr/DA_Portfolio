import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SocialService } from '../../services/social.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

interface ContactDatInterface {
  name: string;
  email: string;
  message: string;
  checkbox: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);
  languages = inject(LanguageService);
  contact = inject(SocialService);
  messageSent: boolean = false;

  get contactTitle(): string {
    return this.languages.getTranslation('contact' , 'title');
  }

  get contactText(): string {
    return this.languages.getTranslation('contact' , 'text');
  }

  privacyRead(index: number): string {
    return this.languages.getTranslationArray('privacyPolicy' , 'read', index);
  }

  get messageSentInfo(): string {
    return this.languages.getTranslation('contact' , 'sent');
  }

  contactData: ContactDatInterface  = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  } 

  mailTest: boolean = false;

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  }
  
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.messageSent = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.messageSent = false;
            }, 4000);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.messageSent = true;
      ngForm.resetForm();
      setTimeout(() => {
        this.messageSent = false;
      }, 4000);
    }
  }

}
