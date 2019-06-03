import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {EditorSettingsPanel} from './editorSettings.po';


describe('msd-branches-editor Editor Settings Panel', () => {
  let sideNav: BranchesEditorSideNav;
  let editorSettingsPanel: EditorSettingsPanel;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    editorSettingsPanel =  new EditorSettingsPanel();
  }

  beforeEach(() => {
    initializePageObjects();
    editorSettingsPanel.navigateTo();
    editorSettingsPanel.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should display the editor settings dialog when the editor settings button is clicked', (done: DoneFn) => {
    sideNav.editorSettingsButton.click()
      .then(() => expect(editorSettingsPanel.dialog.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the editor settings dialog with a width of 400px when the editor settings button is clicked', (done: DoneFn) => {
    sideNav.editorSettingsButton.click()
      .then(() => expect(editorSettingsPanel.getWidth(editorSettingsPanel.dialog)).toEqual(400))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the save rate field in the editor settings dialog when changed', (done: DoneFn) => {
    let initialSaveRate;
    let finalSaveRate;
    sideNav.editorSettingsButton.click()
      .then(() => editorSettingsPanel.saveRateField.getAttribute('value').then((value) => { initialSaveRate = value } ))
      .then(() => editorSettingsPanel.saveRateField.clear())
      .then(() => editorSettingsPanel.saveRateField.sendKeys(90000))
      .then(() => editorSettingsPanel.saveRateField.getAttribute('value').then((value) => { finalSaveRate = value } ))
      .then(() => expect(initialSaveRate).not.toEqual(finalSaveRate))
      .then(() => expect(finalSaveRate).toEqual('90000'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should check or uncheck the Debug checkbox in the editor settings dialog when clicked', (done: DoneFn) => {
    let initialState;
    let finalState;
    sideNav.editorSettingsButton.click()
      .then(() => editorSettingsPanel.isDebugChecked().then((value) => { initialState = value } ))
      .then(() => editorSettingsPanel.clickDebugCheckbox())
      .then(() => editorSettingsPanel.isDebugChecked().then((value) => { finalState = value} ))
      .then(() => expect(initialState).not.toEqual(finalState))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
