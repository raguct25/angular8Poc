import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpIteractionComponent } from './cmp-iteraction.component';

describe('CmpIteractionComponent', () => {
  let component: CmpIteractionComponent;
  let fixture: ComponentFixture<CmpIteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpIteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpIteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
