import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProcutoComponent } from './ingresar-procuto.component';

describe('IngresarProcutoComponent', () => {
  let component: IngresarProcutoComponent;
  let fixture: ComponentFixture<IngresarProcutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarProcutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarProcutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
