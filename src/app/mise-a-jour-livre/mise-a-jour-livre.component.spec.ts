import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseAJourLivreComponent } from './mise-a-jour-livre.component';

describe('MiseAJourLivreComponent', () => {
  let component: MiseAJourLivreComponent;
  let fixture: ComponentFixture<MiseAJourLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiseAJourLivreComponent]
    });
    fixture = TestBed.createComponent(MiseAJourLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
