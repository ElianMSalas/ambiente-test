import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentesComponent } from './home-componentes.component';

describe('HomeComponentesComponent', () => {
  let component: HomeComponentesComponent;
  let fixture: ComponentFixture<HomeComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
