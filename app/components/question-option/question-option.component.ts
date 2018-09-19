import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionOptionComponent implements OnInit {

  constructor() { }

  @Output()
  public onToggle: EventEmitter<any> = new EventEmitter<any>();


  @Input()
  public number: number;

  @Input()
  public icon: number;

  @Input()
  public title: string;

  @Input()
  public selected: boolean;

  @Input()
  public readOnly: boolean;

  @Input()
  public mode: string;

  public onClick(args)
  {
    if(!this.readOnly) {
      this.onToggle.emit({number: this.number, selected: !this.selected});
    }
  }

  ngOnInit() {
  }

}
