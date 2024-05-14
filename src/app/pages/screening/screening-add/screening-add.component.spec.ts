import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningAddComponent } from './screening-add.component';

describe('ScreeningAddComponent', () => {
  let component: ScreeningAddComponent;
  let fixture: ComponentFixture<ScreeningAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
