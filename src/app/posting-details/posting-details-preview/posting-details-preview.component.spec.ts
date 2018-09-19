import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingDetailsPreviewComponent } from './posting-details-preview.component';

describe('PostingDetailsPreviewComponent', () => {
  let component: PostingDetailsPreviewComponent;
  let fixture: ComponentFixture<PostingDetailsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingDetailsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingDetailsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
