import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoShopeameComponent } from './logo-shopeame.component';

describe('LogoShopeameComponent', () => {
  let component: LogoShopeameComponent;
  let fixture: ComponentFixture<LogoShopeameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoShopeameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoShopeameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
