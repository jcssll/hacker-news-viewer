import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { TopStoriesComponent } from './components/top-stories/top-stories.component';

@Component({
  standalone:true,
  selector: 'app-root',
 // imports: [ RouterOutlet],
 imports: [ HeaderComponent, FooterComponent, RouterOutlet],
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
  title = 'hacker-news-client';
}
