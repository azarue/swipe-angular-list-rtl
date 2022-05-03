import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../swipe-service.service";
import * as i2 from "@angular/common";
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
    i0.ɵɵtext(0, " edit ");
} }
function ItemListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " trash ");
} }
function ItemListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
function ItemListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
function ItemListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r9.idElement);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r9.inside == null ? null : ctx_r9.inside.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", ctx_r9.idElement);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.inside == null ? null : ctx_r9.inside.subTitle);
} }
function ItemListComponent_div_12_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function ItemListComponent_div_12_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.action("edit"); });
    i0.ɵɵtemplate(1, ItemListComponent_div_12_ng_template_1_Template, 0, 0, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} }
function ItemListComponent_div_13_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function ItemListComponent_div_13_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.action("trash"); });
    i0.ɵɵtemplate(1, ItemListComponent_div_13_ng_template_1_Template, 0, 0, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} }
function ItemListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementContainer(1, null, 22);
    i0.ɵɵelementEnd();
} }
function ItemListComponent_div_17_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, ItemListComponent_div_17_ng_template_1_Template, 0, 0, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r13.idElement);
} }
function ItemListComponent_div_18_ng_template_1_Template(rf, ctx) { }
function ItemListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ItemListComponent_div_18_ng_template_1_Template, 0, 0, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} }
const _c9 = function (a0) { return { "active": a0 }; };
const _c10 = function (a0) { return { "swipe": a0 }; };
const _c11 = function (a0, a1) { return { "swipe-w-90": a0, "swipe-w-100": a1 }; };
export class ItemListComponent {
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
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SwipeServiceService)); };
ItemListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ItemListComponent, selectors: [["sw-item-list"]], viewQuery: function ItemListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
        i0.ɵɵviewQuery(_c3, true);
        i0.ɵɵviewQuery(_c4, true);
        i0.ɵɵviewQuery(_c5, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c6, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c7, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c8, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultEdit = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultTrash = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultMark = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultNotMark = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultCustom = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerEdit = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerTrash = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerMark = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerCustom = _t.first);
    } }, hostBindings: function ItemListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ItemListComponent_click_HostBindingHandler($event) { return ctx.clickOut($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { inside: "inside", disabledMark: ["disable-mark", "disabledMark"], showMark: ["show-mark", "showMark"], rtl: "rtl", itemClass: ["item-class", "itemClass"], customTemplate: "customTemplate", editTemplate: "editTemplate", trashTemplate: "trashTemplate", markTemplate: "markTemplate", notMarkTemplate: "notMarkTemplate" }, outputs: { callback: "callback", swClick: "swClick" }, decls: 20, vars: 29, consts: [[3, "swipeleft", "swiperight", "swipe"], ["defaultEdit", ""], ["defaultTrash", ""], ["defaultMark", ""], ["defaultNotMark", ""], ["defaultCustom", ""], [1, "options-btn", "swipe-d-flex", "justify-content-between", 3, "ngClass", "id"], ["class", "option-list", 3, "click", 4, "ngIf"], [1, "list-swipe", "swipe-d-flex", 3, "ngClass", "id"], ["class", "swipe-w-10", 4, "ngIf"], [3, "ngClass", "click"], [3, "id", 4, "ngIf"], [4, "ngIf"], [1, "mark"], [1, "yes-marker"], [1, "not-marker"], [1, "text", "truncate", 3, "id"], [1, "small", "truncate", 3, "id"], [1, "option-list", 3, "click"], ["viewContainerEdit", ""], ["viewContainerTrash", ""], [1, "swipe-w-10"], ["viewContainerMark", ""], [3, "id"], ["viewContainerCustom", ""]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("swipeleft", function ItemListComponent_Template_div_swipeleft_0_listener($event) { return ctx.swipeleft($event); })("swiperight", function ItemListComponent_Template_div_swiperight_0_listener($event) { return ctx.swiperight($event); })("swipe", function ItemListComponent_Template_div_swipe_0_listener($event) { return ctx.rtl && ctx.rtl == true ? ctx.swiperight($event) : ctx.swipeleft($event); });
        i0.ɵɵtemplate(1, ItemListComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ItemListComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ItemListComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, ItemListComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, ItemListComponent_ng_template_9_Template, 4, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(11, "div", 6);
        i0.ɵɵtemplate(12, ItemListComponent_div_12_Template, 3, 0, "div", 7);
        i0.ɵɵtemplate(13, ItemListComponent_div_13_Template, 3, 0, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵtemplate(15, ItemListComponent_div_15_Template, 3, 0, "div", 9);
        i0.ɵɵelementStart(16, "div", 10);
        i0.ɵɵlistener("click", function ItemListComponent_Template_div_click_16_listener($event) { return ctx.clickItem($event); });
        i0.ɵɵtemplate(17, ItemListComponent_div_17_Template, 3, 1, "div", 11);
        i0.ɵɵtemplate(18, ItemListComponent_div_18_Template, 3, 0, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.itemClass);
        i0.ɵɵadvance(11);
        i0.ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
        i0.ɵɵpropertyInterpolate("id", ctx.idElement);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c9, ctx.result));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.editTemplate !== null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.trashTemplate !== null);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
        i0.ɵɵpropertyInterpolate("id", ctx.idElement);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c10, ctx.result));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMark);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(26, _c11, ctx.showMark, !ctx.showMark));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.customTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.customTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.rtl && ctx.rtl == true ? "rtl" : "");
    } }, directives: [i2.NgClass, i2.NgIf], styles: ["[_nghost-%COMP%]{display:block;font-family:Arial,serif}.not-marker[_ngcontent-%COMP%]{background:red}.not-marker[_ngcontent-%COMP%], .yes-marker[_ngcontent-%COMP%]{border-radius:3rem;height:1rem;width:1rem}.yes-marker[_ngcontent-%COMP%]{background:green}.swipe-d-flex[_ngcontent-%COMP%]{display:flex}.swipe-w-10[_ngcontent-%COMP%]{width:10%}.swipe-w-100[_ngcontent-%COMP%]{width:100%}.swipe-w-90[_ngcontent-%COMP%]{width:90%}.options-btn.active[_ngcontent-%COMP%]{display:flex;transform:translate(66vw)}.list-swipe[_ngcontent-%COMP%]{border-radius:.25em;box-shadow:0 5px 7px hsla(0,0%,71%,.18);font-size:16px;font-weight:500;line-height:19px;margin:.75rem 0;padding:.75em;z-index:9}.list-swipe[_ngcontent-%COMP%], .swipe[_ngcontent-%COMP%]{transition:all .1s ease-out}.swipe[_ngcontent-%COMP%]{box-shadow:6px 0 7px hsla(0,0%,71%,.31);transform:translate(-29vw)}.options-btn[_ngcontent-%COMP%]{display:none;padding:.5rem 0;position:absolute;transform:translate(100vw);width:28vw}.list-swipe[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#313131}.list-swipe[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{color:#9b9b9b;font-size:16px;font-weight:500;line-height:19px;padding:1rem 0 0}.list-swipe[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%]{background:#fff;border-right:.175rem solid #f96060;height:2rem;margin-right:-.3rem;margin-top:.75rem}.option-list[_ngcontent-%COMP%]{border-left-width:0;border-right:1px solid rgba(0,0,0,.1);line-height:3.75rem;min-height:3.75rem;text-align:center;width:100%}.option-list[_ngcontent-%COMP%]:last-child{border-right:0}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.swipe-d-flex.rtl[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse}.rtl[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]:last-child{border-left:0}.rtl[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.1);border-right-width:0}.list-swipe[_ngcontent-%COMP%]   .mark.rtl[_ngcontent-%COMP%]{background:#fff;border-left:.175rem solid #f96060;border-right:none;height:2rem;margin-left:-.3rem;margin-right:.3rem;margin-top:.75rem}.swipe.rtl[_ngcontent-%COMP%]{box-shadow:-6px 0 7px hsla(0,0%,71%,.31);transform:translate(29vw);transition:all .1s ease-out}.options-btn.active.rtl[_ngcontent-%COMP%]{display:flex;transform:translate(0)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ItemListComponent, [{
        type: Component,
        args: [{
                selector: 'sw-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.css']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.SwipeServiceService }]; }, { inside: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXphcnVlL1Byb2plY3RzL1NlYXRiYWNrKy9zaHR1dC9zaHR1dC9wcm9qZWN0cy9zd2lwZS1hbmd1bGFyLWxpc3QtcnRsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC50cyIsImxpYi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFBRSxnQkFBZ0IsRUFDNUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDVG5CLHNCQUNGOzs7SUFFRSx1QkFDRjs7O0lBRUUsMEJBQThCOzs7SUFHOUIsMEJBQThCOzs7SUFJOUIsK0JBQW1EO0lBQUEsWUFBbUI7SUFBQSxpQkFBTTtJQUM1RSwrQkFBb0Q7SUFBQSxZQUFvQjtJQUFBLGlCQUFNOzs7SUFEekUsZ0RBQXVCO0lBQXVCLGVBQW1CO0lBQW5CLGtGQUFtQjtJQUNqRSxlQUF1QjtJQUF2QixnREFBdUI7SUFBd0IsZUFBb0I7SUFBcEIsMkVBQW9COzs7OztJQU94RSwrQkFDRTtJQURHLDZLQUFnQixNQUFNLEtBQUU7SUFDM0IsMkhBQWdEO0lBQ2xELGlCQUFNOzs7OztJQUNOLCtCQUNFO0lBREcsNktBQWdCLE9BQU8sS0FBRTtJQUM1QiwySEFBaUQ7SUFDbkQsaUJBQU07OztJQUlOLCtCQUNFO0lBQUEsa0NBQWdEO0lBQ2xELGlCQUFNOzs7O0lBR0osK0JBQ0U7SUFBQSwySEFDQTtJQUNGLGlCQUFNOzs7SUFIc0IsaURBQXVCOzs7O0lBS25ELDJCQUNFO0lBQUEsMkhBQWtDO0lBQ3BDLGlCQUFNOzs7OztBRHpCWixNQUFNLE9BQU8saUJBQWlCO0lBb0U1QixZQUFZLEtBQWlCLEVBQVUsU0FBOEI7UUFB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QUMsY0FBYztZQUVHLGFBQWE7a0JBQXBDLEtBQUs7bUJBQUMsZUFBZTtZQUVDLFlBQVk7a0JBQWxDLEtBQUs7bUJBQUMsY0FBYztZQUVLLGVBQWU7a0JBQXhDLEtBQUs7bUJBQUMsaUJBQWlCO1lBR3hCLFFBQVE7a0JBRFAsTUFBTTtZQUlQLE9BQU87a0JBRE4sTUFBTTtZQUlQLGlCQUFpQjtrQkFEaEIsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBSXZFLGtCQUFrQjtrQkFEakIsU0FBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBSXhFLGlCQUFpQjtrQkFEaEIsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBSXZFLG1CQUFtQjtrQkFEbEIsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBTXpFLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3dpcGVTZXJ2aWNlU2VydmljZX0gZnJvbSAnLi4vc3dpcGUtc2VydmljZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ctaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgYWxpdmUgPSB0cnVlO1xuICByZXN1bHQ6IGJvb2xlYW47XG4gIHNlbGZFbGVtZW50ID0gbnVsbDtcbiAgaWRFbGVtZW50ID0gbnVsbDtcbiAgQElucHV0KCkgaW5zaWRlOiB7XG4gICAgaWQsXG4gICAgdGl0bGU6ICcnLFxuICAgIHN1YlRpdGxlOiAnJyxcbiAgICBtYXJrOiBmYWxzZSxcbiAgfTtcblxuICBASW5wdXQoJ2Rpc2FibGUtbWFyaycpIGRpc2FibGVkTWFyayA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnc2hvdy1tYXJrJykgc2hvd01hcmsgPSBmYWxzZTtcbiAgQElucHV0KCdydGwnKSBydGwgPSBmYWxzZTtcbiAgQElucHV0KCdpdGVtLWNsYXNzJykgaXRlbUNsYXNzID0gJyc7XG4gXG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEVkaXQnKSBkZWZhdWx0RWRpdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJhc2gnKSBkZWZhdWx0VHJhc2g6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0TWFyaycpIGRlZmF1bHRNYXJrOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBAdHMtaWdub3JlXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHROb3RNYXJrJykgZGVmYXVsdE5vdE1hcms6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEN1c3RvbScpIGRlZmF1bHRDdXN0b206IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2N1c3RvbVRlbXBsYXRlJykgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdlZGl0VGVtcGxhdGUnKSBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCd0cmFzaFRlbXBsYXRlJykgdHJhc2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21hcmtUZW1wbGF0ZScpIG1hcmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ25vdE1hcmtUZW1wbGF0ZScpIG5vdE1hcmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgc3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJFZGl0Jywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICB2aWV3Q29udGFpbmVyRWRpdDogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyVHJhc2gnLCB7c3RhdGljOiBmYWxzZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHZpZXdDb250YWluZXJUcmFzaDogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyTWFyaycsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgdmlld0NvbnRhaW5lck1hcms6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQFZpZXdDaGlsZCgndmlld0NvbnRhaW5lckN1c3RvbScsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgdmlld0NvbnRhaW5lckN1c3RvbTogVmlld0NvbnRhaW5lclJlZjtcblxuICAvLyBAVmlld0NoaWxkKCd0cGwnKSB0cGw6IFRlbXBsYXRlUmVmPGFueT5cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrT3V0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNlbGZFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3dTZXJ2aWNlOiBTd2lwZVNlcnZpY2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZWxmRWxlbWVudCA9IGVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pZEVsZW1lbnQgPSBgbGlzdC1zd2lwZS0ke3RoaXMucmFuZG9tKCl9YDtcbiAgICB0aGlzLnNlbGZFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRoaXMuaWRFbGVtZW50KTtcbiAgICB0aGlzLnNlbGZFbGVtZW50LmlkID0gdGhpcy5pZEVsZW1lbnQ7XG4gICAgdGhpcy5zd1NlcnZpY2Uuc3dpcGVPYnNlcnZlci5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICBpZiAoYSAhPT0gdGhpcy5zZWxmRWxlbWVudC5pZCkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByYW5kb20gPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xuICB9O1xuXG4gIHByaXZhdGUgZ2V0UGFyZW50ID0gKGFyciA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGFyci5tYXAoYSA9PiB7XG4gICAgICAgIGlmICgvbGlzdC1zd2lwZS8udGVzdChhLmlkKSkge1xuICAgICAgICAgIHJlc29sdmUoYS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgcHVibGljIHN3aXBlbGVmdCA9IChyZXM6YW55KSA9PiB7XG4gICAgdGhpcy5zd1NlcnZpY2UuY2xvc2VBbGwodGhpcy5zZWxmRWxlbWVudC5pZCk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZE1hcmspIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IChyZXMuZGVsdGFYIDwgMCk7XG4gICAgICAgIH1cbiAgfVxuICBwdWJsaWMgc3dpcGVyaWdodCA9IChyZXM6YW55KSA9PiB7XG4gICAgdGhpcy5zd1NlcnZpY2UuY2xvc2VBbGwodGhpcy5zZWxmRWxlbWVudC5pZCk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZE1hcmspIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IChyZXMuZGVsdGFYID4gMCk7XG4gICAgICAgIH1cbiAgfVxuXG4gIGNsaWNrSXRlbSA9IChhOiBhbnkpID0+IHRoaXMuc3dDbGljay5lbWl0KGEpO1xuXG4gIGFjdGlvbiA9IChvcHQgPSAnJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xuICAgICAgY29uc3Qge2lkfSA9IHRoaXMuaW5zaWRlO1xuICAgICAgaWYgKG9wdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbGxiYWNrLmVtaXQoe2FjdGlvbjogJ2VkaXQnLCB2YWx1ZTogaWR9KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0ID09PSAndHJhc2gnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suZW1pdCh7YWN0aW9uOiAndHJhc2gnLCB2YWx1ZTogaWR9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGViZXMgZGVmaW5pciBJRCBkZSBlZGl0LCB5IHRyYXNoJyk7XG4gICAgfVxuICB9O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93TWFyaykge1xuICAgICAgaWYgKHRoaXMuaW5zaWRlLm1hcmsgJiYgIXRoaXMubWFya1RlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5kZWZhdWx0TWFyay5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lck1hcmsuaW5zZXJ0KHZpZXdNYXJrKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnNpZGUubWFyayAmJiB0aGlzLm1hcmtUZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB2aWV3TWFyayA9IHRoaXMubWFya1RlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaW5zaWRlLm1hcmsgJiYgIXRoaXMubm90TWFya1RlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5kZWZhdWx0Tm90TWFyay5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lck1hcmsuaW5zZXJ0KHZpZXdNYXJrKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW5zaWRlLm1hcmsgJiYgdGhpcy5ub3RNYXJrVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLm5vdE1hcmtUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lck1hcmsuaW5zZXJ0KHZpZXdNYXJrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0VGVtcGxhdGUpIHtcbiAgICAgIGNvbnN0IHZpZXdFZGl0ID0gdGhpcy5lZGl0VGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgaWYgKHRoaXMudmlld0NvbnRhaW5lckVkaXQpIHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyRWRpdC5pbnNlcnQodmlld0VkaXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0VGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZpZXdFZGl0ID0gdGhpcy5kZWZhdWx0RWRpdC5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXJFZGl0Lmluc2VydCh2aWV3RWRpdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhc2hUZW1wbGF0ZSkge1xuICAgICAgY29uc3Qgdmlld1RyYXNoID0gdGhpcy50cmFzaFRlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXJUcmFzaCkge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJUcmFzaC5pbnNlcnQodmlld1RyYXNoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhc2hUZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgdmlld1RyYXNoID0gdGhpcy5kZWZhdWx0VHJhc2guY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyVHJhc2guaW5zZXJ0KHZpZXdUcmFzaCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZSkgeyAvLyBTaSB0aWVuZVxuICAgICAgICBjb25zdCBkYXRhSW5zaWRlID0gey4uLnRoaXMuaW5zaWRlLCAuLi57dG91Y2g6IHRoaXMuc2VsZkVsZW1lbnQuaWR9fTtcbiAgICAgICAgY29uc3Qgdmlld0N1c3RvbVRlbXBsYXRlID0gdGhpcy5jdXN0b21UZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcoe1xuICAgICAgICAgIGl0ZW06IGRhdGFJbnNpZGUsXG4gICAgICAgICAgaWQ6IHRoaXMuc2VsZkVsZW1lbnQuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHZpZXdDdXN0b21UZW1wbGF0ZSAmJiB2aWV3Q3VzdG9tVGVtcGxhdGUucm9vdE5vZGVzKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHZpZXdDdXN0b21UZW1wbGF0ZS5yb290Tm9kZXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgZS5pZCA9IHRoaXMuc2VsZkVsZW1lbnQuaWQ7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzBdLmNoaWxkTm9kZXMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICBiLmlkID0gdGhpcy5zZWxmRWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBpZiAoYi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGIuY2hpbGRyZW5bMF0uaWQgPSB0aGlzLnNlbGZFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlld0N1c3RvbVRlbXBsYXRlKSB7XG4gICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyQ3VzdG9tLmluc2VydCh2aWV3Q3VzdG9tVGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2aWV3Q3VzdG9tVGVtcGxhdGUgPSB0aGlzLmRlZmF1bHRDdXN0b20uY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJDdXN0b20uaW5zZXJ0KHZpZXdDdXN0b21UZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSwgNTApO1xuXG5cbiAgICAvLyBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuc2VsZkVsZW1lbnQpO1xuXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInt7aXRlbUNsYXNzfX1cIiAoc3dpcGVsZWZ0KT1cInN3aXBlbGVmdCgkZXZlbnQpIFwiIChzd2lwZXJpZ2h0KT1cInN3aXBlcmlnaHQoJGV2ZW50KVwiIChzd2lwZSk9XCJydGwgJiYgcnRsID09IHRydWUgPyBzd2lwZXJpZ2h0KCRldmVudCkgOiBzd2lwZWxlZnQoJGV2ZW50KVwiID5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RWRpdD5cbiAgICBlZGl0XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRyYXNoPlxuICAgIHRyYXNoXG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdE1hcms+XG4gICAgPGRpdiBjbGFzcz1cInllcy1tYXJrZXJcIj48L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Tm90TWFyaz5cbiAgICA8ZGl2IGNsYXNzPVwibm90LW1hcmtlclwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEN1c3RvbT5cbiAgICA8ZGl2IGRhdGEtaWQ9XCJ7e2lkRWxlbWVudH19XCIgY2xhc3M9XCJ0ZXh0IHRydW5jYXRlXCI+e3tpbnNpZGU/LnRpdGxlIH19IDwvZGl2PlxuICAgIDxkaXYgZGF0YS1pZD1cInt7aWRFbGVtZW50fX1cIiBjbGFzcz1cInNtYWxsIHRydW5jYXRlXCI+e3tpbnNpZGU/LnN1YlRpdGxlfX08L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiBcblxuICA8ZGl2IFtuZ0NsYXNzXT1cInsnYWN0aXZlJzoocmVzdWx0KX1cIiBkYXRhLWlkPVwie3tpZEVsZW1lbnR9fVwiXG4gICAgICAgY2xhc3M9XCIgb3B0aW9ucy1idG4gc3dpcGUtZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICBjbGFzcz1cInt7cnRsICYmIHJ0bCA9PSB0cnVlID8gJ3J0bCcgOiAnJ319XCI+XG4gICAgPGRpdiAoY2xpY2spPVwiYWN0aW9uKCdlZGl0JylcIiBjbGFzcz1cIm9wdGlvbi1saXN0XCIgKm5nSWY9XCJlZGl0VGVtcGxhdGUgIT09IG51bGxcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtc2hvdz1cInNob3dcIiAjdmlld0NvbnRhaW5lckVkaXQ+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IChjbGljayk9XCJhY3Rpb24oJ3RyYXNoJylcIiBjbGFzcz1cIm9wdGlvbi1saXN0XCIgKm5nSWY9XCJ0cmFzaFRlbXBsYXRlICE9PSBudWxsXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbGV0LXNob3c9XCJzaG93XCIgI3ZpZXdDb250YWluZXJUcmFzaD48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBbbmdDbGFzc109XCJ7J3N3aXBlJzoocmVzdWx0KX1cIiBjbGFzcz1cInt7cnRsICYmIHJ0bCA9PSB0cnVlID8gJ3J0bCcgOiAnJ319XCIgZGF0YS1pZD1cInt7aWRFbGVtZW50fX1cIiBjbGFzcz1cImxpc3Qtc3dpcGUgc3dpcGUtZC1mbGV4XCI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic2hvd01hcmtcIiBjbGFzcz1cInN3aXBlLXctMTBcIj5cbiAgICAgIDxuZy1jb250YWluZXIgI3ZpZXdDb250YWluZXJNYXJrPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAoY2xpY2spPVwiY2xpY2tJdGVtKCRldmVudClcIiBbbmdDbGFzc109XCJ7J3N3aXBlLXctOTAnOnNob3dNYXJrLCAnc3dpcGUtdy0xMDAnOiFzaG93TWFya31cIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjdXN0b21UZW1wbGF0ZVwiIGRhdGEtaWQ9XCJ7e2lkRWxlbWVudH19XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlld0NvbnRhaW5lckN1c3RvbT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWN1c3RvbVRlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdmlld0NvbnRhaW5lckN1c3RvbT48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFya1wiIGNsYXNzPVwie3tydGwgJiYgcnRsID09IHRydWU/ICdydGwnIDogJyd9fVwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19