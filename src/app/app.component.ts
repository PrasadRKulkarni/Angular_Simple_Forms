import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-forms';

  userName: string = '';
  isChecked: boolean = false;

  onSave(formValue: NgForm) {
    console.log(formValue.value)
  }

  reset(formValue: NgForm) {
    formValue.reset();
  }

}
