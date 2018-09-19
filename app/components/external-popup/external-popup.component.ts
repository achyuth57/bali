import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'external-popup',
  templateUrl: './external-popup.component.html',
  styleUrls: ['./external-popup.component.scss']
})
export class ExternalPopupComponent implements OnInit {

  constructor() { }

  @Input() public url: string;

  public visible = false;

  public show() {
    this.visible = true;
  }

  public close() {
    this.visible = false;
  }

  ngOnInit() {
  }

}
