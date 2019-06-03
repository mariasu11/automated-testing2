import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchingEditor} from '../branching.po';

export class SVGCanvas extends BranchingEditor {
//#region Elements
  canvas: ElementFinder = this.slidesOverview.$('msd-branches-editor-svg-canvas');
  modeOverlay: ElementFinder = this.canvas.$('.modeOverlay');
  grayOverlay: ElementFinder = this.canvas.$('.overlay');
  tree: ElementFinder = this.canvas.$('#tree');
  // firstSlideBranches = element.all(by.css('#tree > g > .subtree > .nodes')); // use function instead

//#endregion

// #region Functions
  getModeOverlayHeading() {
    return this.modeOverlay.$('h3').getText();
  }

  getOverlayColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelector(".overlay")).getPropertyValue("fill")');
  }

  getOverlayOpacity() {
    return browser.executeScript('return window.getComputedStyle(document.querySelector(".overlay")).getPropertyValue("fill-opacity")');
  }

  getSecondSlideOpacity() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic")[1]).getPropertyValue("opacity")');
  }

  getSecondSlideCursor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic")[1]).getPropertyValue("cursor")');
  }

  numberOfFirstSlideBranches() {
    return browser.executeScript('return document.querySelectorAll(".subtree")[0].children.length');
  }
  numberOfSecondSlideBranches() {
    return browser.executeScript('return document.querySelectorAll(".subtree")[1].children.length');
  }

  secondSlideBranchLogicToNewSlide() {
    return browser.executeScript('return document.querySelectorAll(".subtree")[1].children[1].getElementsByTagName("use")[0].getAttribute("class")'); // or .className.baseVal
  }
//#endregion


}
