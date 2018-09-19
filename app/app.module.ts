import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';
import { StoreModule } from './store/store.module';
import { QuestionOptionComponent } from './components/question-option/question-option.component';
import { QuizModule } from './quiz/quiz.module';
import { SimpleStepComponent } from './components/steps/simple-step/simple-step.component';
import { QuestionStepComponent } from './components/steps/question-step/question-step.component';
import { QuestionOptionListComponent } from './components/question-option-list/question-option-list.component';
import { QuestionTimerComponent } from './components/question-timer/question-timer.component';
import { LeaderboardService} from './services/leaderboard.service';
import { LeaderboardStepComponent } from './components/steps/leaderboard-step/leaderboard-step.component';
import {InlineSVGModule} from "ng-inline-svg";
import { ExternalPopupComponent } from './components/external-popup/external-popup.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  return highcharts;
}

@NgModule({
  declarations: [AppComponent, QuestionOptionComponent, SimpleStepComponent, QuestionStepComponent, QuestionOptionListComponent, QuestionTimerComponent, LeaderboardStepComponent, ExternalPopupComponent, ExternalLinkComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    WizardModule,
    QuizModule,
    StoreModule,
    InlineSVGModule,
    ChartModule
  ],
  providers: [LeaderboardService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}
