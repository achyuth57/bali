import {
  Component, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit,
  OnDestroy
} from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store/root.types";
import {IWizardState} from "../wizard.types";
import {WizardActions} from "../wizard.actions";

@Component({
  selector: 'wizard',
  templateUrl: 'wizard.component.html',
  styleUrls: ['wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterContentInit,OnDestroy {
  @ContentChildren(WizardStepComponent)
  wizardSteps: QueryList<WizardStepComponent>;
  private _subscription;
  public activeStepIndex: number;
  public steps: WizardStepComponent[] = [];

  constructor(private _store: NgRedux<IAppState>, private _wizardActions:WizardActions) {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.wizardSteps.forEach((step,index) => {
      step.index = index;
      this.steps.push(step)
    });
    this._subscription = this._store.select<IWizardState>("wizard")
        .subscribe(newWizardState => {
          this.goToStep(this.steps[newWizardState.activeStepIndex]);
          this.activeStepIndex = newWizardState.activeStepIndex;``
        });

    this._store.dispatch(this._wizardActions.initWizard(this.steps.length));
  }

  public get activeStep(): WizardStepComponent {
    return this.steps[this.activeStepIndex];
  }

  public set activeStep(step: WizardStepComponent) {
    if (step !== this.activeStep) {
      if(this.activeStep) {
        this.activeStep.isActive = false;
      }
      step.isActive = true;
    }
  }

  goToStep(step: WizardStepComponent) {
      this.activeStep = step;
  }

  public next(){
    this._store.dispatch(this._wizardActions.nextStep());
  }

  public previous(){
    this._store.dispatch(this._wizardActions.previousStep());
  }
}