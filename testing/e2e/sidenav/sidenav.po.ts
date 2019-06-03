import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchesEditor} from '../editor.po';
import {DataFactory} from '../data-factory';

export class BranchesEditorSideNav extends BranchesEditor {
  //#region Elements
  dataFactory: DataFactory = new DataFactory();

  sideNavComponent: ElementFinder = this.branchesEditorComponent.$('msd-branches-editor-sidenav');
  primaryUL: ElementArrayFinder = this.sideNavComponent.$('.primary').$$('li');
  previewButton: ElementFinder = this.primaryUL.get(0);
  undoButton: ElementFinder = this.primaryUL.get(1);
  redoButton: ElementFinder = this.primaryUL.get(2);
  secondaryUL: ElementArrayFinder = this.sideNavComponent.$('.secondary').$$('li');
  projectOptionsButton: ElementFinder = this.secondaryUL.get(0);
  editorSettingsButton: ElementFinder = this.secondaryUL.get(1);
  statisticsButton: ElementFinder = this.secondaryUL.get(2);
  saveButton: ElementFinder = this.sideNavComponent.$('.save');
  previewIcon: ElementFinder = this.previewButton.$('md-icon');
  undoIcon: ElementFinder = this.undoButton.$('md-icon');
  redoIcon: ElementFinder = this.redoButton.$('md-icon');
  projectOptionsIcon: ElementFinder = this.projectOptionsButton.$('md-icon');
  editorSettingsIcon: ElementFinder = this.editorSettingsButton.$('md-icon');
  statisticsIcon: ElementFinder = this.statisticsButton.$('md-icon');
  saveIcon: ElementFinder = this.saveButton.$('md-icon');
  //#endregion

  //#region Functions
  isPreviewButtonDisplayed() {
    return this.previewButton.isDisplayed().then((result: boolean) => {
      return this.previewButton.getAttribute('title').then((title) => {
        return this.previewIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.PreviewButtonTitle && text === this.dataFactory.PreviewIconText
        })
      })
    })
  }

  isUndoButtonDisplayed() {
    return this.undoButton.isDisplayed().then((result: boolean) => {
      return this.undoButton.getAttribute('title').then((title) => {
        return this.undoIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.UndoButtonTitle && text === this.dataFactory.UndoIconText
        })
      })
    })
  }

  isRedoButtonDisplayed() {
    return this.redoButton.isDisplayed().then((result: boolean) => {
      return this.redoButton.getAttribute('title').then((title) => {
        return this.redoIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.RedoButtonTitle && text === this.dataFactory.RedoIconText
        })
      })
    })
  }

  isProjectOptionsButtonDisplayed() {
    return this.projectOptionsButton.isDisplayed().then((result) => {
      return this.projectOptionsButton.getAttribute('title').then((title) => {
        return this.projectOptionsIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.ProjectOptionsButtonTitle && text === this.dataFactory.ProjectOptionsIconText
        })
      })
    })
  }

  isEditorSettingsButtonDisplayed() {
    return this.editorSettingsButton.isDisplayed().then((result) => {
      return this.editorSettingsButton.getAttribute('title').then((title) => {
        return this.editorSettingsIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.EditorSettingsButtonTitle && text === this.dataFactory.EditorSettingsIconText
        })
      })
    })
  }

  isStatisticsButtonDisplayed() {
    return this.statisticsButton.isDisplayed().then((result) => {
      return this.statisticsButton.getAttribute('title').then((title) => {
        return this.statisticsIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.StatisticsButtonTitle && text === this.dataFactory.StatisticsIconText
        })
      })
    })
  }

  isSaveButtonDisplayed() {
    return this.saveButton.isDisplayed().then((result) => {
      return this.saveButton.getAttribute('title').then((title) => {
        return this.saveIcon.getText().then((text) => {
          return result === true && title === this.dataFactory.SaveButtonTitle && text === this.dataFactory.SaveIconText
        })
      })
    })
  }

  getWidth(name) {
    return name.getSize().then( (panel) => {
      return panel.width;
    })
  }
  //#endregion

}
