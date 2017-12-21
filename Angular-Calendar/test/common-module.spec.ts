import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import moment from 'moment';
import {
  CalendarCommonModule,
  CalendarMonthModule,
  CalendarDateFormatter,
  CalendarMomentDateFormatter,
  CalendarMonthViewComponent,
  CalendarWeekViewComponent,
  CalendarDayViewComponent,
  MOMENT
} from './../src';

describe('common module', () => {
  it('should not require providers to be specified when using CalendarCommonModule.forRoot()', () => {
    TestBed.configureTestingModule({
      imports: [CalendarCommonModule.forRoot()]
    });
    const dateFormatter: CalendarDateFormatter = TestBed.get(
      CalendarDateFormatter
    );
    expect(dateFormatter instanceof CalendarDateFormatter).to.equal(true);
  });

  it('should allow the date formatter to be customsied via the forRoot method', () => {
    TestBed.configureTestingModule({
      imports: [
        CalendarCommonModule.forRoot({
          dateFormatter: {
            provide: CalendarDateFormatter,
            useClass: CalendarMomentDateFormatter
          }
        })
      ],
      providers: [{ provide: MOMENT, useValue: moment }]
    });
    const dateFormatter: CalendarDateFormatter = TestBed.get(
      CalendarDateFormatter
    );
    expect(dateFormatter instanceof CalendarDateFormatter).to.equal(false);
    expect(dateFormatter instanceof CalendarMomentDateFormatter).to.equal(true);
  });

  it('should allow just the month view to be created', () => {
    TestBed.configureTestingModule({
      imports: [CalendarCommonModule.forRoot(), CalendarMonthModule]
    });
    expect(() =>
      TestBed.createComponent(CalendarMonthViewComponent)
    ).not.to.throw();
    expect(() => TestBed.createComponent(CalendarWeekViewComponent)).to.throw();
    expect(() => TestBed.createComponent(CalendarDayViewComponent)).to.throw();
  });
});
