import { QuizActions} from "./quiz.actions";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "../store/store.module";

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule, StoreModule],
    providers: [QuizActions],
})
export class QuizModule {}