import { Injectable } from '@angular/core';

interface socialRefInterface {
  title: string;
  imgSource: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class SocialService {

  socialRefs: socialRefInterface[] = [
    { title: 'github', imgSource: './assets/img/social/github.svg', url: 'https://github.com/PaFunzFr'},
    { title: 'linkedin', imgSource: './assets/img/social/linkedin.svg', url: 'https://www.linkedin.com/in/patrick-frey-690000164'},
    { title: 'email', imgSource: './assets/img/social/email.svg', url: ''},
    { title: 'phone', imgSource: './assets/img/social/phone.svg', url: '01731500779'}
  ];

}
