import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutoDetailComponent } from './prodcuto-detail.component';

describe('ProdcutoDetailComponent', () => {
  let component: ProdcutoDetailComponent;
  let fixture: ComponentFixture<ProdcutoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
