import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: any;
  totalValue = 0;

  numberForm: FormGroup = new FormGroup({
    numbers_input: new FormControl('', Validators.required),
  })

  setValues(e: any) {
    this.numbers = e.target.value;
  }

  result() {
    this.numbers = this.numbers.split(',');
    var addition = 0
    for (let i = 0; i < this.numbers.length; i++){
      var item = parseInt(this.numbers[i])
      addition += item;
    }
    this.totalValue = addition;
  }

}
