import { NgModule } from '@angular/core';
import { SwipeAngularListComponent } from './swipe-angular-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
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
SwipeAngularListModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtYW5ndWxhci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9yZXBvcy9TZWF0YmFjay9wbHVnaW5zL3N3aXBlLWFuZ3VsYXItbGlzdC1ydGwvcHJvamVjdHMvc3dpcGUtYW5ndWxhci1saXN0LXJ0bC9zcmMvIiwic291cmNlcyI6WyJsaWIvc3dpcGUtYW5ndWxhci1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixNQUFNLE9BQU8sWUFBYSxTQUFRLG1CQUFtQjtJQUFyRDs7UUFDRSxjQUFTLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBQ3RCLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7U0FDeEIsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQWVELE1BQU0sT0FBTyxzQkFBc0I7OztZQWJsQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzVELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsWUFBWTtxQkFDdkI7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTd2lwZUFuZ3VsYXJMaXN0Q29tcG9uZW50fSBmcm9tICcuL3N3aXBlLWFuZ3VsYXItbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0l0ZW1MaXN0Q29tcG9uZW50fSBmcm9tICcuL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7SEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcclxuICBvdmVycmlkZXMgPSB7XHJcbiAgICBwaW5jaDoge2VuYWJsZTogZmFsc2V9LFxyXG4gICAgcm90YXRlOiB7ZW5hYmxlOiBmYWxzZX1cclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1N3aXBlQW5ndWxhckxpc3RDb21wb25lbnQsIEl0ZW1MaXN0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXHJcbiAgICAgIHVzZUNsYXNzOiBIYW1tZXJDb25maWdcclxuICAgIH1cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTd2lwZUFuZ3VsYXJMaXN0Q29tcG9uZW50LCBJdGVtTGlzdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXBlQW5ndWxhckxpc3RNb2R1bGUge1xyXG59XHJcbiJdfQ==