import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SlidesEditor} from '../../slides.po';

export class Sequencer extends SlidesEditor {


//#region Elements
  component: ElementFinder = this.editor.$('msd-branches-editor-panel-sequencer');
  header: ElementFinder = this.component.$('.header span');
  icon: ElementFinder = this.component.$('md-icon');

//#endregion




}
