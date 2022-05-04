import { HammerGestureConfig } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './swipe-angular-list.component';
import * as ɵngcc2 from './item-list/item-list.component';
import * as ɵngcc3 from '@angular/common';
export declare class HammerConfig extends HammerGestureConfig {
    overrides: {
        pinch: {
            enable: boolean;
        };
        rotate: {
            enable: boolean;
        };
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HammerConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HammerConfig>;
}
export declare class SwipeAngularListModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SwipeAngularListModule, [typeof ɵngcc1.SwipeAngularListComponent, typeof ɵngcc2.ItemListComponent], [typeof ɵngcc3.CommonModule], [typeof ɵngcc1.SwipeAngularListComponent, typeof ɵngcc2.ItemListComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SwipeAngularListModule>;
}

//# sourceMappingURL=swipe-angular-list.module.d.ts.map