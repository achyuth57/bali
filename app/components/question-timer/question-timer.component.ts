import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'question-timer',
  templateUrl: './question-timer.component.html',
  styleUrls: ['./question-timer.component.scss']
})
export class QuestionTimerComponent implements OnInit {

  @Output()
  public onStop = new EventEmitter<number>();

  @Output()
  public onStart = new EventEmitter<void>();

  @Input()
  public startTime: 0;
  public timer;
  public finished = false;

  public get isCounting()
  {
    return this._isCounting;
  }

  private _count;
  private _counter;
  private _isCounting;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  public start(){
    if(!this._isCounting && !this.finished) {
      this._isCounting = true;
      this._counter = setInterval(() => {
        this.countdown()
      }, 10); //10 will  run it every 100th of a second
      this.onStart.emit();
    }
  }

  public reset()
  {
    if(this._isCounting)
    {
      this.stop();
    }
    this.finished = false;
    this._count = this.startTime/10;
    this.setTimer();
  }

  public stop(){
    clearInterval(this._counter);
    this._isCounting = false;
    this.finished = true;
    this.onStop.emit(Math.floor(this._count/100));
  }

  private countdown(){
    if (this._count <= 0)
    {
      this.stop();
      return;
    }
    this._count--;

    this.setTimer();
  }

  private pad(value, width, padchar) {
    while (value.length < width) {
      value = padchar + value;
    }
    return value;
  }

  private setTimer(){
    let remaining = (this._count/100).toFixed(2);

    let x = remaining.split('.');

    let sec = this.pad(x[0],2,0);
    let milli = this.pad(x[1],2,0);

    this.timer = `${sec}:${milli}`;
  }
}
