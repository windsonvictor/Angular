import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaPaiComponent } from './ciclo-vida-pai.component';

describe('CicloVidaPaiComponent', () => {
  let component: CicloVidaPaiComponent;
  let fixture: ComponentFixture<CicloVidaPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloVidaPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
