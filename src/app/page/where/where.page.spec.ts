import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WherePage } from './where.page';

describe('WherePage', () => {
  let component: WherePage;
  let fixture: ComponentFixture<WherePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WherePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WherePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
