import { Component, OnInit } from '@angular/core';
import { <%= classify(singularize(vo)) %> } from '<%= absoluteSrcPath(voPath) %>/<%= dasherize(singularize(vo)) %>';

@Component({
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']
})
/**
 * Table view.
 */
export class <%= classify(name) %>Component implements OnInit {

    /**
     * View bound variable.
     */
    list: <%= classify(singularize(vo)) %>[];

    <% if(ui.toString() === 'material'){ %>
    /**
     * Columns to display in the UI.
     */
    columnsToDisplay: string[] = [<% parameters.forEach(function(parameter){ %>'<%= parameter %>',<% }) %>];
    <% } %>

    /**
     * Component constructor and DI injection point.
     */
    constructor() { }

    /**
     * Called part of the component lifecycle. Best first
     * place to start adding your code.
     */
    ngOnInit() {
        this.list = [];
        for(let i:number=0, n:number=10;i<n;i++){
            this.list.push(new <%= classify(singularize(vo)) %>());
        }
    }

}
