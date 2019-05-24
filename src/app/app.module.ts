import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgSiemaModule } from 'ng-siema';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgSiemaModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
