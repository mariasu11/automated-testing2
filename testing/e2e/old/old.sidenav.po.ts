import { browser, by, element } from 'protractor';

/*export class MsdBranchesEditorSideNavPage {
  sideNav = element(by.tagName('msd-branches-editor-sidenav'));
  primaryUL = this.sideNav.element(by.css('.primary')).all(by.css('li'));
  previewButton = this.primaryUL.get(0);
  undoButton = this.primaryUL.get(1);
  redoButton = this.primaryUL.get(2);
  secondaryUL = this.sideNav.element(by.css('.secondary')).all(by.css('li'));
  projectOptionsButton = this.secondaryUL.get(0);
  editorSettingsButton = this.secondaryUL.get(1);
  statisticsButton = this.secondaryUL.get(2);
  saveButton = this.sideNav.element(by.css('.save'));
  previewIcon = this.previewButton.element(by.tagName('md-icon'));
  undoIcon = this.undoButton.element(by.tagName('md-icon'));
  redoIcon = this.redoButton.element(by.tagName('md-icon'));
  projectOptionsIcon = this.projectOptionsButton.element(by.tagName('md-icon'));
  editorSettingsIcon = this.editorSettingsButton.element(by.tagName('md-icon'));
  statisticsIcon = this.statisticsButton.element(by.tagName('md-icon'));
  saveIcon = this.saveButton.element(by.tagName('md-icon'));
  projectOptionsDialog = element(by.tagName('msd-branches-editor-panels-project-options'));
  projectOptionsDialogInputs = this.projectOptionsDialog.element(by.css('.pcontent')).all(by.tagName('input'));
  projectOptionsDialogNameField = this.projectOptionsDialogInputs.get(0);
  projectOptionsDialogMaxReplaysField = this.projectOptionsDialogInputs.get(2);
  projectOptionsDialogSlideLoadDepthField = this.projectOptionsDialogInputs.get(3);
  projectOptionsDialogSlidesBackgroundColor = this.projectOptionsDialogInputs.get(4);
  colorPicker = element(by.tagName('color-picker')).element(by.css('.color-picker'));
  colorPickerCursor = this.colorPicker.element(by.css('.saturation-lightness .cursor'));
  projectOptionsTranscriptSelectButton = this.projectOptionsDialog.element(by.tagName('button'));
  mediaLibraryDialog = element(by.tagName('msd-branching-editor-dialog-medialibrary'));
  mediaLibraryDialogHeading = this.mediaLibraryDialog.element(by.css('.title'));
  projectOptionsCheckboxes = this.projectOptionsDialog.all(by.tagName('md-checkbox'));
  allowBigPlayOverlayCheckbox = this.projectOptionsCheckboxes.get(0).element(by.tagName('label'));
  manualReplayCheckbox = this.projectOptionsCheckboxes.get(1).element(by.tagName('label'));
  autoReplayCheckbox = this.projectOptionsCheckboxes.get(2).element(by.tagName('label'));
  allowBigPlayOverlayInput = this.allowBigPlayOverlayCheckbox.element(by.id('input-md-checkbox-1'));
  manualReplayInput = this.manualReplayCheckbox.element(by.id('input-md-checkbox-2'));
  autoReplayInput = this.autoReplayCheckbox.element(by.id('input-md-checkbox-3'));
  editorSettingsDialog = element(by.tagName('msd-branches-editor-panels-settings'));
  editorSettingsDialogSaveRateField = this.editorSettingsDialog.element(by.tagName('input'));
  editorSettingsDialogDebugCheckbox = this.editorSettingsDialog.element(by.tagName('md-checkbox'));
  debugCheckbox = this.editorSettingsDialogDebugCheckbox.element(by.tagName('label'));
  debugInput = this.debugCheckbox.element(by.id('input-md-checkbox-1'));
  statisticsDialog = element(by.tagName('msd-branches-editor-panels-statistics'));
  statisticsDialogInputs = this.statisticsDialog.all(by.tagName('input'));

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getWidth(name) {
    return name.getSize().then( (panels) => {
      return panels.width;
    })
  }

  getProjectOptionsButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".secondary li")[0], ":hover").getPropertyValue("background-color")');
  }

  getEditorSettingsButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".secondary li")[1], ":hover").getPropertyValue("background-color")');
  }

  getStatisticsButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".secondary li")[2], ":hover").getPropertyValue("background-color")');
  }

  clickAllowBigPlayOverlay() {
    return browser.executeScript('return arguments[0].click()', this.allowBigPlayOverlayInput);
  }

  clickManualReplay() {
    return browser.executeScript('return arguments[0].click()', this.manualReplayInput);
  }

  clickAutoReplayCheckbox() {
    return browser.executeScript('return arguments[0].click()', this.autoReplayInput);
  }

  clickDebugCheckbox() {
    return browser.executeScript('return arguments[0].click()', this.debugInput);
  }

  isAllowBigPlayOverlayChecked() {
    return browser.executeScript('return arguments[0].checked', this.allowBigPlayOverlayInput);
  }

  isManualReplayChecked() {
    return browser.executeScript('return arguments[0].checked', this.manualReplayInput);
  }

  isAutoReplayChecked() {
    return browser.executeScript('return arguments[0].checked', this.autoReplayInput);
  }

  isDebugChecked() {
    return browser.executeScript('return arguments[0].checked', this.debugInput);
  }

}*/
