import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { SwipeServiceService } from '../swipe-service.service';
export class ItemListComponent {
    constructor(elRef, swService) {
        this.swService = swService;
        this.alive = true;
        this.selfElement = null;
        this.idElement = null;
        this.disabledMark = false;
        this.showMark = false;
        this.rtl = false;
        this.markColor = "#F96060";
        this.itemClass = '';
        this.callback = new EventEmitter();
        this.swClick = new EventEmitter();
        this.random = () => {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };
        this.getParent = (arr = []) => {
            return new Promise((resolve, reject) => {
                arr.map(a => {
                    if (/list-swipe/.test(a.id)) {
                        resolve(a.id);
                    }
                });
            });
        };
        this.swipeleft = (res) => {
            this.swService.closeAll(this.selfElement.id);
            if (!this.disabledMark) {
                this.result = (res.deltaX < 0);
            }
        };
        this.swiperight = (res) => {
            this.swService.closeAll(this.selfElement.id);
            if (!this.disabledMark) {
                this.result = (res.deltaX > 0);
            }
        };
        this.clickItem = (a) => this.swClick.emit(a);
        this.action = (opt = '') => {
            try {
                this.result = false;
                const { id } = this.inside;
                if (opt === 'edit') {
                    this.callback.emit({ action: 'edit', value: id });
                }
                else if (opt === 'trash') {
                    this.callback.emit({ action: 'trash', value: id });
                }
            }
            catch (e) {
                console.log('Debes definir ID de edit, y trash');
            }
        };
        this.selfElement = elRef.nativeElement;
        this.idElement = `list-swipe-${this.random()}`;
        this.selfElement.setAttribute('data-id', this.idElement);
        this.selfElement.id = this.idElement;
        this.swService.swipeObserver.subscribe(a => {
            if (a !== this.selfElement.id) {
                this.result = false;
            }
        });
    }
    // @ViewChild('tpl') tpl: TemplateRef<any>
    clickOut(event) {
        if (!this.selfElement.contains(event.target)) {
            this.result = false;
        }
    }
    ngAfterViewInit() {
        if (this.showMark) {
            if (this.inside.mark && !this.markTemplate) {
                const viewMark = this.defaultMark.createEmbeddedView(null);
                this.viewContainerMark.insert(viewMark);
            }
            else if (this.inside.mark && this.markTemplate) {
                const viewMark = this.markTemplate.createEmbeddedView(null);
                this.viewContainerMark.insert(viewMark);
            }
            if (!this.inside.mark && !this.notMarkTemplate) {
                const viewMark = this.defaultNotMark.createEmbeddedView(null);
                this.viewContainerMark.insert(viewMark);
            }
            else if (!this.inside.mark && this.notMarkTemplate) {
                const viewMark = this.notMarkTemplate.createEmbeddedView(null);
                this.viewContainerMark.insert(viewMark);
            }
        }
        if (this.editTemplate) {
            const viewEdit = this.editTemplate.createEmbeddedView(null);
            if (this.viewContainerEdit) {
                this.viewContainerEdit.insert(viewEdit);
            }
        }
        else if (this.editTemplate !== null) {
            const viewEdit = this.defaultEdit.createEmbeddedView(null);
            this.viewContainerEdit.insert(viewEdit);
        }
        if (this.trashTemplate) {
            const viewTrash = this.trashTemplate.createEmbeddedView(null);
            if (this.viewContainerTrash) {
                this.viewContainerTrash.insert(viewTrash);
            }
        }
        else if (this.trashTemplate !== null) {
            const viewTrash = this.defaultTrash.createEmbeddedView(null);
            this.viewContainerTrash.insert(viewTrash);
        }
        setTimeout(() => {
            if (this.customTemplate) { // Si tiene
                const dataInside = Object.assign(Object.assign({}, this.inside), { touch: this.selfElement.id });
                const viewCustomTemplate = this.customTemplate.createEmbeddedView({
                    item: dataInside,
                    id: this.selfElement.id
                });
                // @ts-ignore
                if (viewCustomTemplate && viewCustomTemplate.rootNodes) {
                    // @ts-ignore
                    viewCustomTemplate.rootNodes.map(e => {
                        e.id = this.selfElement.id;
                        e.children[0].childNodes.forEach(b => {
                            if (b) {
                                b.id = this.selfElement.id;
                                if (b.children.length) {
                                    b.children[0].id = this.selfElement.id;
                                }
                            }
                        });
                    });
                }
                if (viewCustomTemplate) {
                    this.viewContainerCustom.insert(viewCustomTemplate);
                }
            }
            else {
                const viewCustomTemplate = this.defaultCustom.createEmbeddedView(null);
                this.viewContainerCustom.insert(viewCustomTemplate);
            }
        }, 50);
        // const hammer = new Hammer(this.selfElement);
    }
}
ItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sw-item-list',
                template: "<div class=\"{{itemClass}}\" (swipeleft)=\"swipeleft($event) \" (swiperight)=\"swiperight($event)\" (swipe)=\"rtl && rtl == true ? swiperight($event) : swipeleft($event)\" >\r\n  <ng-template #defaultEdit>\r\n    edit\r\n  </ng-template>\r\n  <ng-template #defaultTrash>\r\n    trash\r\n  </ng-template>\r\n  <ng-template #defaultMark>\r\n    <div class=\"yes-marker\"></div>\r\n  </ng-template>\r\n  <ng-template #defaultNotMark>\r\n    <div class=\"not-marker\"></div>\r\n  </ng-template>\r\n\r\n  <ng-template #defaultCustom>\r\n    <div data-id=\"{{idElement}}\" class=\"text truncate\">{{inside?.title }} </div>\r\n    <div data-id=\"{{idElement}}\" class=\"small truncate\">{{inside?.subTitle}}</div>\r\n  </ng-template>\r\n \r\n\r\n  <div [ngClass]=\"{'active':(result)}\" data-id=\"{{idElement}}\"\r\n       class=\" options-btn swipe-d-flex justify-content-between\"\r\n       class=\"{{rtl && rtl == true ? 'rtl' : ''}}\">\r\n    <div (click)=\"action('edit')\" class=\"option-list\" *ngIf=\"editTemplate !== null\">\r\n      <ng-template let-show=\"show\" #viewContainerEdit></ng-template>\r\n    </div>\r\n    <div (click)=\"action('trash')\" class=\"option-list\" *ngIf=\"trashTemplate !== null\">\r\n      <ng-template let-show=\"show\" #viewContainerTrash></ng-template>\r\n    </div>\r\n  </div>\r\n  <div [ngClass]=\"{'swipe':(result)}\" class=\"{{rtl && rtl == true ? 'rtl' : ''}}\" data-id=\"{{idElement}}\" class=\"list-swipe swipe-d-flex\">\r\n\r\n    <div *ngIf=\"showMark\" class=\"swipe-w-10\">\r\n      <ng-container #viewContainerMark></ng-container>\r\n    </div>\r\n\r\n    <div (click)=\"clickItem($event)\" [ngClass]=\"{'swipe-w-90':showMark, 'swipe-w-100':!showMark}\">\r\n      <div *ngIf=\"customTemplate\" data-id=\"{{idElement}}\">\r\n        <ng-template #viewContainerCustom>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div *ngIf=\"!customTemplate\">\r\n        <ng-template #viewContainerCustom></ng-template>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"mark\" style =\"--value: {{markColor}}\" class=\"{{rtl && rtl == true? 'rtl' : ''}}\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{display:block;font-family:Arial,serif}.not-marker{background:red}.not-marker,.yes-marker{border-radius:3rem;height:1rem;width:1rem}.yes-marker{background:green}.swipe-d-flex{display:flex}.swipe-w-10{width:10%}.swipe-w-100{width:100%}.swipe-w-90{width:90%}.options-btn.active{display:flex;transform:translate(66vw)}.list-swipe{border-radius:.25em;box-shadow:0 5px 7px hsla(0,0%,71%,.18);font-size:16px;font-weight:500;line-height:19px;margin:.75rem 0;padding:.75em;z-index:9}.list-swipe,.swipe{transition:all .1s ease-out}.swipe{box-shadow:6px 0 7px hsla(0,0%,71%,.31);transform:translate(-29vw)}.options-btn{display:none;padding:.5rem 0;position:absolute;transform:translate(100vw);width:28vw}.list-swipe .text{color:#313131}.list-swipe .small{color:#9b9b9b;font-size:16px;font-weight:500;line-height:19px;padding:1rem 0 0}.list-swipe .mark{background:#fff;border-right:.175rem solid var(--value);height:2rem;margin-right:-.3rem;margin-top:.75rem}.option-list{border-left-width:0;border-right:1px solid rgba(0,0,0,.1);line-height:3.75rem;min-height:3.75rem;text-align:center;width:100%}.option-list:last-child{border-right:0}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.swipe-d-flex.rtl{display:flex;flex-direction:row}.rtl .option-list:last-child{border-left:0}.rtl .option-list{border-left:1px solid rgba(0,0,0,.1);border-right-width:0}.list-swipe .mark.rtl{background:#fff;border-left:.175rem solid var(--value);border-right:none;height:2rem;margin-left:-.3rem;margin-top:.75rem}.swipe.rtl{box-shadow:-6px 0 7px hsla(0,0%,71%,.31);transform:translate(29vw);transition:all .1s ease-out}.options-btn.active.rtl{display:flex;transform:translate(0)}"]
            },] }
];
ItemListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SwipeServiceService }
];
ItemListComponent.propDecorators = {
    inside: [{ type: Input }],
    disabledMark: [{ type: Input, args: ['disable-mark',] }],
    showMark: [{ type: Input, args: ['show-mark',] }],
    rtl: [{ type: Input, args: ['rtl',] }],
    markColor: [{ type: Input, args: ['mark-color',] }],
    itemClass: [{ type: Input, args: ['item-class',] }],
    defaultEdit: [{ type: ViewChild, args: ['defaultEdit',] }],
    defaultTrash: [{ type: ViewChild, args: ['defaultTrash',] }],
    defaultMark: [{ type: ViewChild, args: ['defaultMark',] }],
    defaultNotMark: [{ type: ViewChild, args: ['defaultNotMark',] }],
    defaultCustom: [{ type: ViewChild, args: ['defaultCustom',] }],
    customTemplate: [{ type: Input, args: ['customTemplate',] }],
    editTemplate: [{ type: Input, args: ['editTemplate',] }],
    trashTemplate: [{ type: Input, args: ['trashTemplate',] }],
    markTemplate: [{ type: Input, args: ['markTemplate',] }],
    notMarkTemplate: [{ type: Input, args: ['notMarkTemplate',] }],
    callback: [{ type: Output }],
    swClick: [{ type: Output }],
    viewContainerEdit: [{ type: ViewChild, args: ['viewContainerEdit', { static: false, read: ViewContainerRef },] }],
    viewContainerTrash: [{ type: ViewChild, args: ['viewContainerTrash', { static: false, read: ViewContainerRef },] }],
    viewContainerMark: [{ type: ViewChild, args: ['viewContainerMark', { static: false, read: ViewContainerRef },] }],
    viewContainerCustom: [{ type: ViewChild, args: ['viewContainerCustom', { static: false, read: ViewContainerRef },] }],
    clickOut: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9yZXBvcy9TZWF0YmFjay9wbHVnaW5zL3N3aXBlLWFuZ3VsYXItbGlzdC1ydGwvcHJvamVjdHMvc3dpcGUtYW5ndWxhci1saXN0LXJ0bC9zcmMvIiwic291cmNlcyI6WyJsaWIvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFBRSxnQkFBZ0IsRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFPN0QsTUFBTSxPQUFPLGlCQUFpQjtJQXFFNUIsWUFBWSxLQUFpQixFQUFVLFNBQThCO1FBQTlCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBcEVyRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVFNLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNMLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQTBCcEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFtQzFCLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFF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WSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTd2lwZVNlcnZpY2VTZXJ2aWNlfSBmcm9tICcuLi9zd2lwZS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdy1pdGVtLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgYWxpdmUgPSB0cnVlO1xyXG4gIHJlc3VsdDogYm9vbGVhbjtcclxuICBzZWxmRWxlbWVudCA9IG51bGw7XHJcbiAgaWRFbGVtZW50ID0gbnVsbDtcclxuICBASW5wdXQoKSBpbnNpZGU6IHtcclxuICAgIGlkLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgc3ViVGl0bGU6ICcnLFxyXG4gICAgbWFyazogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgQElucHV0KCdkaXNhYmxlLW1hcmsnKSBkaXNhYmxlZE1hcmsgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdzaG93LW1hcmsnKSBzaG93TWFyayA9IGZhbHNlO1xyXG4gIEBJbnB1dCgncnRsJykgcnRsID0gZmFsc2U7XHJcbiAgQElucHV0KCdtYXJrLWNvbG9yJykgbWFya0NvbG9yID0gXCIjRjk2MDYwXCI7XHJcbiAgQElucHV0KCdpdGVtLWNsYXNzJykgaXRlbUNsYXNzID0gJyc7XHJcbiBcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEVkaXQnKSBkZWZhdWx0RWRpdDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdFRyYXNoJykgZGVmYXVsdFRyYXNoOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdE1hcmsnKSBkZWZhdWx0TWFyazogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdE5vdE1hcmsnKSBkZWZhdWx0Tm90TWFyazogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEN1c3RvbScpIGRlZmF1bHRDdXN0b206IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2N1c3RvbVRlbXBsYXRlJykgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnZWRpdFRlbXBsYXRlJykgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ3RyYXNoVGVtcGxhdGUnKSB0cmFzaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ21hcmtUZW1wbGF0ZScpIG1hcmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdub3RNYXJrVGVtcGxhdGUnKSBub3RNYXJrVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHN3Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndmlld0NvbnRhaW5lckVkaXQnLCB7c3RhdGljOiBmYWxzZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZn0pXHJcbiAgdmlld0NvbnRhaW5lckVkaXQ6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJUcmFzaCcsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcclxuICB2aWV3Q29udGFpbmVyVHJhc2g6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJNYXJrJywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxyXG4gIHZpZXdDb250YWluZXJNYXJrOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyQ3VzdG9tJywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxyXG4gIHZpZXdDb250YWluZXJDdXN0b206IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIC8vIEBWaWV3Q2hpbGQoJ3RwbCcpIHRwbDogVGVtcGxhdGVSZWY8YW55PlxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2tPdXQoZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5zZWxmRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBzd1NlcnZpY2U6IFN3aXBlU2VydmljZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VsZkVsZW1lbnQgPSBlbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5pZEVsZW1lbnQgPSBgbGlzdC1zd2lwZS0ke3RoaXMucmFuZG9tKCl9YDtcclxuICAgIHRoaXMuc2VsZkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5pZEVsZW1lbnQpO1xyXG4gICAgdGhpcy5zZWxmRWxlbWVudC5pZCA9IHRoaXMuaWRFbGVtZW50O1xyXG4gICAgdGhpcy5zd1NlcnZpY2Uuc3dpcGVPYnNlcnZlci5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgIGlmIChhICE9PSB0aGlzLnNlbGZFbGVtZW50LmlkKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJhbmRvbSA9ICgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldFBhcmVudCA9IChhcnIgPSBbXSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgYXJyLm1hcChhID0+IHtcclxuICAgICAgICBpZiAoL2xpc3Qtc3dpcGUvLnRlc3QoYS5pZCkpIHtcclxuICAgICAgICAgIHJlc29sdmUoYS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3dpcGVsZWZ0ID0gKHJlczphbnkpID0+IHtcclxuICAgIHRoaXMuc3dTZXJ2aWNlLmNsb3NlQWxsKHRoaXMuc2VsZkVsZW1lbnQuaWQpO1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZE1hcmspIHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gKHJlcy5kZWx0YVggPCAwKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzd2lwZXJpZ2h0ID0gKHJlczphbnkpID0+IHtcclxuICAgIHRoaXMuc3dTZXJ2aWNlLmNsb3NlQWxsKHRoaXMuc2VsZkVsZW1lbnQuaWQpO1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZE1hcmspIHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gKHJlcy5kZWx0YVggPiAwKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja0l0ZW0gPSAoYTogYW55KSA9PiB0aGlzLnN3Q2xpY2suZW1pdChhKTtcclxuXHJcbiAgYWN0aW9uID0gKG9wdCA9ICcnKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5pbnNpZGU7XHJcbiAgICAgIGlmIChvcHQgPT09ICdlZGl0Jykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2suZW1pdCh7YWN0aW9uOiAnZWRpdCcsIHZhbHVlOiBpZH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gJ3RyYXNoJykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2suZW1pdCh7YWN0aW9uOiAndHJhc2gnLCB2YWx1ZTogaWR9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGViZXMgZGVmaW5pciBJRCBkZSBlZGl0LCB5IHRyYXNoJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd01hcmspIHtcclxuICAgICAgaWYgKHRoaXMuaW5zaWRlLm1hcmsgJiYgIXRoaXMubWFya1RlbXBsYXRlKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLmRlZmF1bHRNYXJrLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJNYXJrLmluc2VydCh2aWV3TWFyayk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnNpZGUubWFyayAmJiB0aGlzLm1hcmtUZW1wbGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5tYXJrVGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lck1hcmsuaW5zZXJ0KHZpZXdNYXJrKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLmluc2lkZS5tYXJrICYmICF0aGlzLm5vdE1hcmtUZW1wbGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5kZWZhdWx0Tm90TWFyay5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmluc2lkZS5tYXJrICYmIHRoaXMubm90TWFya1RlbXBsYXRlKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLm5vdE1hcmtUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWRpdFRlbXBsYXRlKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdFZGl0ID0gdGhpcy5lZGl0VGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyRWRpdCkge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lckVkaXQuaW5zZXJ0KHZpZXdFZGl0KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRUZW1wbGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB2aWV3RWRpdCA9IHRoaXMuZGVmYXVsdEVkaXQuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJFZGl0Lmluc2VydCh2aWV3RWRpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudHJhc2hUZW1wbGF0ZSkge1xyXG4gICAgICBjb25zdCB2aWV3VHJhc2ggPSB0aGlzLnRyYXNoVGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyVHJhc2gpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJUcmFzaC5pbnNlcnQodmlld1RyYXNoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYXNoVGVtcGxhdGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3Qgdmlld1RyYXNoID0gdGhpcy5kZWZhdWx0VHJhc2guY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJUcmFzaC5pbnNlcnQodmlld1RyYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY3VzdG9tVGVtcGxhdGUpIHsgLy8gU2kgdGllbmVcclxuICAgICAgICBjb25zdCBkYXRhSW5zaWRlID0gey4uLnRoaXMuaW5zaWRlLCAuLi57dG91Y2g6IHRoaXMuc2VsZkVsZW1lbnQuaWR9fTtcclxuICAgICAgICBjb25zdCB2aWV3Q3VzdG9tVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVRlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyh7XHJcbiAgICAgICAgICBpdGVtOiBkYXRhSW5zaWRlLFxyXG4gICAgICAgICAgaWQ6IHRoaXMuc2VsZkVsZW1lbnQuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKHZpZXdDdXN0b21UZW1wbGF0ZSAmJiB2aWV3Q3VzdG9tVGVtcGxhdGUucm9vdE5vZGVzKSB7XHJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICB2aWV3Q3VzdG9tVGVtcGxhdGUucm9vdE5vZGVzLm1hcChlID0+IHtcclxuICAgICAgICAgICAgZS5pZCA9IHRoaXMuc2VsZkVsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgIGUuY2hpbGRyZW5bMF0uY2hpbGROb2Rlcy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICBiLmlkID0gdGhpcy5zZWxmRWxlbWVudC5pZDtcclxuICAgICAgICAgICAgICAgIGlmIChiLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICBiLmNoaWxkcmVuWzBdLmlkID0gdGhpcy5zZWxmRWxlbWVudC5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlld0N1c3RvbVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXJDdXN0b20uaW5zZXJ0KHZpZXdDdXN0b21UZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZpZXdDdXN0b21UZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdEN1c3RvbS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyQ3VzdG9tLmluc2VydCh2aWV3Q3VzdG9tVGVtcGxhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5zZWxmRWxlbWVudCk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19