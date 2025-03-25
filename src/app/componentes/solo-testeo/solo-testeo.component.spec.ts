import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloTesteoComponent } from './solo-testeo.component';

describe('SoloTesteoComponent', () => {
  let component: SoloTesteoComponent;
  let fixture: ComponentFixture<SoloTesteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloTesteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoloTesteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
