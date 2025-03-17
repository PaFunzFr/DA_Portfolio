import { Injectable } from '@angular/core';

interface socialImgInterface {
  title: string;
  source: string;
}

@Injectable({
  providedIn: 'root'
})

export class SocialService {

  images: socialImgInterface[] = [
    { title: 'github', source: './assets/img/social/github.svg'},
    { title: 'linkedin', source: './assets/img/social/linkedin.svg'},
    { title: 'email', source: './assets/img/social/email.svg'}
  ];

}
