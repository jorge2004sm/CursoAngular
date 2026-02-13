import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIf } from './componente-if';

describe('ComponenteIf', () => {
  let component: ComponenteIf;
  let fixture: ComponentFixture<ComponenteIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
