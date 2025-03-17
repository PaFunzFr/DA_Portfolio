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
    { title: 'github', imgSource: './assets/img/social/github.svg', url: ''},
    { title: 'linkedin', imgSource: './assets/img/social/linkedin.svg', url: ''},
    { title: 'email', imgSource: './assets/img/social/email.svg', url: ''}
  ];

}
