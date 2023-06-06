import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalComponent } from './register-modal.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {RegisterFormBuilder} from "../builders/register-form.builder";

describe('RegisterModalComponent', () => {
  let component: RegisterModalComponent;
  let fixture: ComponentFixture<RegisterModalComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(RegisterModalComponent);
    tb.providers.push(RegisterFormBuilder)
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(RegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
