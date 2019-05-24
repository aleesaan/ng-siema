import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public carouselOpen: boolean = false;

  public openCarousel(): void {
    this.carouselOpen = true;
  }

  public closeCarousel(): void {
    this.carouselOpen = false;
  }
}
