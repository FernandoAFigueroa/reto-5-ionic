import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss'],
})
export class AddNewsFormComponent implements OnInit {
  newsHandlerForm!: FormGroup;
  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private toastCtl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.newsHandlerForm = this.formBuilder.group({
      title: [''],
      date: [''],
      description: [''],
    });
  }
  async formSubmit() {
    if (this.newsHandlerForm.valid) {
      await this.firebaseService.addNews(this.newsHandlerForm.value);
      const toast = await this.toastCtl.create({
        message: ' Tu noticia se agregado!',
        duration: 750,
      });
      toast.present();
      await this.router.navigate(['/', 'home', 'news']);
    }
  }
}
