import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingsListEntryComponent } from './postings-list-entry.component';

describe('PostingsListEntryComponent', () => {
  let component: PostingsListEntryComponent;
  let fixture: ComponentFixture<PostingsListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingsListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingsListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
