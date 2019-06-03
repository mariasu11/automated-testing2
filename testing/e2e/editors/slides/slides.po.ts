import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchingEditor} from '../branching/branching.po';

export class SlidesEditor extends BranchingEditor {


//#region Elements
  editor: ElementFinder = this.branchesEditorComponent.$('msd-branches-editor-slides-editor');
  navMenu: ElementFinder = this.editor.$('nav');
  allNavButtons: ElementArrayFinder = this.navMenu.$$('li');
  allNavButtonNames: ElementArrayFinder = this.navMenu.$$('li span');
  panelSideNav: ElementFinder = this.editor.$('.panelSideNav');
  panelSideNavHeader: ElementFinder = this.panelSideNav.$('.header span');
  exitFullscreenButton = this.panelSideNav.$('.header').$('.minimize');
  animationButton: ElementFinder = this.allNavButtons.get(0);
  cewidgetButton: ElementFinder = this.allNavButtons.get(1);
  imageButton: ElementFinder = this.allNavButtons.get(2);
  textButton: ElementFinder = this.allNavButtons.get(3);
  mathjaxButton: ElementFinder = this.allNavButtons.get(4);
  flowcontrolButton: ElementFinder = this.allNavButtons.get(5);
  htmlButton: ElementFinder = this.allNavButtons.get(6);
  iframeButton: ElementFinder = this.allNavButtons.get(7);
  audioButton: ElementFinder = this.allNavButtons.get(8);
  videoButton: ElementFinder = this.allNavButtons.get(9);
  stageSlideElements: ElementArrayFinder = this.editor.$('msd-branches-stage-slide').$$('msd-branches-stage-slide-element');
  settingsTab: ElementFinder = this.panelSideNav.$('#md-tab-label-1-1');
  stage: ElementFinder = this.editor.$('main').$('.sw .stage');

//#endregion

//#region Functions
  getPanelSidenavWidth() {
    return this.panelSideNav.getSize().then( (panelSidenav) => {
      return panelSidenav.width;
    })
  }

  clickfirstStageElement() {
    return browser.executeScript('return arguments[0].click()', this.stageSlideElements.get(0));
  }

  clickExitFullscreenButton() {
    return browser.executeScript('return arguments[0].click()', this.exitFullscreenButton)
  }

  getStageElement(number) {
    return this.stageSlideElements.get(number);
  }
//#endregion
}
