import { HammerGestureConfig } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "./swipe-angular-list.component";
import * as i2 from "./item-list/item-list.component";
import * as i3 from "@angular/common";
export declare class HammerConfig extends HammerGestureConfig {
    overrides: {
        pinch: {
            enable: boolean;
        };
        rotate: {
            enable: boolean;
        };
    };
}
export declare class SwipeAngularListModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<SwipeAngularListModule, [typeof i1.SwipeAngularListComponent, typeof i2.ItemListComponent], [typeof i3.CommonModule], [typeof i1.SwipeAngularListComponent, typeof i2.ItemListComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<SwipeAngularListModule>;
}
