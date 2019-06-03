import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchingEditor} from '../../branching.po';

export class SlideMenu extends BranchingEditor {
//#region Elements
  slideMenuComponent: ElementFinder = this.slidesOverview.$('msd-branches-editor-menu-slide');
  buttons: ElementArrayFinder = this.slideMenuComponent.$$('button');
  removeSelectedSlideButton: ElementFinder = this.buttons.get(0);
  enterEditorModeButton: ElementFinder = this.buttons.get(1);
  moveSlideToAnotherBranchButton: ElementFinder = this.buttons.get(2);
  toggleAddSlideMenuButton: ElementFinder = this.buttons.get(3);
  toggleAddExistingSlideMenuButton: ElementFinder = this.buttons.get(4);
  duplicateExistingSlideButton: ElementFinder = this.buttons.get(5);
  toggleAddObjectsMenuButton: ElementFinder = this.buttons.get(6);
  editSlideButton: ElementFinder = this.buttons.get(7);
  branchLogicSubMenu: ElementFinder = this.slideMenuComponent.$('.branchlogic');
  branchLogicSubMenuButtons: ElementArrayFinder = this.branchLogicSubMenu.$$('button');
  continueButton: ElementFinder = this.branchLogicSubMenuButtons.get(0);
  outcomeButton: ElementFinder = this.branchLogicSubMenuButtons.get(1);
  selectionButton: ElementFinder = this.branchLogicSubMenuButtons.get(2);
  tallyButton: ElementFinder = this.branchLogicSubMenuButtons.get(3);
  addObjectsSubMenu: ElementFinder = this.slideMenuComponent.$('.objectButtons');
  addObjectsSubMenuButtons: ElementArrayFinder = this.addObjectsSubMenu.$$('button');
  addCEToolsToSlideButton: ElementFinder = this.addObjectsSubMenuButtons.get(0);
  addMediaObjectsToSlideButton: ElementFinder = this.addObjectsSubMenuButtons.get(1);
  addWebObjectsPlaceholdersToSlideButton: ElementFinder = this.addObjectsSubMenuButtons.get(2);
  webObjectsSubMenu: ElementFinder = this.slideMenuComponent.$('.graphicalObjectButtons');
  webObjectsSubMenuButtons: ElementArrayFinder = this.webObjectsSubMenu.$$('button');
  addCreateJSPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(0);
  addWidgetPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(1);
  addImagePlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(2);
  addTextPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(3);
  addIFramePlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(4);
  addHTMLPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(5);
  addMathJAXPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(6);
  addFlowControlPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(7);
  addAudioPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(8);
  addVideoPlaceholderToSlideButton: ElementFinder = this.webObjectsSubMenuButtons.get(9);
//#endregion

// #region Functions
  getIconText(button) {
    return button.element(by.tagName('md-icon')).getText();
  }
//#endregion


}
