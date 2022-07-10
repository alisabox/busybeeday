import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as postsData from './../../../assets/posts.json';

export interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  teaser: string;
  text: string;
  comments: string[];
  category: string;
}

@Component({
  selector: 'ngblog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  private _posts: Post[] = Array.from(postsData);
  private _substiption: Subscription = new Subscription();
  public post: Post = this._posts[0];

  @Input() public postDetails?: boolean;
  @Input() public postInput: Post | undefined;

  constructor(private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this._substiption = this.route.params.subscribe(params => {
      const post = this._posts.find(post => post.id === +params['id']);
      if (post) {
        this.post = post;
      } else if (this.postInput) {
        this.post = this.postInput;
      }
    });
  }

  public ngOnDestroy() {
    this._substiption.unsubscribe();
  }

}
