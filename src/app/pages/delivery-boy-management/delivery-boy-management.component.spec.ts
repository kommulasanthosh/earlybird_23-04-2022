import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoyManagementComponent } from './delivery-boy-management.component';

describe('DeliveryBoyManagementComponent', () => {
  let component: DeliveryBoyManagementComponent;
  let fixture: ComponentFixture<DeliveryBoyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryBoyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBoyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
