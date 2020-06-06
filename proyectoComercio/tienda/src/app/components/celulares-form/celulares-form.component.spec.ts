import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesFormComponent } from './celulares-form.component';

describe('CelularesFormComponent', () => {
  let component: CelularesFormComponent;
  let fixture: ComponentFixture<CelularesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
