import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {SVGCanvas} from '../svgcanvas.po';

export class Grid extends SVGCanvas {
//#region Elements
  gridComponent: ElementFinder = this.slidesOverview.$('[msd-branches-editor-svg-grid]');


}
