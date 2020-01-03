import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TyEnjoydayPage } from './ty-enjoyday.page';

describe('TyEnjoydayPage', () => {
  let component: TyEnjoydayPage;
  let fixture: ComponentFixture<TyEnjoydayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyEnjoydayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TyEnjoydayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
