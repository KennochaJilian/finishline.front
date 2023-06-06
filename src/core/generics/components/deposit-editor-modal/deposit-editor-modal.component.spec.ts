import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositEditorModalComponent } from './deposit-editor-modal.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ProfileCardComponent} from "../../../../app/dashboard/profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../../../app/dashboard/classes/builders/profile-form.builder";

describe('DepositEditorModalComponent', () => {
  let component: DepositEditorModalComponent;
  let fixture: ComponentFixture<DepositEditorModalComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DepositEditorModalComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
