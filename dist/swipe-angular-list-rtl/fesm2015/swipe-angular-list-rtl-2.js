import { ɵɵdefineInjectable, Injectable, Component, EventEmitter, ElementRef, Input, ViewChild, Output, ViewContainerRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

class SwipeAngularListService {
    constructor() { }
}
SwipeAngularListService.ɵprov = ɵɵdefineInjectable({ factory: function SwipeAngularListService_Factory() { return new SwipeAngularListService(); }, token: SwipeAngularListService, providedIn: "root" });
SwipeAngularListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SwipeAngularListService.ctorParameters = () => [];

class SwipeAngularListComponent {
    constructor() { }
    ngOnInit() {
    }
}
SwipeAngularListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sw-swipe-angular-list',
                template: `
    <p>
      swipe-angular-list works!
    </p>
  `
            },] }
];
SwipeAngularListComponent.ctorParameters = () => [];

class SwipeServiceService {
    constructor() {
        this.swipeObserver = new EventEmitter();
    }
    closeAll(id) {
        this.swipeObserver.emit(id);
    }
}
SwipeServiceService.ɵprov = ɵɵdefineInjectable({ factory: function SwipeServiceService_Factory() { return new SwipeServiceService(); }, token: SwipeServiceService, providedIn: "root" });
SwipeServiceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SwipeServiceService.ctorParameters = () => [];

class ItemListComponent {
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

class HammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
class SwipeAngularListModule {
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

/*
 * Public API Surface of swipe-angular-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HammerConfig, ItemListComponent, SwipeAngularListComponent, SwipeAngularListModule, SwipeAngularListService, SwipeServiceService as ɵa };
//# sourceMappingURL=swipe-angular-list-rtl-2.js.map
