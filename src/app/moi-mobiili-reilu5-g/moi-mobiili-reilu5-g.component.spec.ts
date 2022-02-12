import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiMobiiliReilu5GComponent } from './moi-mobiili-reilu5-g.component';

describe('MoiMobiiliReilu5GComponent', () => {
  let component: MoiMobiiliReilu5GComponent;
  let fixture: ComponentFixture<MoiMobiiliReilu5GComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoiMobiiliReilu5GComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiMobiiliReilu5GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
