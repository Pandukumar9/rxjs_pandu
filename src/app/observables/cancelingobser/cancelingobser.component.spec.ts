import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelingobserComponent } from './cancelingobser.component';

describe('CancelingobserComponent', () => {
  let component: CancelingobserComponent;
  let fixture: ComponentFixture<CancelingobserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelingobserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelingobserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
