import { Component, OnInit } from '@angular/core'; //structure for a component and On Init functionality
import { CommonModule } from '@angular/common'; // needed for the NgFor directive
import { provideHttpClient, HttpClientModule } from '@angular/common/http'; //HttpClientModule has been deprecated
import { HackerNewsService } from '../../services/hacker-news.service'; //Also importing Hacker News Service

@Component({
  standalone: true,
  selector: 'app-top-stories',
  imports: [CommonModule],
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.css', 
  providers: [HackerNewsService]// Custom HN Service
})
export class TopStoriesComponent implements OnInit {

  stories: any[] = [];

  constructor(private hnService: HackerNewsService){}

  ngOnInit(): void {
    this.hnService.getTopStories().subscribe((data) => {
      this.stories = data
    });
  }
}
