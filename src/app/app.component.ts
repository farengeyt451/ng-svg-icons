import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-svg-icons';

  ngOnInit() {}

  ngAfterViewInit() {}
}
