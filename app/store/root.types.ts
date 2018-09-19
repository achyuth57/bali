import {IWizardState} from "../wizard/wizard.types";
import {Action} from "redux";
import {IQuizState} from "../quiz/quiz.types";

export interface IAppState {
    wizard?: IWizardState;
    quiz?: IQuizState;
}


export interface IPayloadAction<P> extends Action {
    payload?: P;
    error?: any;

}