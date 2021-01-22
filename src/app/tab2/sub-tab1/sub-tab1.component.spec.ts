import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubTab1Component } from './sub-tab1.component';

describe('SubTab1Component', () => {
  let component: SubTab1Component;
  let fixture: ComponentFixture<SubTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTab1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
