import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { INewsCard } from 'src/app/models/news-card.interface';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  items: any = [];

  constructor(private firebaseService: FirebaseService) {}
  ngOnInit() {
    this.generateItems();
  }

  private async generateItems() {
    const count = this.items.length + 1;
    this.firebaseService.getNews().subscribe((res) => (this.items = res));
  }

  deleteNewsNote(newsNote: INewsCard) {
    return this.firebaseService.deleteNews(newsNote);
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
