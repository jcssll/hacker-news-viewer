import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { TopStoriesComponent } from './components/top-stories/top-stories.component';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [ RouterOutlet],
 //imports: [ HeaderComponent, FooterComponent, TopStoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: `//I should be defining this in the app.component.html
  //   <app-header></app-header>
  //   <app-top-stories></app-top-stories>
  //   <app-footer></app-footer>
  // `, 
   //imports: [HeaderComponent, FooterComponent, TopStoriesComponent],
})
export class AppComponent {
  //title = 'hacker-news-client';
}
