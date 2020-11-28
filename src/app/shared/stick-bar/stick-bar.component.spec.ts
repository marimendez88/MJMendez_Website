import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickBarComponent } from './stick-bar.component';

describe('StickBarComponent', () => {
  let component: StickBarComponent;
  let fixture: ComponentFixture<StickBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
