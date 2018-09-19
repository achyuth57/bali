import {Component, OnInit, forwardRef, Input} from '@angular/core';
import {WizardStepComponent} from "../../../wizard/wizard-step/wizard-step.component";
import {WizardActions} from "../../../wizard/wizard.actions";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../../store/root.types";

@Component({
  selector: 'simple-step',
  templateUrl: './simple-step.component.html',
  styleUrls: ['./simple-step.component.scss'],
  providers: [{provide: WizardStepComponent, useExisting: forwardRef(() => SimpleStepComponent) }]

})
export class SimpleStepComponent extends WizardStepComponent implements OnInit {

  constructor(store: NgRedux<IAppState>, wizardActions:WizardActions) {
    super(store,wizardActions);
  }

  ngOnInit() {
  }

}