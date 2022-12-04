import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsFormComponent } from './add-news-form/add-news-form.component';
import { HomePage } from './home.page';
import { NewsListComponent } from './news-list/news-list.component';

const routesChildren: Routes = [
  { path: 'news', component: NewsListComponent },
  { path: 'add', component: AddNewsFormComponent },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: routesChildren,
  },
  { path: '**', redirectTo: 'home/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
