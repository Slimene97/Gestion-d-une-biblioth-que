import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivresComponent } from './liste-livres.component';

describe('ListeLivresComponent', () => {
  let component: ListeLivresComponent;
  let fixture: ComponentFixture<ListeLivresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeLivresComponent]
    });
    fixture = TestBed.createComponent(ListeLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
