import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-markdown-editor',
  template: `
    <p>
      markdown-editor works!
    </p>
  `,
  styles: []
})
export class MarkdownEditorComponent implements MatFormFieldControl<string>, ControlValueAccessor, OnInit, OnDestroy {

  static nextId = 0;

  stateChanges = new Subject<void>();
  id = `markdown-editor-${MarkdownEditorComponent.nextId++}`;
  ngControl: NgControl = null;
  focused = false;
  errorState: boolean;
  controlType = 'text';
  describedBy = '';

  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  private _value: string;

  constructor() { }

  ngOnInit() {
  }

  get value() {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }

  get empty() {
    return !this._value;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = value;
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.stateChanges.subscribe(() => fn());
  }

  registerOnTouched(fn: any): void {
    this.stateChanges.subscribe(() => fn());
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
