import {IWizardState} from "./wizard.types";
import {WizardActions} from "./wizard.actions";
import {IPayloadAction} from "../store/root.types";

const INITIAL_STATE:IWizardState = {
    activeStepIndex:0,
    totalSteps: 0
};

function processState(state:IWizardState):IWizardState {

    if(state.activeStepIndex > state.totalSteps - 1)
    {
        state.activeStepIndex = state.activeStepIndex - 1;
    }
    else if(state.activeStepIndex < 0)
    {
        state.activeStepIndex = 0;
    }
    return state;
}

export function wizardReducer(lastState: IWizardState = INITIAL_STATE, action: IPayloadAction<any>): IWizardState {
    switch(action.type) {
        case WizardActions.INIT_WIZARD:
            return processState({...lastState, totalSteps:action.payload});
        case WizardActions.NEXT_STEP:
            return processState({...lastState, activeStepIndex:lastState.activeStepIndex + 1});
        case WizardActions.PREVIOUS_STEP:
            return processState({...lastState, activeStepIndex:lastState.activeStepIndex - 1});
    }

    // We don't care about any other actions right now.
    return lastState;
}