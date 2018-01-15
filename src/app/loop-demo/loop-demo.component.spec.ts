import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopDemoComponent } from './loop-demo.component';

describe('LoopDemoComponent', () => {
  let component: LoopDemoComponent;
  let fixture: ComponentFixture<LoopDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
