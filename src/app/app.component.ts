import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCalculator';
  pageTitle = "Basic Calculator";
  displayValue: string = '';
  num0 = "0";
  num1 = "1";
  num2 = "2";
  num3 = "3";
  num4 = "4";
  num5 = "5";
  num6 = "6";
  num7 = "7";
  num8 = "8";
  num9 = "9";
  signPlus = "+";
  signMinus = "-";
  signMultiply = "x";
  signClear = "C";
  signEqual = "=";
  signDivide = "&#247;";


  calculate(c: string) {
    if (c === "x") {
      this.displayValue += '*';
    } else if (c === "&#247;") {
      this.displayValue += '/';
    } else if (c === "C") {
      this.displayValue = '';
    } else if (c === "=") {
      this.displayValue = eval(this.displayValue);
    } else
    this.displayValue += c;
  }
}
