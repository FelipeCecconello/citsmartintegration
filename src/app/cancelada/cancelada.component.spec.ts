import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceladaComponent } from './cancelada.component';

describe('CanceladaComponent', () => {
  let component: CanceladaComponent;
  let fixture: ComponentFixture<CanceladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceladaComponent]
    });
    fixture = TestBed.createComponent(CanceladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
