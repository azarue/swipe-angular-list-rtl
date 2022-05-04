import { AfterViewInit, ElementRef, EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { SwipeServiceService } from '../swipe-service.service';
import * as ɵngcc0 from '@angular/core';
export declare class ItemListComponent implements AfterViewInit {
    private swService;
    alive: boolean;
    result: boolean;
    selfElement: any;
    idElement: any;
    inside: {
        id: any;
        title: '';
        subTitle: '';
        mark: false;
    };
    disabledMark: boolean;
    showMark: boolean;
    rtl: boolean;
    markColor: string;
    itemClass: string;
    defaultEdit: TemplateRef<any>;
    defaultTrash: TemplateRef<any>;
    defaultMark: TemplateRef<any>;
    defaultNotMark: TemplateRef<any>;
    defaultCustom: TemplateRef<any>;
    customTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    trashTemplate: TemplateRef<any>;
    markTemplate: TemplateRef<any>;
    notMarkTemplate: TemplateRef<any>;
    callback: EventEmitter<any>;
    swClick: EventEmitter<any>;
    viewContainerEdit: ViewContainerRef;
    viewContainerTrash: ViewContainerRef;
    viewContainerMark: ViewContainerRef;
    viewContainerCustom: ViewContainerRef;
    clickOut(event: any): void;
    constructor(elRef: ElementRef, swService: SwipeServiceService);
    private random;
    private getParent;
    swipeleft: (res: any) => void;
    swiperight: (res: any) => void;
    clickItem: (a: any) => void;
    action: (opt?: string) => void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ItemListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ItemListComponent, "sw-item-list", never, { "disabledMark": "disable-mark"; "showMark": "show-mark"; "rtl": "rtl"; "markColor": "mark-color"; "itemClass": "item-class"; "inside": "inside"; "customTemplate": "customTemplate"; "editTemplate": "editTemplate"; "trashTemplate": "trashTemplate"; "markTemplate": "markTemplate"; "notMarkTemplate": "notMarkTemplate"; }, { "callback": "callback"; "swClick": "swClick"; }, never, never>;
}

//# sourceMappingURL=item-list.component.d.ts.map