import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaComponent } from './anketa.component';

describe('AnketaComponent', () => {
  let component: AnketaComponent;
  let fixture: ComponentFixture<AnketaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnketaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
