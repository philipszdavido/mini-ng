import { Component } from './framework/core/component';
import { bootstrap, readInComponents, DOMtoHTML, parse, compileExpr } from './framework/platform-browser/bootstrap';
import * as HTML from 'html-parse-stringify'

var classes = []

@Component({
     selector: 'test',
     template: '<h1>hi</h1>'
})

class Person {
  public name: string;
  constructor(){}
  // ...
}
function Consolee(target) {
	console.log(target);
}

@Consolee
class ExampleClasss {
	constructor() {
  	console.log('Yo!');
  }
}
console.log('\n')
function Console(message) {
  // access the "metadata" message
  console.log(message);
  // return a function closure, which
  // is passed the class as `target`
  return function(target) {
    console.log('Our decorated class', target);
    classes.push({
      name: message,
      handler : target
    })
  };
}

@Console('Hey!')
class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}
@Console('Hey!')
class ExampleClassp {
  constructor() {
    console.log('Yo!');
  }
}
console.log('\n',classes)
readInComponents("<h1>Welcome</h1><to-do></to-do><a href=''></a>")
readInComponents('<div>1</div><div>2</div>')
readInComponents('<div><b>Hello!</b></div>')
var dom = [
  {
    type: 'div',
    children: [{
      type: 'li'
    }]
  },
  {
    type: 'h1'
  }
];
class P {
  a = 8
  b = 9
  constructor(){}
}
var template = "<h1>{a+b}</h1><li>{a*b}</li>"

var pi = new P()
for (var key in pi) {
  console.log('key:' + key + ' value:' + pi[key])
}
//bootstrap(Person)
//DOMtoHTML(dom)
//parse(template, pi)
compileExpr(template, pi)








