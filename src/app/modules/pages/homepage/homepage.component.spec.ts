import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

fdescribe('HomepageComponent', () => {
  // let component: HomepageComponent;
  // let fixture: ComponentFixture<HomepageComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HomepageComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomepageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  const component: HomepageComponent = new HomepageComponent();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false', () => {
    component.closeNotice();
    expect(component.showHomepageNotice).toBe(false);
  });
});
