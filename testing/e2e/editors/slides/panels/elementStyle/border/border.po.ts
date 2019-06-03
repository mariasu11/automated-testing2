import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {StylePanel} from '../style.po';

export class BorderStylePanelComponent extends StylePanel {


//#region Elements
  component: ElementFinder = this.panel.$('msd-branches-editor-slide-editor-element-border-style-panel');

//#endregion

}
