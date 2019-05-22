import { TestBed } from '@angular/core/testing';

import { MarkdownEditorService } from './markdown-editor.service';

describe('MarkdownEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkdownEditorService = TestBed.get(MarkdownEditorService);
    expect(service).toBeTruthy();
  });
});
