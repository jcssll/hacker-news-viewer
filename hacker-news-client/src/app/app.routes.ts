import { Routes } from '@angular/router';
// import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/story-list/story-list.component').then(m => m.StoryListComponent) 
     }, 
    {path: '**', redirectTo: ''}
];
