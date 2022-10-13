import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovantComponent } from './inovant.component';

describe('InovantComponent', () => {
  let component: InovantComponent;
  let fixture: ComponentFixture<InovantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
