import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThanksForSignPage } from './thanks-for-sign.page';

describe('ThanksForSignPage', () => {
  let component: ThanksForSignPage;
  let fixture: ComponentFixture<ThanksForSignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksForSignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThanksForSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
