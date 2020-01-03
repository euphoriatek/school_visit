import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YournamePage } from './yourname.page';

describe('YournamePage', () => {
  let component: YournamePage;
  let fixture: ComponentFixture<YournamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YournamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YournamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
