import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngblog-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public onSubmit(): void {
    // Process checkout data here
  }
}
