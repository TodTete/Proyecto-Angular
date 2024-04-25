import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedsComponent } from './speeds.component';

describe('SpeedsComponent', () => {
  let component: SpeedsComponent;
  let fixture: ComponentFixture<SpeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
