import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SVGCanvas} from '../svgcanvas.po';

export class Slide extends SVGCanvas {
//#region Elements
  slideComponent: ElementFinder = $('[msd-branches-editor-svg-slide]');
  allSlides: ElementArrayFinder = this.slideComponent.$$('.graphic .slide');
  branches: ElementArrayFinder = this.slideComponent.$$('.subtree .branches');
  slideObjects: ElementArrayFinder = this.slideComponent.$$('.graphic');
  selectableSlides: ElementArrayFinder = $$('.graphic .selector');

//#endregion

//#region Functions
  getFirstSlideColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic .slide")[0]).getPropertyValue("fill")');
  }

  getSlideSelector(number: number) {
    return this.selectableSlides.get(number - 1);
  }

  getSlideObject(number: number) {
    return this.slideObjects.get(number - 1)

  }

  getSlide(number: number) {
    return this.allSlides.get(number - 1)
  }

  getSlideTitle(number: number) {
    const slideObject: ElementFinder = this.getSlideObject(number);
    return slideObject.$('.title tspan').getText();
  }

  getNewSlideTitle() {
    return this.slideObjects.last().element(by.css('.title tspan')).getText();
  }

  getObjectCount(slideObject) {
    return slideObject.element(by.css('.objectcount')).getText();
  }

//#endregion


}
