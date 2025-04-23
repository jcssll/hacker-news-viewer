import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent implements OnInit{

  storyType: 'top' | 'new'  | 'best' = 'top'; 
  searchTerm: string = ''; 
  page: number = 1; 
  stories: any[]= [];

  constructor(private hnService: HackerNewsService){}

  ngOnInit(): void {
    this.loadStories(); 
  }

  loadStories(): void {
    this.hnService.getStories(this.storyType, this.page, 10, this.searchTerm). subscribe(data=> this.stories = data); 
  }

}
