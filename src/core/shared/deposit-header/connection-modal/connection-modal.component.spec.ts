import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionModalComponent } from './connection-modal.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {ConnectionFormBuilder} from "../builders/connection-form.builder";
import {ResetPasswordFormBuilder} from "../builders/reset-password-form.builder";

describe('ConnectionModalComponent', () => {
  let component: ConnectionModalComponent;
  let fixture: ComponentFixture<ConnectionModalComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(ConnectionModalComponent);
    tb.providers.push(ConnectionFormBuilder, ResetPasswordFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(ConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
