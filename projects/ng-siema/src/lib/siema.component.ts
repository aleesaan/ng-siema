import { Component, ChangeDetectionStrategy, AfterViewInit, Input, Output, EventEmitter, ViewChild, Renderer2, OnDestroy, ElementRef } from '@angular/core';
import Siema, { SiemaOptions } from 'siema';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'siema',
  templateUrl: './siema.component.html',
})
export class SiemaComponent implements AfterViewInit, OnDestroy {
  @Input()
  public enableArrows: boolean = false;

  @Input()
  public enableClickOutside: boolean = false;

  @Input()
  public enableEscape: boolean = false;

  @Input()
  public options: SiemaOptions;

  private slider: Siema;
  private defaultOptions: SiemaOptions = {
    perPage: 1,
    startIndex: 0,
    duration: 300,
  };
  private arrowleftListener: Function;
  private arrowrightListener: Function;
  private escapeListener: Function;
  private mousedownListener: Function;

  @ViewChild('siema')
  private siema: ElementRef;

  @Output()
  private close: EventEmitter<void> = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.slider = new Siema({
      ...this.defaultOptions,
      ...this.options,
      selector: '.siema',
    });

    this.initEventListeners();
  }

  public ngOnDestroy(): void {
    this.arrowleftListener();
    this.arrowrightListener();
    this.escapeListener();
    this.mousedownListener();
  }

  private initEventListeners(): void {
    if (this.enableArrows) {
      this.arrowleftListener = this.renderer.listen('document', 'keydown.arrowleft', () => {
        this.slider.prev();
      });
      this.arrowrightListener = this.renderer.listen('document', 'keydown.arrowright', () => {
        this.slider.next();
      });
    }

    if (this.enableEscape) {
      this.escapeListener = this.renderer.listen('document', 'keydown.escape', () => {
        this.close.emit();
      });
    }

    if (this.enableClickOutside) {
      this.mousedownListener = this.renderer.listen('document', 'mousedown', (event: Event) => {
        if (!this.siema.nativeElement.contains(event.target)) {
          this.close.emit();
        }
      });
    }
  }
}
