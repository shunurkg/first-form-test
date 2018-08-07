import { TestBed, async } from '@angular/core/testing';
import { AppComponent,Child} from './app.component';
// import {Child} from './event-emitter';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'initial test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('initial test');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to initial test!');
  // }));

  
});
describe('LightswitchComp', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new AppComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new AppComponent();
    expect(comp.message).toMatch(/is off/i,'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});
describe('Greeting Component', () => {
  it('should emit greeting event', (done) => {
      let child = new Child();
      child.greeting.subscribe(g => {
         expect(g).toEqual({greeting:'hello'});
         done();
      });
      child.sayHello();
  });
});
