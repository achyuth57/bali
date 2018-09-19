import {IQuizState} from "./quiz.types";
import {QuizActions} from "./quiz.actions";
import {Action} from "redux";
import {IPayloadAction} from "../store/root.types";

const INITIAL_STATE:IQuizState = {
    score: 0
};


export function quizReducer(lastState: IQuizState = INITIAL_STATE, action: IPayloadAction<number>): IQuizState {
    switch(action.type) {
        case QuizActions.ADJUST_SCORE:
            return {...lastState, score:lastState.score + action.payload};
    }

    // We don't care about any other actions right now.
    return lastState;
}