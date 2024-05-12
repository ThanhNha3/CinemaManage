import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlimComponent } from './flim.component';

describe('FlimComponent', () => {
  let component: FlimComponent;
  let fixture: ComponentFixture<FlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
