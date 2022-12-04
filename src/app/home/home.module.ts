import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomePage } from './home.page';

import { NewsListComponent } from './news-list/news-list.component';
import { AddNewsFormComponent } from './add-news-form/add-news-form.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ScrollingModule,
  ],
  declarations: [HomePage, NewsListComponent, AddNewsFormComponent],
})
export class HomePageModule {}
