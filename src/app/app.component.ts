import { Component,Output, EventEmitter } from '@angular/core';

 @Component({
    selector: 'lightswitch-comp',
    template: `
      <button (click)="clicked()">Click me!</button>
      <span>{{message}}</span>`
  })
export class AppComponent {

  title = 'initial test';
  
  
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  }

@Component({
  selector:'child',
  template:`<button (click)="sayHello()">Greet</button>`
  // styleUrls: ['./app.component.css']
 
 
})
export class Child{
    @Output() greeting = new EventEmitter();
    sayHello(){
        this.greeting.emit({greeting:'hello'});
    }
}
@Component({
    selector:'parent',
    template:`<child (greeting)="onGreeting($event)"></child>`
})
export class Parent{
    onGreeting(e){
        console.log(e);
    }
}
