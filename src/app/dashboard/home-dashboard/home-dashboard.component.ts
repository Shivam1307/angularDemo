import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  zoom(index) {
    const elem = 'view';
    const imageId = document.getElementById(elem);
    if (imageId.style.width === '1000px') {
        imageId.style.width = '600px';
        imageId.style.height = '600px';
    } else {
        imageId.style.width = '1000px';
    }
  }
}
