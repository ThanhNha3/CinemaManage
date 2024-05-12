import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflimComponent } from './addflim.component';

describe('AddflimComponent', () => {
  let component: AddflimComponent;
  let fixture: ComponentFixture<AddflimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddflimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
