import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInsuranceComponent } from './your-insurance.component';

describe('YourInsuranceComponent', () => {
  let component: YourInsuranceComponent;
  let fixture: ComponentFixture<YourInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
