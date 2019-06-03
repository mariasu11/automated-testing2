import { BranchesEditorSideNav } from './sidenav.po';
import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {DataFactory} from '../data-factory';
import {ProjectOptionsPanel} from "../panels/projectOptions/projectOptions.po";


describe('msd-branches-editor Sidenav Component', () => {
  let sideNav: BranchesEditorSideNav;
  let dataFactory: DataFactory;
  let projectOptionsPanel

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    dataFactory = new DataFactory();
    projectOptionsPanel = new ProjectOptionsPanel();
  }

  beforeEach(() => {
    initializePageObjects();
    sideNav.navigateTo();
    sideNav.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should have a preview button', (done: DoneFn) => {
    return sideNav.isPreviewButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a undo button', (done: DoneFn) => {
    return sideNav.isUndoButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a redo button', (done: DoneFn) => {
    return sideNav.isRedoButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a project options button', (done: DoneFn) => {
    return sideNav.isProjectOptionsButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a editor settings button', (done: DoneFn) => {
    return sideNav.isEditorSettingsButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  xit('should have a statistics button', (done: DoneFn) => { // button has been removed
    return sideNav.isStatisticsButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a save button', (done: DoneFn) => {
    return sideNav.isSaveButtonDisplayed().then((result: boolean) => expect (result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a width of 70px', (done: DoneFn) => {
    return sideNav.getWidth(sideNav.sideNavComponent).then((width) => expect(width).toEqual(70))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a dark gray background', (done: DoneFn) => {
    return sideNav.sideNavComponent.getCssValue('background-color').then((color) => expect(color).toEqual(dataFactory.SideNavBackgroundColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the background color of the Project Options button when hovered over', (done: DoneFn) => {
    browser.actions().mouseMove(sideNav.projectOptionsButton).perform()
      .then(() => sideNav.projectOptionsButton.getCssValue('background-color').then((color) => expect(color).toContain(dataFactory.SideNavButtonHoverColor)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the background color of the Editor Settings button when hovered over', (done: DoneFn) => {
    browser.actions().mouseMove(sideNav.editorSettingsButton).perform()
      .then(() => sideNav.editorSettingsButton.getCssValue('background-color').then((color) => expect(color).toContain(dataFactory.SideNavButtonHoverColor)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  xit('should change the background color of the Statistics button when hovered over', () => { // statistics button removed

  });

  it('should display the project options dialog when the project options button is clicked', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => expect(projectOptionsPanel.dialog.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
  /*
  xit('should change the icon of the save button to a disk when clicked', () => { // this doesnt happen anymore
       page.saveButton.click();
       expect(page.saveIcon.getText()).toEqual('save');
  });
  */
});
