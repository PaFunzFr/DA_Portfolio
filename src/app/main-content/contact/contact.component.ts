import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SocialService } from '../../services/social.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

interface ContactDatInterface {
  name: string;
  email: string;
  message: string;
  checkbox: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  languages = inject(LanguageService);
  contact = inject(SocialService);

  get contactTitle(): string {
    return this.languages.getTranslation('contact' , 'title');
  }

  get contactText(): string {
    return this.languages.getTranslation('contact' , 'text');
  }

  get privacyRead(): string {
    return this.languages.getTranslation('privacyPolicy' , 'read');
  }

  contactData: ContactDatInterface  = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  } 

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid) {
      console.log(this.contactData);
    }
  }
  
}
