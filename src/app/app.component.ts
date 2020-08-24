import { Component } from '@angular/core';

@Component({
    selector: 'fv-root',
    template: `
    <main >
    <div style = 'text-align: center'>
    <h1>{{pageTitle}}</h1>
    <p> First Angular App</p>
    </div>
    
    <pm-products></pm-products>
    </main> `

})

export class AppComponent{
    pageTitle: string = 'Apex Management Sellers'
}