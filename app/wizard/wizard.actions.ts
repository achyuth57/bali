import {Action} from "redux";
import {Injectable} from "@angular/core";
import {IPayloadAction} from "../store/root.types";

@Injectable()
export class WizardActions {
    static NEXT_STEP = 'WIZARD_NEXT_STEP';
    static PREVIOUS_STEP = 'WIZARD_PREVIOUS_STEP';
    static INIT_WIZARD = 'WIZARD_INIT';

    initWizard(stepCount): IPayloadAction<any> {
        return { type: WizardActions.INIT_WIZARD, payload: stepCount};
    }

    nextStep(): IPayloadAction<any> {
        return { type: WizardActions.NEXT_STEP };
    }

    previousStep(): IPayloadAction<any> {
        return { type: WizardActions.PREVIOUS_STEP };
    }
}