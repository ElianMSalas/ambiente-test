import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsNavigatorComponent } from './components-navigator.component';

describe('SidenavComponent', () => {
  let component: ComponentsNavigatorComponent;
  let fixture: ComponentFixture<ComponentsNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
