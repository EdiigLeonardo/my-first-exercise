import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRirComponent } from './button-rir.component';

describe('ButtonRirComponent', () => {
  let component: ButtonRirComponent;
  let fixture: ComponentFixture<ButtonRirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
