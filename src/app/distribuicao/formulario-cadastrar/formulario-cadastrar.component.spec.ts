import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastrarComponent } from './formulario-cadastrar.component';

describe('FormularioCadastrarComponent', () => {
  let component: FormularioCadastrarComponent;
  let fixture: ComponentFixture<FormularioCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
