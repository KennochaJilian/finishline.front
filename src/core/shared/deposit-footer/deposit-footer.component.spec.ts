import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFooterComponent } from './deposit-footer.component';

describe('DepositFooterComponent', () => {
  let component: DepositFooterComponent;
  let fixture: ComponentFixture<DepositFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
