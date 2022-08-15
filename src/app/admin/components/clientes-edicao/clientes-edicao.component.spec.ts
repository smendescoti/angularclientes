import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesEdicaoComponent } from './clientes-edicao.component';

describe('ClientesEdicaoComponent', () => {
  let component: ClientesEdicaoComponent;
  let fixture: ComponentFixture<ClientesEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
