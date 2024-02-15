import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvdelComponent } from './prvdel.component';

describe('PrvdelComponent', () => {
  let component: PrvdelComponent;
  let fixture: ComponentFixture<PrvdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrvdelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrvdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
