import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-story-card',
  imports: [CommonModule],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.css'
})
export class StoryCardComponent {
  @Input() story: any; 

  randomClass = ''; 

  ngOnInit() {
    const styles = ['style1', 'style2', 'style3' ];
    this.randomClass = styles[Math.floor(Math.random() * styles.length)]
  }
}
