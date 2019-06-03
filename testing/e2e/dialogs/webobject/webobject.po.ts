import {browser, by, element, ElementFinder, $, $$, ElementArrayFinder, ExpectedConditions} from 'protractor';
import {BranchesEditor} from '../../editor.po';

export class WebObjectDialog {
  //#region Elements
  dialog: ElementFinder = $('msd-branching-editor-dialog-webobject');
  title: ElementFinder = this.dialog.$('.title');
  type: ElementFinder = this.dialog.$('.type');
  icon: ElementFinder = this.dialog.$('.icon md-icon');
  nameInput: ElementFinder = this.dialog.$('#name');
  descriptionInput: ElementFinder = this.dialog.$('#md-input-3');
  textInput: ElementFinder = this.dialog.$('msd-branches-editor-text-panel').$('#text');
  urlInput: ElementFinder = this.dialog.$('msd-branches-editor-iframe-panel').$('#url');
  assetSelectionLabel: ElementFinder = this.dialog.$('.asset label');
  assetSelectionButtons: ElementArrayFinder = this.dialog.$('.select').$$('button');
  selectButton: ElementFinder = this.assetSelectionButtons.get(0);
  uploadButton: ElementFinder = this.assetSelectionButtons.get(1);
  allActionButtons: ElementArrayFinder = this.dialog.$('.actions').$$('button');
  cancelButton: ElementFinder = this.allActionButtons.get(0);
  confirmButton: ElementFinder = this.allActionButtons.get(1);
  htmlField: ElementFinder = this.dialog.$('msd-branches-editor-html-panel').$('textarea[name="html"]');
  cssField: ElementFinder = this.dialog.$('msd-branches-editor-html-panel').$('textarea[name="css"]');
  javascriptField: ElementFinder = this.dialog.$('msd-branches-editor-html-panel').$('textarea[name="javascript"]');
  mathmlField: ElementFinder = this.dialog.$('msd-branches-editor-mathjax-panel').$('textarea[name="mathml"]');
  continueRadioButton: ElementFinder = this.dialog.$('msd-branches-editor-flowcontrol-panel').$('md-radio-button[name="continue"');
  hotspotRadioButton: ElementFinder = this.dialog.$('msd-branches-editor-flowcontrol-panel').$('md-radio-button[name="hotspot"');
  audioPanel = this.dialog.$('msd-branches-editor-audio-panel');
  videoPanel = this.dialog.$('msd-branches-editor-videojs-panel');


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

  clickSelectButton() {
    return browser.executeScript('return arguments[0].click()', this.selectButton);
  }


  //#endregion

}
