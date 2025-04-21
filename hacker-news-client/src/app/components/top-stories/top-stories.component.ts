import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';
@Component({
  selector: 'app-top-stories',
  imports: [],
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.css'
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
