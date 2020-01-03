import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkWithChildPage } from './work-with-child.page';

describe('WorkWithChildPage', () => {
  let component: WorkWithChildPage;
  let fixture: ComponentFixture<WorkWithChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkWithChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
