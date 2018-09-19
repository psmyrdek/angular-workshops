import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingDetailsEditFormComponent } from './posting-details-edit-form.component';

describe('PostingDetailsEditFormComponent', () => {
  let component: PostingDetailsEditFormComponent;
  let fixture: ComponentFixture<PostingDetailsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingDetailsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingDetailsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
