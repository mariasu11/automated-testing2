import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SlidesEditor} from '../../slides.po';

export class SlidesEditorToolMenu extends SlidesEditor {


//#region Elements
  toolMenuComponent: ElementFinder = this.editor.$('msd-branches-editor-slide-editor-tool-menu');
//#endregion

}
