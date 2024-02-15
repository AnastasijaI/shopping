import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovekeComponent } from './poveke.component';

describe('PovekeComponent', () => {
  let component: PovekeComponent;
  let fixture: ComponentFixture<PovekeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PovekeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PovekeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
