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
SwipeServiceService.ɵfac = function SwipeServiceService_Factory(t) { return new (t || SwipeServiceService)(); };
SwipeServiceService.ɵprov = i0.ɵɵdefineInjectable({ token: SwipeServiceService, factory: SwipeServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwipeServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hemFydWUvUHJvamVjdHMvU2VhdGJhY2srL3NodHV0L3NodHV0L3Byb2plY3RzL3N3aXBlLWFuZ3VsYXItbGlzdC1ydGwvc3JjLyIsInNvdXJjZXMiOlsibGliL3N3aXBlLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLdkQsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQUZBLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHekQsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFFO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7c0ZBUlUsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO2tEQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlU2VydmljZVNlcnZpY2Uge1xuICBzd2lwZU9ic2VydmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNsb3NlQWxsKGlkKSB7XG4gICAgdGhpcy5zd2lwZU9ic2VydmVyLmVtaXQoaWQpO1xuICB9XG59XG4iXX0=