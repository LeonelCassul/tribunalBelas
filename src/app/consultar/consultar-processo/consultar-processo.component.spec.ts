import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProcessoComponent } from './consultar-processo.component';

describe('ConsultarProcessoComponent', () => {
  let component: ConsultarProcessoComponent;
  let fixture: ComponentFixture<ConsultarProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
