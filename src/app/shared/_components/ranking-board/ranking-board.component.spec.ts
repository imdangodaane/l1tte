import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingBoardComponent } from './ranking-board.component';

describe('RankingBoardComponent', () => {
  let component: RankingBoardComponent;
  let fixture: ComponentFixture<RankingBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
