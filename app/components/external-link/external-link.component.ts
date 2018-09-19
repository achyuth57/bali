import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {

  @Input() public url: string;
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

}
