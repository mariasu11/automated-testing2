import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchesEditor} from '../../editor.po';

export class StatisticsPanel extends BranchesEditor {
  //#region Elements
  dialog: ElementFinder = $('msd-branches-editor-panels-statistics');
  dialogInputs: ElementFinder = this.dialog.$('input');
  //#endregion

  //#region Functions
  getWidth(name) {
    return name.getSize().then( (panel) => {
      return panel.width;
    })
  }
  //#endregion
}
