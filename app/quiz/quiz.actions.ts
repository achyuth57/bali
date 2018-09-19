import {Action} from "redux";
import {Injectable} from "@angular/core";
import {IPayloadAction} from "../store/root.types";

@Injectable()
export class QuizActions {
    static ADJUST_SCORE = 'ADJUST_SCORE';

    adjustScore(adjustment): IPayloadAction<number> {
        return { type: QuizActions.ADJUST_SCORE, payload: adjustment };
    }
}