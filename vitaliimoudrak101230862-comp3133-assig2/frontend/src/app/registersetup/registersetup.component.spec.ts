import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersetupComponent } from './registersetup.component';

describe('RegistersetupComponent', () => {
  let component: RegistersetupComponent;
  let fixture: ComponentFixture<RegistersetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
