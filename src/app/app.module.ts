import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { appRoutes } from './app.routes';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    ErrorComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
