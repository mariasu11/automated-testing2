import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {StylePanel} from '../style.po';

export class ShadowStylePanelComponent extends StylePanel {


//#region Elements
  component: ElementFinder = this.panel.$('msd-branches-editor-slide-editor-element-shadow-style-panel');
//#endregion


}
