import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SlidesEditor} from '../../slides.po';

export class SettingsPanel extends SlidesEditor {


//#region Elements
  panel: ElementFinder = this.panelSideNav.$('msd-branches-editor-slide-editor-element-settings-panel');
  placeholderText: ElementFinder = this.panel.$('span');
  categories: ElementArrayFinder = this.panel.$$('.accordian-row');
  categoryHeadings: ElementArrayFinder = this.categories.$$('.aheader span');
  generalSection: ElementFinder = this.categories.get(0).$('.aheader');
  elementSpecificSection: ElementFinder = this.categories.get(1).$('.aheader');
  assetPropertiesSection: ElementFinder = this.categories.get(2).$('.aheader');

//#endregion

//#region Functions



// #endregion



}
