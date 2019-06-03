import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {DataFactory} from '../../data-factory';
import {BranchesEditor} from '../../editor.po';

export class EditorSettingsPanel extends BranchesEditor {
  //#region Elements
  dataFactory: DataFactory = new DataFactory();
  dialog: ElementFinder = $('msd-branches-editor-panel-settings');
  saveRateField: ElementFinder = this.dialog.$('input');
  // editorSettingsDialogDebugCheckbox: ElementFinder = this.dialog.$('md-checkbox');
  debugCheckbox: ElementFinder = this.dialog.$('md-checkbox').$('label');
  debugInput: ElementFinder = this.debugCheckbox.$('#input-md-checkbox-1');
  //#endregion

  //#region Functions

  getWidth(name) {
    return name.getSize().then( (panel) => {
      return panel.width;
    })
  }

  clickDebugCheckbox() {
    return browser.executeScript('return arguments[0].click()', this.debugInput);
  }

  isDebugChecked() {
    return browser.executeScript('return arguments[0].checked', this.debugInput);
  }
  //#endregion
}
