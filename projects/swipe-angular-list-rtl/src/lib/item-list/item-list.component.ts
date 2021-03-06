import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {SwipeServiceService} from '../swipe-service.service';

@Component({
  selector: 'sw-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements AfterViewInit {
  alive = true;
  result: boolean;
  selfElement = null;
  idElement = null;
  @Input() inside: {
    id,
    title: '',
    subTitle: '',
    mark: false,
  };

  @Input('disable-mark') disabledMark = false;

  @Input('show-mark') showMark = false;
  @Input('rtl') rtl = false;
  @Input('mark-color') markColor = "#F96060";
  @Input('item-class') itemClass = '';
 
  // @ts-ignore
  @ViewChild('defaultEdit') defaultEdit: TemplateRef<any>;
  // @ts-ignore
  @ViewChild('defaultTrash') defaultTrash: TemplateRef<any>;

  // @ts-ignore
  @ViewChild('defaultMark') defaultMark: TemplateRef<any>;
  // @ts-ignore
  @ViewChild('defaultNotMark') defaultNotMark: TemplateRef<any>;
  // @ts-ignore
  @ViewChild('defaultCustom') defaultCustom: TemplateRef<any>;

  // tslint:disable-next-line:no-input-rename
  @Input('customTemplate') customTemplate: TemplateRef<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('editTemplate') editTemplate: TemplateRef<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('trashTemplate') trashTemplate: TemplateRef<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('markTemplate') markTemplate: TemplateRef<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('notMarkTemplate') notMarkTemplate: TemplateRef<any>;

  @Output()
  callback = new EventEmitter<any>();

  @Output()
  swClick = new EventEmitter<any>();

  @ViewChild('viewContainerEdit', {static: false, read: ViewContainerRef})
  viewContainerEdit: ViewContainerRef;

  @ViewChild('viewContainerTrash', {static: false, read: ViewContainerRef})
  viewContainerTrash: ViewContainerRef;

  @ViewChild('viewContainerMark', {static: false, read: ViewContainerRef})
  viewContainerMark: ViewContainerRef;

  @ViewChild('viewContainerCustom', {static: false, read: ViewContainerRef})
  viewContainerCustom: ViewContainerRef;

  // @ViewChild('tpl') tpl: TemplateRef<any>

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.selfElement.contains(event.target)) {
      this.result = false;
    }
  }

  constructor(elRef: ElementRef, private swService: SwipeServiceService) {
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

  private random = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  private getParent = (arr = []) => {
    return new Promise((resolve, reject) => {
      arr.map(a => {
        if (/list-swipe/.test(a.id)) {
          resolve(a.id);
        }
      });
    });

  };

  public swipeleft = (res:any) => {
    this.swService.closeAll(this.selfElement.id);
        if (!this.disabledMark) {
          this.result = (res.deltaX < 0);
        }
  }
  public swiperight = (res:any) => {
    this.swService.closeAll(this.selfElement.id);
        if (!this.disabledMark) {
          this.result = (res.deltaX > 0);
        }
  }

  clickItem = (a: any) => this.swClick.emit(a);

  action = (opt = '') => {
    try {
      this.result = false;
      const {id} = this.inside;
      if (opt === 'edit') {
        
        this.callback.emit({action: 'edit', value: id});
      } else if (opt === 'trash') {
        this.callback.emit({action: 'trash', value: id});
      }
    } catch (e) {
      console.log('Debes definir ID de edit, y trash');
    }
  };

  ngAfterViewInit(): void {
    if (this.showMark) {
      if (this.inside.mark && !this.markTemplate) {
        const viewMark = this.defaultMark.createEmbeddedView(null);
        this.viewContainerMark.insert(viewMark);
      } else if (this.inside.mark && this.markTemplate) {
        const viewMark = this.markTemplate.createEmbeddedView(null);
        this.viewContainerMark.insert(viewMark);
      }

      if (!this.inside.mark && !this.notMarkTemplate) {
        const viewMark = this.defaultNotMark.createEmbeddedView(null);
        this.viewContainerMark.insert(viewMark);
      } else if (!this.inside.mark && this.notMarkTemplate) {
        const viewMark = this.notMarkTemplate.createEmbeddedView(null);
        this.viewContainerMark.insert(viewMark);
      }
    }

    if (this.editTemplate) {
      const viewEdit = this.editTemplate.createEmbeddedView(null);
      if (this.viewContainerEdit) {
        this.viewContainerEdit.insert(viewEdit);
      }
    } else if (this.editTemplate !== null) {
      const viewEdit = this.defaultEdit.createEmbeddedView(null);
      this.viewContainerEdit.insert(viewEdit);
    }

    if (this.trashTemplate) {
      const viewTrash = this.trashTemplate.createEmbeddedView(null);
      if (this.viewContainerTrash) {
        this.viewContainerTrash.insert(viewTrash);
      }
    } else if (this.trashTemplate !== null) {
      const viewTrash = this.defaultTrash.createEmbeddedView(null);
      this.viewContainerTrash.insert(viewTrash);
    }

    setTimeout(() => {
      if (this.customTemplate) { // Si tiene
        const dataInside = {...this.inside, ...{touch: this.selfElement.id}};
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
      } else {
        const viewCustomTemplate = this.defaultCustom.createEmbeddedView(null);
        this.viewContainerCustom.insert(viewCustomTemplate);
      }
    }, 50);


    // const hammer = new Hammer(this.selfElement);

  }

}
