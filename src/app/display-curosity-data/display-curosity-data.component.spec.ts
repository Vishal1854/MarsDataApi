import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurosityDataComponent } from './display-curosity-data.component';

describe('DisplayCurosityDataComponent', () => {
  let component: DisplayCurosityDataComponent;
  let fixture: ComponentFixture<DisplayCurosityDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCurosityDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCurosityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
