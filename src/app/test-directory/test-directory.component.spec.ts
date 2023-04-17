import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectoryComponent } from './test-directory.component';

describe('TestDirectoryComponent', () => {
  let component: TestDirectoryComponent;
  let fixture: ComponentFixture<TestDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
