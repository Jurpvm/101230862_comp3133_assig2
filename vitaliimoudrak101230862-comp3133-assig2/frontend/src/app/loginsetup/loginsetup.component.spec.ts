import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsetupComponent } from './loginsetup.component';

describe('LoginsetupComponent', () => {
  let component: LoginsetupComponent;
  let fixture: ComponentFixture<LoginsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
