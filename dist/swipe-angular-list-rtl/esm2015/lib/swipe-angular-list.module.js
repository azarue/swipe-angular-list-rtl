import { NgModule } from '@angular/core';
import { SwipeAngularListComponent } from './swipe-angular-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export class HammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
export class SwipeAngularListModule {
}
SwipeAngularListModule.ɵmod = i0.ɵɵdefineNgModule({ type: SwipeAngularListModule });
SwipeAngularListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SwipeAngularListModule_Factory(t) { return new (t || SwipeAngularListModule)(); }, providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        }
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SwipeAngularListModule, { declarations: [SwipeAngularListComponent, ItemListComponent], imports: [CommonModule], exports: [SwipeAngularListComponent, ItemListComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwipeAngularListModule, [{
        type: NgModule,
        args: [{
                declarations: [SwipeAngularListComponent, ItemListComponent],
                imports: [
                    CommonModule
                ],
                providers: [
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: HammerConfig
                    }
                ],
                exports: [SwipeAngularListComponent, ItemListComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtYW5ndWxhci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXphcnVlL1Byb2plY3RzL1NlYXRiYWNrKy9zaHR1dC9zaHR1dC9wcm9qZWN0cy9zd2lwZS1hbmd1bGFyLWxpc3QtcnRsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zd2lwZS1hbmd1bGFyLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztBQUVyRixNQUFNLE9BQU8sWUFBYSxTQUFRLG1CQUFtQjtJQUFyRDs7UUFDRSxjQUFTLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBQ3RCLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQWVELE1BQU0sT0FBTyxzQkFBc0I7OzBEQUF0QixzQkFBc0I7MkhBQXRCLHNCQUFzQixtQkFSdEI7UUFDVDtZQUNFLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLFlBQVk7U0FDdkI7S0FDRixZQVJRO1lBQ1AsWUFBWTtTQUNiO3dGQVNVLHNCQUFzQixtQkFabEIseUJBQXlCLEVBQUUsaUJBQWlCLGFBRXpELFlBQVksYUFRSix5QkFBeUIsRUFBRSxpQkFBaUI7a0RBRTNDLHNCQUFzQjtjQWJsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzVELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsWUFBWTtxQkFDdkI7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3dpcGVBbmd1bGFyTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zd2lwZS1hbmd1bGFyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SXRlbUxpc3RDb21wb25lbnR9IGZyb20gJy4vaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0hBTU1FUl9HRVNUVVJFX0NPTkZJRywgSGFtbWVyR2VzdHVyZUNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0ge1xuICAgIHBpbmNoOiB7ZW5hYmxlOiBmYWxzZX0sXG4gICAgcm90YXRlOiB7ZW5hYmxlOiBmYWxzZX1cbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3dpcGVBbmd1bGFyTGlzdENvbXBvbmVudCwgSXRlbUxpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgIHVzZUNsYXNzOiBIYW1tZXJDb25maWdcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtTd2lwZUFuZ3VsYXJMaXN0Q29tcG9uZW50LCBJdGVtTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVBbmd1bGFyTGlzdE1vZHVsZSB7XG59XG4iXX0=