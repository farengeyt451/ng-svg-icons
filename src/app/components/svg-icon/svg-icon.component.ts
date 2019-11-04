import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.sass']
})
export class SvgIconComponent implements OnInit {
  @Input() sprite?: string = 'svg-main-sprite';
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
