import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiemnComponent } from './experiemn.component';

describe('ExperiemnComponent', () => {
  let component: ExperiemnComponent;
  let fixture: ComponentFixture<ExperiemnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiemnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiemnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
