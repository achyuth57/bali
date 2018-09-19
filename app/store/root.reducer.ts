import { combineReducers } from 'redux';
import {wizardReducer} from "../wizard/wizard.reducer";
import {quizReducer} from "../quiz/quiz.reducer";

export const rootReducer =
    combineReducers({
        wizard: wizardReducer,
        quiz:quizReducer
    });