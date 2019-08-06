import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmisComponentComponent } from './hmis-component.component';

describe('HmisComponentComponent', () => {
  let component: HmisComponentComponent;
  let fixture: ComponentFixture<HmisComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmisComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
