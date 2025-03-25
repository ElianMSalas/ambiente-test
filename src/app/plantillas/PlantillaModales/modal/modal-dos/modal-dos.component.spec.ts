import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDosComponent } from './modal-dos.component';

describe('ModalDosComponent', () => {
  let component: ModalDosComponent;
  let fixture: ComponentFixture<ModalDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
