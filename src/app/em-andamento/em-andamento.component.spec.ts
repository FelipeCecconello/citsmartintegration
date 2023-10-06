import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmAndamentoComponent } from './em-andamento.component';

describe('EmAndamentoComponent', () => {
  let component: EmAndamentoComponent;
  let fixture: ComponentFixture<EmAndamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmAndamentoComponent]
    });
    fixture = TestBed.createComponent(EmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
