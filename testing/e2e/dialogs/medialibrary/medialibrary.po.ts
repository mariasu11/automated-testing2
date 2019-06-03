import {browser, by, element, ElementFinder, $, $$, ElementArrayFinder, ExpectedConditions} from 'protractor';
import {BranchesEditor} from '../../editor.po';

export class MedialibraryPageObject {
  //#region Elements
  dialog: ElementFinder = $('msd-branching-editor-dialog-medialibrary');
  dialogHeading: ElementFinder = this.dialog.$('.title');
  closeButton: ElementFinder = this.dialog.$('button');
  mediaPanel: ElementFinder = this.dialog.$('.pcontent').$('msd-media-panel');
  allAssetsMediaPanel: ElementArrayFinder = this.mediaPanel.$$('msd-media-panel-asset-panel');
  image01: ElementFinder = this.allAssetsMediaPanel.get(3);

  //#endregion

  //#region Functions
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://nest-staging.eastus2.cloudapp.azure.com/tool/edit/5be4c1b6993d4d628d1886df');
  }

  login() {
    $('input[name = "username"]').sendKeys('asfa.lohani@pearson.com');
    $('input[name = "password"]').sendKeys('Nestnest123');
    return $('button[type = "submit"]').click();
  }

  removeAlert() {
    const alert = $('.alert');
    browser.wait(ExpectedConditions.visibilityOf(alert), 5000);
    return alert.click();
  }

  clickCloseButton() {
    return browser.executeScript('return arguments[0].click()', this.closeButton);
  }


  //#endregion

}
