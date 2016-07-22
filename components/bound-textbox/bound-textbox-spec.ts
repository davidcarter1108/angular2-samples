import {describe,expect,it,xit, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {BoundTextbox} from './bound-textbox';

export function main() {

    describe('Bound Textbox', () => {

        it('should update text', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb.createAsync(BoundTextbox)
                .then((fixture) => {
                    fixture.detectChanges();
                    let compiled = fixture.elementRef.nativeElement;

                    expect(compiled.querySelector('span')).toHaveText('hello');

                    fixture.componentInstance.typing({target:{value:'new val'}});

                    fixture.detectChanges();

                    expect(compiled.querySelector('span')).toHaveText('new val');
                });
        }));
    });
}