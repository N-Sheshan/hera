import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesServicedComponent } from './specialties-serviced.component';

describe('SpecialtiesServicedComponent', () => {
  let component: SpecialtiesServicedComponent;
  let fixture: ComponentFixture<SpecialtiesServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtiesServicedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialtiesServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
