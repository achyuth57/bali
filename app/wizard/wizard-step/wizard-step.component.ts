import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {WizardActions} from "../wizard.actions";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store/root.types";

@Component({
  selector: 'wizard-step',
  templateUrl: 'wizard-step.component.html',
})
export class WizardStepComponent implements OnInit {
  public index: number = 0;
  public isActive: boolean = false;

  constructor(protected _store: NgRedux<IAppState>, protected _wizardActions:WizardActions) { }

  ngOnInit() {
  }

  public next(){
    this._store.dispatch(this._wizardActions.nextStep());
    this.scrollToTop();
  }

  public previous(){
    this._store.dispatch(this._wizardActions.previousStep());
    this.scrollToTop();
  }

  public scrollToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}