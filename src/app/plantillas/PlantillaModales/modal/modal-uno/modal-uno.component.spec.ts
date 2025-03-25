import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnoComponent } from './modal-uno.component';

describe('ModalUnoComponent', () => {
  let component: ModalUnoComponent;
  let fixture: ComponentFixture<ModalUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
