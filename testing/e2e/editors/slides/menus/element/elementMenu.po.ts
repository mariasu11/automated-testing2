import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SlidesEditor} from '../../slides.po';

export class ElementMenu extends SlidesEditor {


//#region Elements
  menuComponent: ElementFinder = this.editor.$('msd-branches-editor-slide-editor-element-menu');
  buttons: ElementArrayFinder = this.menuComponent.$$('button');
  duplicateElementsButton: ElementFinder = this.buttons.get(0);
  copyElementsButton: ElementFinder = this.buttons.get(1);
  moveElementsBackwardButton: ElementFinder = this.buttons.get(2);
  moveElementsForwardButton: ElementFinder = this.buttons.get(3);
  removeElementsButton: ElementFinder = this.buttons.get(4);


//#endregion


//#region Functions
  getIconText(button) {
    return button.element(by.tagName('md-icon')).getText();
  }
//#endregion

}
