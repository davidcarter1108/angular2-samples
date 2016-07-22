System.register(['@angular/core', './input-output'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_output_1;
    var InputOutputDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_output_1_1) {
                input_output_1 = input_output_1_1;
            }],
        execute: function() {
            InputOutputDemo = (function () {
                function InputOutputDemo() {
                    this.count = 0;
                    this.runningTotal = 0;
                    this.myString = '';
                    this.myTitle = 'Input/Output Demo';
                }
                InputOutputDemo.prototype.update = function () {
                    this.count++;
                    this.runningTotal += this.count;
                    this.myString += 'A';
                };
                InputOutputDemo.prototype.myStringChanged = function (val) {
                    console.log(val);
                };
                InputOutputDemo = __decorate([
                    core_1.Component({
                        directives: [input_output_1.InputOutput],
                        template: "<button (click)=\"update()\">Update</button>\n              <input-output plain=\"just a simple attribute\"\n                            fixedValue=\"another hard coded value\"\n                            (stringChanged)=\"myStringChanged($event)\"\n                            [mySum]=\"runningTotal\"\n                            [counter]=\"count\"\n                            [headline]=\"myTitle\"\n                            [growingString]=\"myString\">\n              </input-output>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputOutputDemo);
                return InputOutputDemo;
            }());
            exports_1("InputOutputDemo", InputOutputDemo);
        }
    }
});
//# sourceMappingURL=input-output-demo.js.map