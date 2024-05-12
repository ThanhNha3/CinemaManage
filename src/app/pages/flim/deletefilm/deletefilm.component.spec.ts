import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefilmComponent } from './deletefilm.component';

describe('DeletefilmComponent', () => {
  let component: DeletefilmComponent;
  let fixture: ComponentFixture<DeletefilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletefilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
