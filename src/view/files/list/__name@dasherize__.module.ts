import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import {<%= classify(name) %>Guard} from './<%= dasherize(name) %>.guard';
import {<%= classify(name) %>RoutingModule} from './<%= dasherize(name) %>.routing.module';
<% if(ui.toString() === 'bootstrap'){ %>
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<% } %>
<% if(ui.toString() === 'material'){ %>
import {
    MatCardModule,
    MatListModule
} from '@angular/material';
<% } %>

@NgModule({
    declarations: [
        <%= classify(name) %>Component,
    ],
    imports: [
        SharedModule,
        <% if(ui.toString() === 'bootstrap'){ %>NgbModule,
        <% } %><% if(ui.toString() === 'material'){ %>MatCardModule,
        MatListModule,
        <% } %><%= classify(name) %>RoutingModule
    ],
    providers: [<%= classify(name) %>Guard]
})

export class <%= classify(name) %>Module {
}
