import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DContaComponent } from './d-conta.component';

describe('DContaComponent', () => {
  let component: DContaComponent;
  let fixture: ComponentFixture<DContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
