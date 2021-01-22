import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubTab2Component } from './sub-tab2.component';

describe('SubTab2Component', () => {
  let component: SubTab2Component;
  let fixture: ComponentFixture<SubTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTab2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
