import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InustriesComponent } from './inustries.component';

describe('InustriesComponent', () => {
  let component: InustriesComponent;
  let fixture: ComponentFixture<InustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InustriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
