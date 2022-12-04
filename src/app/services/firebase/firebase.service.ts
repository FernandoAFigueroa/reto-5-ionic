import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { INewsCard } from 'src/app/models/news-card.interface';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fireStore: Firestore) {}

  // Get All news
  getNews(): Observable<INewsCard[]> {
    const newsRef = collection(this.fireStore, 'news');
    return collectionData(newsRef, { idField: 'id' }) as Observable<
      INewsCard[]
    >;
  }

  //add news note
  addNews(newsNote: INewsCard) {
    const newsRef = collection(this.fireStore, 'news');
    return addDoc(newsRef, newsNote);
  }

  //delete news note
  deleteNews(newsNote: INewsCard) {
    const newsNoteRef = doc(this.fireStore, `news/${newsNote.id}`);
    return deleteDoc(newsNoteRef);
  }
}
