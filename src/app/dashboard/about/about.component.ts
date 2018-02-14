import { Component, OnInit } from '@angular/core';

class ContactInfo {
  constructor(
      public description: string) { }
  }
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  result: String = '';
  hideLable: Boolean = false;
  information = [
    new ContactInfo('HTML5 = Regards DOM'),
    new ContactInfo('CSS3 = Regards DOM styling')
];
myInfo = this.information[0];
  constructor() { }

  ngOnInit() {
  }
addInfo(newInfo: string) {
  if (newInfo) {
      this.information.push(new ContactInfo(newInfo));
  }
}
  addDetails() {

  }
  submitFunc(value): void  {
    this.result = value;
    console.log('hello');
    console.log(value);
  }

}
