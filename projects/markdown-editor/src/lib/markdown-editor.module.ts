import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule
  ],
  exports: [MarkdownEditorComponent]
})
export class MarkdownEditorModule { }
