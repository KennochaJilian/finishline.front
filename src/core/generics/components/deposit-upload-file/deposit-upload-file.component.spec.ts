import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositUploadFileComponent } from './deposit-upload-file.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";

describe('DepositUploadFileComponent', () => {
  let component: DepositUploadFileComponent;
  let fixture: ComponentFixture<DepositUploadFileComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(DepositUploadFileComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(DepositUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
