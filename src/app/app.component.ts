import { Component , Input} from '@angular/core';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  details: string;
  @Input() loading;
  constructor() {
    console.log('in constructor');
   }
  ngOnInit() {
  }


}

