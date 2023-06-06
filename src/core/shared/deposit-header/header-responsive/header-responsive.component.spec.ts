import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResponsiveComponent } from './header-responsive.component';
import {DEPOSIT_TEST_BED} from "../../../../deposit.testbed";
import {PlansComponent} from "../../../../app/home/sections/plans/plans.component";

describe('HeaderResponsiveComponent', () => {
  let component: HeaderResponsiveComponent;
  let fixture: ComponentFixture<HeaderResponsiveComponent>;

  beforeEach(async () => {
    const tb = DEPOSIT_TEST_BED.forComponent(PlansComponent);
    await TestBed.configureTestingModule(tb)
      .compileComponents();

    fixture = TestBed.createComponent(HeaderResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
