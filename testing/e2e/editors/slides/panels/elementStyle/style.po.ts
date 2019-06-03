import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SlidesEditor} from '../../slides.po';

export class StylePanel extends SlidesEditor {


//#region Elements
  panel: ElementFinder = this.panelSideNav.$('msd-branches-editor-slide-editor-element-style-panel');
  placeholderText: ElementFinder = this.panel.$('span');
  categories: ElementArrayFinder = this.panel.$$('.accordian-row');
  categoryHeadings: ElementArrayFinder = this.categories.$$('.aheader span');
  layoutSection: ElementFinder = this.categories.get(0).$('.aheader');
  typographySection: ElementFinder = this.categories.get(1).$('.aheader');
  backgroundSection: ElementFinder = this.categories.get(2).$('.aheader');
  borderSection: ElementFinder = this.categories.get(3).$('.aheader');
  shadowsSection: ElementFinder = this.categories.get(4).$('.aheader');
  effectsSection: ElementFinder = this.categories.get(5).$('.aheader');

//#endregion



}
