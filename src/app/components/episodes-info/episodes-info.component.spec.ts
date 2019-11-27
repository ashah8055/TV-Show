import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesInfoComponent } from './episodes-info.component';

describe('EpisodesInfoComponent', () => {
  let component: EpisodesInfoComponent;
  let fixture: ComponentFixture<EpisodesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
