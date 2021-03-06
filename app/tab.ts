import { Component } from 'angular2/core';
import {Tabs} from './tabs';

@Component({
    selector: 'tab',
    inputs: [
        'title',
        'active'
    ],
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
    title: string;
    active = this.active || false;

    constructor(tabs: Tabs){
        tabs.addTab(this);

    }
}