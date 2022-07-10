import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Post } from '../post/post.component';
import * as postsData from './../../../assets/posts.json';

@Component({
  selector: 'ngblog-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  public categories: string[] = ['Общее', 'Курсы', 'Кредиты'];
  public posts: Post[] = Array.from(postsData).sort((a, b) => b.id - a.id);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public onSubmit(): void {
    // Process checkout data here
  }
}
