import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SocialService } from '../../services/social.service';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactDatInterface {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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

  contactData: ContactDatInterface  = {
    name: '',
    email: '',
    message: ''
  } 

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid) {
      console.log(this.contactData);
    }
  }
}
