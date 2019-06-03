import {browser, by, element, ElementFinder, $, ElementArrayFinder, ExpectedConditions} from 'protractor';
import {BranchingEditor} from './editors/branching/branching.po';
import {BranchesEditorSideNav} from './sidenav/sidenav.po';

export class BranchesEditor {
  //#region Elements
  branchesEditorComponent: ElementFinder = $('msd-branches-editor');
  tabGroup: ElementFinder = this.branchesEditorComponent.$('md-sidenav-container md-tab-header');
  tabGroupLabels: ElementArrayFinder = this.tabGroup.$$('.mat-tab-label');

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

  getFourthTabGroupLabel() {
    return this.tabGroupLabels.get(3).getText();
  }
  //#endregion

}
