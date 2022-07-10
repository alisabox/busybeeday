import { Component } from '@angular/core';
import { Post } from '../post/post.component';
import * as postsData from './../../../assets/posts.json';

@Component({
  selector: 'ngblog-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public posts: Post[] = Array.from(postsData).sort((a, b) => b.id - a.id);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
}
