import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelSpaceComponent } from './personel-space.component';

describe('PersonelSpaceComponent', () => {
  let component: PersonelSpaceComponent;
  let fixture: ComponentFixture<PersonelSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
