import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, EventEmitter, ɵɵelement, ɵɵnextContext, ɵɵpropertyInterpolate, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵelementContainer, ɵɵdirectiveInject, ElementRef, ɵɵviewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵresolveDocument, ɵɵclassMap, ɵɵproperty, ɵɵpureFunction1, ɵɵpureFunction2, Input, ViewChild, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgIf, CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

class SwipeAngularListService {
    constructor() { }
}
SwipeAngularListService.ɵfac = function SwipeAngularListService_Factory(t) { return new (t || SwipeAngularListService)(); };
SwipeAngularListService.ɵprov = ɵɵdefineInjectable({ token: SwipeAngularListService, factory: SwipeAngularListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwipeAngularListService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SwipeAngularListComponent {
    constructor() { }
    ngOnInit() {
    }
}
SwipeAngularListComponent.ɵfac = function SwipeAngularListComponent_Factory(t) { return new (t || SwipeAngularListComponent)(); };
SwipeAngularListComponent.ɵcmp = ɵɵdefineComponent({ type: SwipeAngularListComponent, selectors: [["sw-swipe-angular-list"]], decls: 2, vars: 0, template: function SwipeAngularListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " swipe-angular-list works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwipeAngularListComponent, [{
        type: Component,
        args: [{
                selector: 'sw-swipe-angular-list',
                template: `
    <p>
      swipe-angular-list works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SwipeServiceService {
    constructor() {
        this.swipeObserver = new EventEmitter();
    }
    closeAll(id) {
        this.swipeObserver.emit(id);
    }
}
SwipeServiceService.ɵfac = function SwipeServiceService_Factory(t) { return new (t || SwipeServiceService)(); };
SwipeServiceService.ɵprov = ɵɵdefineInjectable({ token: SwipeServiceService, factory: SwipeServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwipeServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["defaultEdit"];
const _c1 = ["defaultTrash"];
const _c2 = ["defaultMark"];
const _c3 = ["defaultNotMark"];
const _c4 = ["defaultCustom"];
const _c5 = ["viewContainerEdit"];
const _c6 = ["viewContainerTrash"];
const _c7 = ["viewContainerMark"];
const _c8 = ["viewContainerCustom"];
function ItemListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " edit ");
} }
function ItemListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, " trash ");
} }
function ItemListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} }
function ItemListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 15);
} }
function ItemListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 17);
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r9.idElement);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r9.inside == null ? null : ctx_r9.inside.title, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", ctx_r9.idElement);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r9.inside == null ? null : ctx_r9.inside.subTitle);
} }
function ItemListComponent_div_12_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("click", function ItemListComponent_div_12_Template_div_click_0_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.action("edit"); });
    ɵɵtemplate(1, ItemListComponent_div_12_ng_template_1_Template, 0, 0, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} }
function ItemListComponent_div_13_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("click", function ItemListComponent_div_13_Template_div_click_0_listener() { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(); return ctx_r23.action("trash"); });
    ɵɵtemplate(1, ItemListComponent_div_13_ng_template_1_Template, 0, 0, "ng-template", null, 20, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} }
function ItemListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelementContainer(1, null, 22);
    ɵɵelementEnd();
} }
function ItemListComponent_div_17_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, ItemListComponent_div_17_ng_template_1_Template, 0, 0, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r13.idElement);
} }
function ItemListComponent_div_18_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ItemListComponent_div_18_ng_template_1_Template, 0, 0, "ng-template", null, 24, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} }
const _c9 = function (a0) { return { "active": a0 }; };
const _c10 = function (a0) { return { "swipe": a0 }; };
const _c11 = function (a0, a1) { return { "swipe-w-90": a0, "swipe-w-100": a1 }; };
class ItemListComponent {
    constructor(elRef, swService) {
        this.swService = swService;
        this.alive = true;
        this.selfElement = null;
        this.idElement = null;
        this.disabledMark = false;
        this.showMark = false;
        this.rtl = false;
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
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SwipeServiceService)); };
ItemListComponent.ɵcmp = ɵɵdefineComponent({ type: ItemListComponent, selectors: [["sw-item-list"]], viewQuery: function ItemListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
        ɵɵviewQuery(_c3, true);
        ɵɵviewQuery(_c4, true);
        ɵɵviewQuery(_c5, true, ViewContainerRef);
        ɵɵviewQuery(_c6, true, ViewContainerRef);
        ɵɵviewQuery(_c7, true, ViewContainerRef);
        ɵɵviewQuery(_c8, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultEdit = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTrash = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultMark = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultNotMark = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultCustom = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerEdit = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerTrash = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerMark = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerCustom = _t.first);
    } }, hostBindings: function ItemListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function ItemListComponent_click_HostBindingHandler($event) { return ctx.clickOut($event); }, false, ɵɵresolveDocument);
    } }, inputs: { inside: "inside", disabledMark: ["disable-mark", "disabledMark"], showMark: ["show-mark", "showMark"], rtl: "rtl", itemClass: ["item-class", "itemClass"], customTemplate: "customTemplate", editTemplate: "editTemplate", trashTemplate: "trashTemplate", markTemplate: "markTemplate", notMarkTemplate: "notMarkTemplate" }, outputs: { callback: "callback", swClick: "swClick" }, decls: 20, vars: 29, consts: [[3, "swipeleft", "swiperight", "swipe"], ["defaultEdit", ""], ["defaultTrash", ""], ["defaultMark", ""], ["defaultNotMark", ""], ["defaultCustom", ""], [1, "options-btn", "swipe-d-flex", "justify-content-between", 3, "ngClass", "id"], ["class", "option-list", 3, "click", 4, "ngIf"], [1, "list-swipe", "swipe-d-flex", 3, "ngClass", "id"], ["class", "swipe-w-10", 4, "ngIf"], [3, "ngClass", "click"], [3, "id", 4, "ngIf"], [4, "ngIf"], [1, "mark"], [1, "yes-marker"], [1, "not-marker"], [1, "text", "truncate", 3, "id"], [1, "small", "truncate", 3, "id"], [1, "option-list", 3, "click"], ["viewContainerEdit", ""], ["viewContainerTrash", ""], [1, "swipe-w-10"], ["viewContainerMark", ""], [3, "id"], ["viewContainerCustom", ""]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("swipeleft", function ItemListComponent_Template_div_swipeleft_0_listener($event) { return ctx.swipeleft($event); })("swiperight", function ItemListComponent_Template_div_swiperight_0_listener($event) { return ctx.swiperight($event); })("swipe", function ItemListComponent_Template_div_swipe_0_listener($event) { return ctx.rtl && ctx.rtl == true ? ctx.swiperight($event) : ctx.swipeleft($event); });
        ɵɵtemplate(1, ItemListComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, ItemListComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, ItemListComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(7, ItemListComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, ItemListComponent_ng_template_9_Template, 4, 4, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵelementStart(11, "div", 6);
        ɵɵtemplate(12, ItemListComponent_div_12_Template, 3, 0, "div", 7);
        ɵɵtemplate(13, ItemListComponent_div_13_Template, 3, 0, "div", 7);
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 8);
        ɵɵtemplate(15, ItemListComponent_div_15_Template, 3, 0, "div", 9);
        ɵɵelementStart(16, "div", 10);
        ɵɵlistener("click", function ItemListComponent_Template_div_click_16_listener($event) { return ctx.clickItem($event); });
        ɵɵtemplate(17, ItemListComponent_div_17_Template, 3, 1, "div", 11);
        ɵɵtemplate(18, ItemListComponent_div_18_Template, 3, 0, "div", 12);
        ɵɵelementEnd();
        ɵɵelement(19, "div", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.itemClass);
        ɵɵadvance(11);
        ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
        ɵɵpropertyInterpolate("id", ctx.idElement);
        ɵɵproperty("ngClass", ɵɵpureFunction1(22, _c9, ctx.result));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.editTemplate !== null);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.trashTemplate !== null);
        ɵɵadvance(1);
        ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
        ɵɵpropertyInterpolate("id", ctx.idElement);
        ɵɵproperty("ngClass", ɵɵpureFunction1(24, _c10, ctx.result));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showMark);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(26, _c11, ctx.showMark, !ctx.showMark));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.customTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.customTemplate);
        ɵɵadvance(1);
        ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
    } }, directives: [NgClass, NgIf], styles: ["[_nghost-%COMP%]{display:block;font-family:Arial,serif}.not-marker[_ngcontent-%COMP%]{background:red}.not-marker[_ngcontent-%COMP%], .yes-marker[_ngcontent-%COMP%]{border-radius:3rem;height:1rem;width:1rem}.yes-marker[_ngcontent-%COMP%]{background:green}.swipe-d-flex[_ngcontent-%COMP%]{display:flex}.swipe-w-10[_ngcontent-%COMP%]{width:10%}.swipe-w-100[_ngcontent-%COMP%]{width:100%}.swipe-w-90[_ngcontent-%COMP%]{width:90%}.options-btn.active[_ngcontent-%COMP%]{display:flex;transform:translate(66vw)}.list-swipe[_ngcontent-%COMP%]{border-radius:.25em;box-shadow:0 5px 7px hsla(0,0%,71%,.18);font-size:16px;font-weight:500;line-height:19px;margin:.75rem 0;padding:.75em;z-index:9}.list-swipe[_ngcontent-%COMP%], .swipe[_ngcontent-%COMP%]{transition:all .1s ease-out}.swipe[_ngcontent-%COMP%]{box-shadow:6px 0 7px hsla(0,0%,71%,.31);transform:translate(-29vw)}.options-btn[_ngcontent-%COMP%]{display:none;padding:.5rem 0;position:absolute;transform:translate(100vw);width:28vw}.list-swipe[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#313131}.list-swipe[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{color:#9b9b9b;font-size:16px;font-weight:500;line-height:19px;padding:1rem 0 0}.list-swipe[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%]{background:#fff;border-right:.175rem solid #f96060;height:2rem;margin-right:-.3rem;margin-top:.75rem}.option-list[_ngcontent-%COMP%]{border-left-width:0;border-right:1px solid rgba(0,0,0,.1);line-height:3.75rem;min-height:3.75rem;text-align:center;width:100%}.option-list[_ngcontent-%COMP%]:last-child{border-right:0}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.swipe-d-flex.rtl[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse}.rtl[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]:last-child{border-left:0}.rtl[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1);border-right-width:0}.list-swipe[_ngcontent-%COMP%]   .mark.rtl[_ngcontent-%COMP%]{background:#fff;border-left:.175rem solid #f96060;border-right:none;height:2rem;margin-left:-.3rem;margin-right:.3rem;margin-top:.75rem}.swipe.rtl[_ngcontent-%COMP%]{box-shadow:-6px 0 7px hsla(0,0%,71%,.31);transform:translate(29vw);transition:all .1s ease-out}.options-btn.active.rtl[_ngcontent-%COMP%]{display:flex;transform:translate(0)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ItemListComponent, [{
        type: Component,
        args: [{
                selector: 'sw-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.css']
            }]
    }], function () { return [{ type: ElementRef }, { type: SwipeServiceService }]; }, { inside: [{
            type: Input
        }], disabledMark: [{
            type: Input,
            args: ['disable-mark']
        }], showMark: [{
            type: Input,
            args: ['show-mark']
        }], rtl: [{
            type: Input,
            args: ['rtl']
        }], itemClass: [{
            type: Input,
            args: ['item-class']
        }], defaultEdit: [{
            type: ViewChild,
            args: ['defaultEdit']
        }], defaultTrash: [{
            type: ViewChild,
            args: ['defaultTrash']
        }], defaultMark: [{
            type: ViewChild,
            args: ['defaultMark']
        }], defaultNotMark: [{
            type: ViewChild,
            args: ['defaultNotMark']
        }], defaultCustom: [{
            type: ViewChild,
            args: ['defaultCustom']
        }], customTemplate: [{
            type: Input,
            args: ['customTemplate']
        }], editTemplate: [{
            type: Input,
            args: ['editTemplate']
        }], trashTemplate: [{
            type: Input,
            args: ['trashTemplate']
        }], markTemplate: [{
            type: Input,
            args: ['markTemplate']
        }], notMarkTemplate: [{
            type: Input,
            args: ['notMarkTemplate']
        }], callback: [{
            type: Output
        }], swClick: [{
            type: Output
        }], viewContainerEdit: [{
            type: ViewChild,
            args: ['viewContainerEdit', { static: false, read: ViewContainerRef }]
        }], viewContainerTrash: [{
            type: ViewChild,
            args: ['viewContainerTrash', { static: false, read: ViewContainerRef }]
        }], viewContainerMark: [{
            type: ViewChild,
            args: ['viewContainerMark', { static: false, read: ViewContainerRef }]
        }], viewContainerCustom: [{
            type: ViewChild,
            args: ['viewContainerCustom', { static: false, read: ViewContainerRef }]
        }], clickOut: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();

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
SwipeAngularListModule.ɵmod = ɵɵdefineNgModule({ type: SwipeAngularListModule });
SwipeAngularListModule.ɵinj = ɵɵdefineInjector({ factory: function SwipeAngularListModule_Factory(t) { return new (t || SwipeAngularListModule)(); }, providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        }
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SwipeAngularListModule, { declarations: [SwipeAngularListComponent, ItemListComponent], imports: [CommonModule], exports: [SwipeAngularListComponent, ItemListComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwipeAngularListModule, [{
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

/*
 * Public API Surface of swipe-angular-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HammerConfig, ItemListComponent, SwipeAngularListComponent, SwipeAngularListModule, SwipeAngularListService };
//# sourceMappingURL=swipe-angular-list-rtl.js.map
