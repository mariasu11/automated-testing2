import {browser, by, element, ElementFinder, $, $$, ElementArrayFinder, ExpectedConditions} from 'protractor';

export class NewSlideDialog {
//#region Elements
  dialog: ElementFinder = $('msd-branches-editor-dialog-slide');
  heading: ElementFinder = this.dialog.$('.title');
  slideTitleInput: ElementFinder = this.dialog.$('.properties').$('#md-input-1');
  descriptionTextArea: ElementFinder = this.dialog.$('.properties').$('#md-input-4');
  slidesBackgroundColorInput: ElementFinder = this.dialog.$('.properties').$('#md-input-6');
  maxReplaysInput: ElementFinder = this.dialog.$('.properties').$('#md-input-8');
  allCheckboxInputs: ElementArrayFinder = $$('input[type="checkbox"]');
  checkboxes: ElementArrayFinder = $$('md-checkbox');
  manualReplayLabel: ElementFinder = this.checkboxes.get(0).element(by.css('.mat-checkbox-label'));
  autoReplayLabel: ElementFinder = this.checkboxes.get(1).element(by.css('.mat-checkbox-label'));
  autoPlayLabel: ElementFinder = this.checkboxes.get(2).element(by.css('.mat-checkbox-label'));
  showControlsLabel: ElementFinder = this.checkboxes.get(3).element(by.css('.mat-checkbox-label'));
  showProgressLabel: ElementFinder = this.checkboxes.get(4).element(by.css('.mat-checkbox-label'));
  branchToURLLabel: ElementFinder = this.checkboxes.get(5).element(by.css('.mat-checkbox-label'));
  allActionButtons: ElementArrayFinder = this.dialog.$('.actions').$$('button');
  cancelButton: ElementFinder = this.allActionButtons.get(0);
  confirmButton: ElementFinder = this.allActionButtons.get(1);
  cancelButtonName: ElementFinder = this.cancelButton.$('span span');
  confirmButtonName: ElementFinder = this.confirmButton.$('span span');
//#endregion

// #refion Functions
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
