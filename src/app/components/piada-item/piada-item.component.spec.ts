import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiadaItemComponent } from './piada-item.component';

describe('PiadaItemComponent', () => {
  let component: PiadaItemComponent;
  let fixture: ComponentFixture<PiadaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiadaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiadaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
