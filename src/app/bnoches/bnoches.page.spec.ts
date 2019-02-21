import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnochesPage } from './bnoches.page';

describe('BnochesPage', () => {
  let component: BnochesPage;
  let fixture: ComponentFixture<BnochesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnochesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnochesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
