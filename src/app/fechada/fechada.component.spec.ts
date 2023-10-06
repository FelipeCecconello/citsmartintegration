import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechadaComponent } from './fechada.component';

describe('FechadaComponent', () => {
  let component: FechadaComponent;
  let fixture: ComponentFixture<FechadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechadaComponent]
    });
    fixture = TestBed.createComponent(FechadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
