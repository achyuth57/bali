import {WizardComponent} from "./wizard/wizard.component";
import {WizardStepComponent} from "./wizard-step/wizard-step.component";
import {WizardActions} from "./wizard.actions";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "../store/store.module";

@NgModule({
    declarations: [WizardComponent, WizardStepComponent],
    exports: [WizardComponent,WizardStepComponent],
    imports: [CommonModule, StoreModule],
    providers: [WizardActions],
})
export class WizardModule {}