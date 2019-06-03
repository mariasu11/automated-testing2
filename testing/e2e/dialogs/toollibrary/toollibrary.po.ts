import {browser, by, element, ElementFinder, $, $$, ElementArrayFinder, ExpectedConditions} from 'protractor';
import {BranchesEditor} from '../../editor.po';

export class ToolLibraryDialog {
  //#region Elements
  dialog: ElementFinder = $('msd-branching-editor-dialog-toollibrary');
  heading: ElementFinder = this.dialog.$('.title');
  inputs: ElementArrayFinder = this.dialog.$('.pcontent').$$('input');
  nameInput: ElementFinder = this.inputs.get(0);
  urlInput: ElementFinder = this.inputs.get(1);
  ceWidgetTypeDropdown: ElementFinder = this.dialog.$('.mat-select-trigger');
  ceWidgetTypes: ElementArrayFinder = $$('md-option');
  allActionButtons: ElementArrayFinder = this.dialog.$('.actions').$$('button');
  cancelButton: ElementFinder = this.allActionButtons.get(0);
  confirmButton: ElementFinder = this.allActionButtons.get(1);
  //#endregion

  //#region Functions
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://nest-staging.eastus2.cloudapp.azure.com/tool/edit/5be4c1b6993d4d628d1886df');
  }

  removeAlert() {
    const alert = $('.alert');
    browser.wait(ExpectedConditions.visibilityOf(alert), 5000);
    return alert.click();
  }
  //#endregion

}
