import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesexampleComponent } from './pipesexample.component';

describe('PipesexampleComponent', () => {
  let component: PipesexampleComponent;
  let fixture: ComponentFixture<PipesexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
