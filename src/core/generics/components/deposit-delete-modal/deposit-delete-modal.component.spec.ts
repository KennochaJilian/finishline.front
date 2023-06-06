import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDeleteModalComponent } from './deposit-delete-modal.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ProfilesDashboardComponent} from "../../../../app/dashboard/profiles-dashboard/profiles-dashboard.component";

describe('DepositDeleteModalComponent', () => {
  let component: DepositDeleteModalComponent;
  let fixture: ComponentFixture<DepositDeleteModalComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DepositDeleteModalComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DepositDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
