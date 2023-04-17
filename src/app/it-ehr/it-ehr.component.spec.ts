import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEHRComponent } from './it-ehr.component';

describe('ItEHRComponent', () => {
  let component: ItEHRComponent;
  let fixture: ComponentFixture<ItEHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItEHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItEHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
