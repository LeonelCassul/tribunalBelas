import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarProcessoComponent } from './registar-processo.component';

describe('RegistarProcessoComponent', () => {
  let component: RegistarProcessoComponent;
  let fixture: ComponentFixture<RegistarProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarProcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
