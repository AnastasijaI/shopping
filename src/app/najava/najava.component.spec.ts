import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NajavaComponent } from './najava.component';

describe('NajavaComponent', () => {
  let component: NajavaComponent;
  let fixture: ComponentFixture<NajavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NajavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NajavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
