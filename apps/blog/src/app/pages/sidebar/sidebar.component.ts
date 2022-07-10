import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Post {
  title: string,
  image: string,
  date: string,
}

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
  public posts: Post[] = [
    {
      title: "The Lighthouse Effect",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      date: "November 02, 2013",
    },
    {
      title: "The Lighthouse Effect",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      date: "November 02, 2013",
    },
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public onSubmit(): void {
    // Process checkout data here
  }
}
