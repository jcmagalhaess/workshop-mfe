import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaCapitalComponent } from './chamada-capital.component';

describe('ChamadaCapitalComponent', () => {
  let component: ChamadaCapitalComponent;
  let fixture: ComponentFixture<ChamadaCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
