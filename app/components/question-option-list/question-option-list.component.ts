import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'question-option-list',
  templateUrl: './question-option-list.component.html',
  styleUrls: ['./question-option-list.component.scss']
})
export class QuestionOptionListComponent implements OnInit {

  @Input()
  public multiSelect: boolean = false;

  @Input()
  public options: any[];

  @Input()
  public columns:number = 1;

  @Input()
  public mode: string = "numberedItem";

  @Input()
  public maxSelection:number = 2;

  @Input()
  public readOnly:boolean = false;

  public Math: any;

  constructor() { }

  ngOnInit() {
    this.Math = Math;
  }

  public onQuestionOptionToggled(args){
    if(this.multiSelect) {
      let count = 0;
      this.options.forEach(c=> {
        if(c.selected)
        {
          count++;
        }});

      if(args.selected == false || count <= (this.maxSelection-1))
      {
        this.options.forEach(c =>
        {
          if (c.number == args.number)
          {
            c.selected = args.selected;
          }
        });
      }
    }
    else{
      this.options.forEach(c=> c.selected = false);
      this.options.forEach(c=>
      {
        if(c.number == args.number)
        {
          c.selected = args.selected;
        }
      });
    }
  }

}
