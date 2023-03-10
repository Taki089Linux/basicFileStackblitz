import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MealComponent } from './meal/meal.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'meal', component: MealComponent },
  { path: '**', component: ErrorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
