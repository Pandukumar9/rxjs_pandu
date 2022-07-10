import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunObsComponent } from './fun-obs.component';

describe('FunObsComponent', () => {
  let component: FunObsComponent;
  let fixture: ComponentFixture<FunObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
