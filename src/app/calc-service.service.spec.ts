import { TestBed, inject } from '@angular/core/testing';

import { CalcServiceService } from './calc-service.service';

describe('CalcServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcServiceService]
    });
  });

  it('should be created', inject([CalcServiceService], (service: CalcServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should be divisible by 2',inject([CalcServiceService], (service: CalcServiceService)=>
{ expect(service.calculate(4)).toBe(0);

}))
it('should not be divisible by 2',inject([CalcServiceService], (service: CalcServiceService)=>
{ expect(service.calculate(5)).toBe(1);

}))

it("should work for objects", function() {
  var foo = {
    a: 12,
    b: 34
  };
  var bar = {
    a: 12,
    b: 34
  };
  expect(foo).toEqual(bar);
});

  it('should return Fizz if its divisible by 3',inject([CalcServiceService], (service: CalcServiceService)=>
  { expect(service.fizzBuzz(3)).toEqual(" 1not divisible 2not divisible 3Fizz ");
  }));
  it('should return Buzz if its divisible by 5',inject([CalcServiceService], (service: CalcServiceService)=>
  { expect(service.fizzBuzz(5)).toBe(" 1not divisible 2not divisible 3Fizz 4not divisible 5Buzz ");
  }));
  it('should check to contain on fizzbuzz',inject([CalcServiceService], (service: CalcServiceService)=>
  { expect(service.fizzBuzz(5)).toContain(" 3Fizz");
  }));

  it('should create and check if function is valid or not',inject([CalcServiceService], (service: CalcServiceService)=>
  { expect(service.repeatValues("1,2,3,3,2,5")).toBeTruthy();
  }));
  it('should contain the repeating values',inject([CalcServiceService], (service: CalcServiceService)=>
  { expect(service.repeatValues("1,2,3,4,2,3")).toEqual(" 2 3");
  }));
});
