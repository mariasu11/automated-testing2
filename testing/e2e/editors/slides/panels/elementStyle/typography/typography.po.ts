import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {StylePanel} from '../style.po';

export class TypographyStylePanelComponent extends StylePanel {


//#region Elements
  component: ElementFinder = this.panel.$('msd-branches-editor-slide-editor-element-typography-style-panel');

//#endregion

}
