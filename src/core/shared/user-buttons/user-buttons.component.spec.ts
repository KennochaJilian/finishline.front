import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButtonsComponent } from './user-buttons.component';
import {DEPOSIT_TEST_BED} from "../../../deposit.testbed";
import {ProfileCardComponent} from "../../../app/dashboard/profiles-dashboard/profile-card/profile-card.component";
import {ProfileFormBuilder} from "../../../app/dashboard/classes/builders/profile-form.builder";

describe('UserButtonsComponent', () => {
  let component: UserButtonsComponent;
  let fixture: ComponentFixture<UserButtonsComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(UserButtonsComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(UserButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
