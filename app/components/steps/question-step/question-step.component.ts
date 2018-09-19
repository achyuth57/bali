import {Component, OnInit, forwardRef, Input} from '@angular/core';
import {WizardActions} from "../../../wizard/wizard.actions";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../../store/root.types";
import {QuizActions} from "../../../quiz/quiz.actions";
import {WizardStepComponent} from "../../../wizard/wizard-step/wizard-step.component";

@Component({
  selector: 'question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.scss'],
  providers: [{provide: WizardStepComponent, useExisting: forwardRef(() => QuestionStepComponent) }]
})
export class QuestionStepComponent extends WizardStepComponent implements OnInit {

  constructor(_store: NgRedux<IAppState>, _wizardActions:WizardActions, private _quizActions:QuizActions) {
    super(_store,_wizardActions);
  }

  @Input()
  public options: any[] = [];

  @Input()
  public maxAttempts = 1;

  @Input()
  public showQuestions = true;

  @Input()
  public allCorrectRequired = false;

  public correctlyAnswered = false;

  private _attempts: number = 0;
  public showTryAgain: boolean = false;
  public questionCompleted: boolean = false;
  public totalCorrectAnswers = 0;
  public answeredCorrectly = 0;

  ngOnInit() {
  }

  private _questionCompleted() {
    this.options.forEach(c=> c.selected = c.correct);
    this.questionCompleted = true;
  }

  public onSubmit(bonusPoints){

    let score = 0;
    let rightAnswers = 0;
    this.options.forEach(c=> {
      if(c.correct && c.selected == c.correct)
      {
        score++;
      }

      if(c.correct){
        rightAnswers++;
      }
    });

    this.correctlyAnswered = this.options.every(c=> c.correct == c.selected);
    this.answeredCorrectly = score;
    this.totalCorrectAnswers = rightAnswers;

    if(this.correctlyAnswered)
    {
      this._store.dispatch(this._quizActions.adjustScore(score + bonusPoints));
      this._questionCompleted();
    }
    else{
      this._attempts++;
      this.showTryAgain = true;

      if(this._attempts >= this.maxAttempts){
        if(!this.allCorrectRequired) {
          this._store.dispatch(this._quizActions.adjustScore(score));
        }
        this._questionCompleted();
      }
      //update failure
    }

    this.scrollToTop();
  }
}
