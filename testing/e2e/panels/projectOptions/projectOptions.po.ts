import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {DataFactory} from '../../data-factory';
import {BranchesEditor} from '../../editor.po';

export class ProjectOptionsPanel extends BranchesEditor {
  //#region Elements
  dataFactory: DataFactory = new DataFactory();

  dialog: ElementFinder = this.branchesEditorComponent.$('msd-branches-editor-panel-project-options');
  inputs: ElementArrayFinder = this.dialog.$('.pcontent').$$('input');
  nameField: ElementFinder = this.inputs.get(0);
  maxReplaysField: ElementFinder = this.inputs.get(2);
  slideLoadDepthField: ElementFinder = this.inputs.get(3);
  slidesBackgroundColor: ElementFinder = this.inputs.get(4);
  colorPicker: ElementFinder = $('color-picker').$('.color-picker');
  colorPickerCursor: ElementFinder = this.colorPicker.$('.saturation-lightness .cursor');
  transcriptSelectButton: ElementFinder = this.dialog.$('button');

  projectOptionsCheckboxes: ElementArrayFinder = this.dialog.$$('md-checkbox');
  allowBigPlayOverlayCheckbox: ElementFinder = this.projectOptionsCheckboxes.get(0).$('label');
  manualReplayCheckbox: ElementFinder = this.projectOptionsCheckboxes.get(1).$('label');
  autoReplayCheckbox: ElementFinder = this.projectOptionsCheckboxes.get(2).$('label');
  allowBigPlayOverlayInput: ElementFinder = this.allowBigPlayOverlayCheckbox.$('#input-md-checkbox-1');
  manualReplayInput: ElementFinder = this.manualReplayCheckbox.$('#input-md-checkbox-2');
  autoReplayInput: ElementFinder = this.autoReplayCheckbox.$('#input-md-checkbox-3');

  //#endregion

  //#region Functions

  getWidth(name) {
    return name.getSize().then( (panel) => {
      return panel.width;
    })
  }

  clickAllowBigPlayOverlay() {
    return browser.executeScript('return arguments[0].click()', this.allowBigPlayOverlayInput);
  }

  clickManualReplay() {
    return browser.executeScript('return arguments[0].click()', this.manualReplayInput);
  }

  clickAutoReplay() {
    return browser.executeScript('return arguments[0].click()', this.autoReplayInput);
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



  //#endregion

}
