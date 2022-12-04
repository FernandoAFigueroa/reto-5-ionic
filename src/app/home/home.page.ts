import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsCount = 0;
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService
      .getNews()
      .subscribe((res) => (this.newsCount = res.length));
  }
}
