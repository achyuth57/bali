import {NgModule} from "@angular/core";
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {IAppState} from "./root.types";
import {rootReducer} from "./root.reducer";
@NgModule({
    imports: [NgReduxModule],
    providers: [],
})
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        devTools: DevToolsExtension,
    ) {
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(
            rootReducer,
            {},
            [],
            devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}