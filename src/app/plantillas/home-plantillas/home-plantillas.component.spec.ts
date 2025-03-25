import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlantillasComponent } from './home-plantillas.component';

describe('HomePlantillasComponent', () => {
  let component: HomePlantillasComponent;
  let fixture: ComponentFixture<HomePlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePlantillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
