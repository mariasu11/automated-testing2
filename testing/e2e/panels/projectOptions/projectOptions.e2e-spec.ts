import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {DataFactory} from '../../data-factory';
import {ProjectOptionsPanel} from './projectOptions.po';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {MedialibraryPageObject} from '../../dialogs/medialibrary/medialibrary.po';


describe('msd-branches-editor Project Options Panel', () => {
  let projectOptionsPanel: ProjectOptionsPanel;
  let dataFactory: DataFactory;
  let sideNav: BranchesEditorSideNav;
  let medialibrary: MedialibraryPageObject;

  function initializePageObjects(): void {
    projectOptionsPanel = new ProjectOptionsPanel();
    dataFactory = new DataFactory();
    sideNav = new BranchesEditorSideNav();
    medialibrary = new MedialibraryPageObject()
  }

  beforeEach(() => {
    initializePageObjects();
    projectOptionsPanel.navigateTo();
    projectOptionsPanel.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });


  it('should display the project options dialog with a width of 400px when the project options button is clicked', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.getWidth(projectOptionsPanel.dialog).then((width) => expect(width).toEqual(400)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the name field of the project options dialog when changed', (done: DoneFn) => {
    let initialName;
    let finalName;
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.nameField.getAttribute('value').then((initialValue) => {initialName = initialValue} ))
      .then(() => projectOptionsPanel.nameField.clear())
      .then(() => projectOptionsPanel.nameField.sendKeys('My first project'))
      .then(() => sideNav.projectOptionsButton.click())
      .then(() => projectOptionsPanel.nameField.getAttribute('value').then((finalValue) => {finalName = finalValue} ))
      .then(() => expect(initialName).not.toEqual(finalName))
      .then(() => expect(finalName).toEqual('My first project'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the max replays field of the project options dialog when changed', (done: DoneFn) => {
    let initialReplayNumber;
    let finalReplayNumber;
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.maxReplaysField.getAttribute('value').then((initialValue) => {initialReplayNumber = initialValue}))
      .then(() => projectOptionsPanel.maxReplaysField.clear())
      .then(() => projectOptionsPanel.maxReplaysField.sendKeys('3'))
      .then(() => sideNav.projectOptionsButton.click())
      .then(() => projectOptionsPanel.maxReplaysField.getAttribute('value').then((finalValue) => {finalReplayNumber = finalValue}))
      .then(() => expect(initialReplayNumber).not.toEqual(finalReplayNumber))
      .then(() => expect(finalReplayNumber).toEqual('3'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

   it('should update the slide load depth field of the project options dialog when changed', (done: DoneFn) => {
     let initialLoadDepth;
     let finalLoadDepth;

     sideNav.projectOptionsButton.click()
       .then(() => projectOptionsPanel.slideLoadDepthField.getAttribute('value').then((initialValue) => {initialLoadDepth = initialValue}))
       .then(() => projectOptionsPanel.slideLoadDepthField.clear())
       .then(() => projectOptionsPanel.slideLoadDepthField.sendKeys('2'))
       .then(() => sideNav.projectOptionsButton.click())
       .then(() => projectOptionsPanel.slideLoadDepthField.getAttribute('value').then((finalValue) => {finalLoadDepth = finalValue} ))
       .then(() => expect(initialLoadDepth).not.toEqual(finalLoadDepth))
       .then(() => expect(finalLoadDepth).toEqual('2'))
       .then(done)
       .catch((err: Error) => done.fail(err));
   });

  it('should display a color picker in the project options dialog when the slides background color input is clicked', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.slidesBackgroundColor.click())
      .then(() => expect(projectOptionsPanel.colorPicker.getCssValue('visibility')).toEqual('visible'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the slides background color field of the project options dialog when changed', (done: DoneFn) => {
    let initialBackgroundColor;
    let finalBackgroundColor;

    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.slidesBackgroundColor.getAttribute('value').then((initialValue) => {initialBackgroundColor = initialValue }))
      .then(() => projectOptionsPanel.slidesBackgroundColor.click())
      .then(() => browser.actions().mouseDown(projectOptionsPanel.colorPickerCursor).mouseMove({x: 100, y: 25}).mouseUp().perform())
      .then(() => sideNav.projectOptionsButton.click())
      .then(() => projectOptionsPanel.slidesBackgroundColor.getAttribute('value').then((finalValue) => {finalBackgroundColor = finalValue}))
      .then(() => expect(finalBackgroundColor).not.toEqual(initialBackgroundColor))
      // .then(() => expect(finalBackgroundColor).toEqual(dataFactory.FinalBackgroundColor)) rgb value evaluates differently every time.
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display media library dialog when the Select button is clicked in the Project Options Dialog', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => browser.wait(ExpectedConditions.elementToBeClickable(projectOptionsPanel.transcriptSelectButton), 3000))
      .then(() => projectOptionsPanel.transcriptSelectButton.click())
      .then(() => expect(medialibrary.dialog.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should check or uncheck the allow big play overlay checkbox in the project options dialog when it is clicked', (done: DoneFn) => {
    let initialState;
    let finalState;
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.isAllowBigPlayOverlayChecked().then((initial) => {initialState = initial}))
      .then(() => projectOptionsPanel.clickAllowBigPlayOverlay())
      .then(() => projectOptionsPanel.isAllowBigPlayOverlayChecked().then((final) => {finalState = final}))
      .then(() => expect(initialState).not.toEqual(finalState))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should check or uncheck the manual replay checkbox in the project options dialog when it is clicked', (done: DoneFn) => {
    let initialState;
    let finalState;
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.isManualReplayChecked().then((initial) => {initialState = initial}))
      .then(() => projectOptionsPanel.clickManualReplay())
      .then(() => projectOptionsPanel.isManualReplayChecked().then((final) => {finalState = final}))
      .then(() => expect(initialState).not.toEqual(finalState))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should check or uncheck the auto replay checkbox in the project options dialog when it is clicked', (done: DoneFn) => {
    let initialState;
    let finalState;
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.isAutoReplayChecked().then((initial) => {initialState = initial}))
      .then(() => projectOptionsPanel.clickAutoReplay())
      .then(() => projectOptionsPanel.isAutoReplayChecked().then((final) => {finalState = final}))
      .then(() => expect(initialState).not.toEqual(finalState))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should uncheck the manual replay checkbox when the autoreplay checkbox is checked and vice versa', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => projectOptionsPanel.clickManualReplay())
      .then(() => projectOptionsPanel.isAutoReplayChecked().then((boolean) => expect(boolean).toEqual(false) ))
      .then(() => projectOptionsPanel.clickAutoReplay())
      .then(() => projectOptionsPanel.isManualReplayChecked().then((boolean) => expect(boolean).toEqual(false) ))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
