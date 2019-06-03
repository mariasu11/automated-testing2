import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchingEditor} from '../../branching.po';

export class ToolMenu extends BranchingEditor {
//#region Elements
  toolMenuComponent: ElementFinder = this.slidesOverview.$('msd-branches-editor-menu-tool');
  buttons = this.toolMenuComponent.$$('button');
  lockCameraMovementAndZoomButton = this.buttons.get(0);
  zoomExtentsButton = this.buttons.get(1);
  zoomInButton = this.buttons.get(2);
  zoomOutButton = this.buttons.get(3);
//#endregion

//#region Functions
  getIconText(button) {
    return button.element(by.tagName('md-icon')).getText();
  }
//#endregion

}
