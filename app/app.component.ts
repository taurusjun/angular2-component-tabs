/**
 * Created by I306067 on 1/25/2016.
 */
import {Component} from 'angular2/core';
import {Tabs} from "./tabs";
import {Tab} from "./tab";

@Component({
    selector: 'app',
    template: `
      <tabs>
        <tab [title]="'Tab 1'">Tab 1 Content</tab>
        <tab title="Tab 2">Tab 2 Content</tab>
      </tabs>
    `,
    directives: [Tabs, Tab]
})
export class AppComponent { }