import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaCapitalIndexComponent } from './chamada-capital-index.component';

describe('ChamadaCapitalIndexComponent', () => {
  let component: ChamadaCapitalIndexComponent;
  let fixture: ComponentFixture<ChamadaCapitalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadaCapitalIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaCapitalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
