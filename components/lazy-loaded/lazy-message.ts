
import {Component} from '@angular/core';

@Component({
    selector: 'lazy-message',
    template: '<div>"Hello" from a dependency of the lazy loaded component.</div>'
})

export class LazyMessage {
}