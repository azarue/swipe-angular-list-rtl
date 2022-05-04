import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SwipeServiceService {
    constructor() {
        this.swipeObserver = new EventEmitter();
    }
    closeAll(id) {
        this.swipeObserver.emit(id);
    }
}
SwipeServiceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SwipeServiceService_Factory() { return new SwipeServiceService(); }, token: SwipeServiceService, providedIn: "root" });
SwipeServiceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SwipeServiceService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L3JlcG9zL1NlYXRiYWNrL2F6YXIgcmVwb3Mvc3dpcGUtYW5ndWxhci1saXN0LXJ0bC9wcm9qZWN0cy9zd2lwZS1hbmd1bGFyLWxpc3QtcnRsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zd2lwZS1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFGQSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pELENBQUM7SUFFRCxRQUFRLENBQUMsRUFBRTtRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2lwZVNlcnZpY2VTZXJ2aWNlIHtcclxuICBzd2lwZU9ic2VydmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBjbG9zZUFsbChpZCkge1xyXG4gICAgdGhpcy5zd2lwZU9ic2VydmVyLmVtaXQoaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=