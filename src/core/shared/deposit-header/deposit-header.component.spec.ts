import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositHeaderComponent } from './deposit-header.component';
import {HomeComponent} from "../../../app/home/home.component";
describe('DepositHeaderComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
