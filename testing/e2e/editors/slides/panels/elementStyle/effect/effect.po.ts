import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {StylePanel} from '../style.po';

export class EffectStylePanelComponent extends StylePanel {


//#region Elements
  component: ElementFinder = this.panel.$('msd-branches-editor-slide-editor-element-effect-style-panel');

//#endregion

}
