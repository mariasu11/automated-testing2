
// import { MsdBranchesEditorSideNavPage } from './sidenav.po';
// import {browser, element, by, Key, ExpectedConditions} from 'protractor';


/*describe('msd-branches-editor Sidenav Component', () => {
  let page: MsdBranchesEditorSideNavPage;

  beforeEach(() => {
    page = new MsdBranchesEditorSideNavPage();
    page.navigateTo();
  });

  it('should have a preview button', () => {
    page.navigateTo();
    expect(page.previewButton.isPresent()).toBe(true);
    expect(page.previewButton.isDisplayed()).toBe(true);
    expect(page.previewButton.getAttribute('title')).toEqual('Preview');
    expect(page.previewIcon.getText()).toEqual('visibility');
  });

  it('should have a undo button', () => {
    expect(page.undoButton.isPresent()).toBe(true);
    expect(page.undoButton.isDisplayed()).toBe(true);
    expect(page.undoButton.getAttribute('title')).toEqual('Undo');
    expect(page.undoIcon.getText()).toEqual('undo');
  });

  it('should have a redo button', () => {
    expect(page.redoButton.isPresent()).toBe(true);
    expect(page.redoButton.isDisplayed()).toBe(true);
    expect(page.redoButton.getAttribute('title')).toEqual('Redo');
    expect(page.redoIcon.getText()).toEqual('redo');
  });

  it('should have a project options button', () => {
    expect(page.projectOptionsButton.isPresent()).toBe(true);
    expect(page.projectOptionsButton.isDisplayed()).toBe(true);
    expect(page.projectOptionsButton.getAttribute('title')).toEqual('Project Options');
    expect(page.projectOptionsIcon.getText()).toEqual('settings_applications')
  });

  it('should have a editor settings button', () => {
    expect(page.editorSettingsButton.isPresent()).toBe(true);
    expect(page.editorSettingsButton.isDisplayed()).toBe(true);
    expect(page.editorSettingsButton.getAttribute('title')).toEqual('Editor Settings');
    expect(page.editorSettingsIcon.getText()).toEqual('perm_data_setting');
  });

  xit('should have a statistics button', () => { // button has been removed
    expect(page.statisticsButton.isPresent()).toBe(true);
    expect(page.statisticsButton.isDisplayed()).toBe(true);
    expect(page.statisticsButton.getAttribute('title')).toEqual('Statistics');
    expect(page.statisticsIcon.getText()).toEqual('assessment');
  });

  it('should have a save button', () => {
    expect(page.saveButton.isPresent()).toBe(true);
    expect(page.saveButton.isDisplayed()).toBe(true);
    expect(page.saveButton.getAttribute('title')).toEqual('Save');
    expect(page.saveIcon.getText()).toEqual('check');
  });

  it('should have a width of 70px', () => {
    expect(page.getWidth(page.sideNav)).toEqual(70);
  });

  it('should have a dark gray background', () => {
    expect(page.sideNav.getCssValue('background-color')).toEqual('rgba(58, 60, 59, 1)');
  });

  it('should change the background color of the Project Options button when hovered over', () => {
    browser.actions().mouseMove(page.projectOptionsButton).perform();
    expect(page.projectOptionsButton.getCssValue('background-color')).toContain('rgba(83, 83, 83,');
    expect(page.getProjectOptionsButtonHoverColor()).toContain('rgba(83, 83, 83,'); // which way is better?
  });

  it('should change the background color of the Editor Settings button when hovered over', () => {
    browser.actions().mouseMove(page.editorSettingsButton).perform();
    expect(page.editorSettingsButton.getCssValue('background-color')).toContain('rgba(83, 83, 83,');
    expect(page.getEditorSettingsButtonHoverColor()).toContain('rgba(83, 83, 83,'); // which way is better?
  });

  xit('should change the background color of the Statistics button when hovered over', () => { // statistics button removed
    browser.actions().mouseMove(page.statisticsButton).perform();
    expect(page.statisticsButton.getCssValue('background-color')).toContain('rgba(83, 83, 83,');
    expect(page.getStatisticsButtonHoverColor()).toContain('rgba(83, 83, 83,'); // which way is better?
  });

  it('should display the project options dialog when the project options button is clicked', () => {
    page.projectOptionsButton.click();
    expect(page.projectOptionsDialog.isPresent()).toBe(true);
    expect(page.projectOptionsDialog.isDisplayed()).toBe(true);
  });

  it('should display the project options dialog with a width of 400px when the project options button is clicked', () => {
    page.projectOptionsButton.click();
    expect(page.getWidth(page.projectOptionsDialog)).toEqual(400);
  });

  it('should update the name field of the project options dialog when changed', () => {
    page.projectOptionsButton.click();
    const initialName = page.projectOptionsDialogNameField.getAttribute('value');
    page.projectOptionsDialogNameField.clear();
    page.projectOptionsDialogNameField.sendKeys('My first project');
    page.projectOptionsButton.click();
    const finalName = page.projectOptionsDialogNameField.getAttribute('value');
    expect(finalName).toEqual('My first project');
    expect(initialName).not.toEqual(finalName);
  });

  it('should update the max replays field of the project options dialog when changed', () => {
    page.projectOptionsButton.click();
    const initialReplayNumber = page.projectOptionsDialogMaxReplaysField.getAttribute('value');
    page.projectOptionsDialogMaxReplaysField.clear();
    page.projectOptionsDialogMaxReplaysField.sendKeys('3');
    page.projectOptionsButton.click();
    const finalReplayNumber = page.projectOptionsDialogMaxReplaysField.getAttribute('value');
    expect(finalReplayNumber).toEqual('3');
    expect(initialReplayNumber).not.toEqual(finalReplayNumber);
  });

  it('should update the slide load depth field of the project options dialog when changed', () => {
    page.projectOptionsButton.click();
    const initialLoadDepth = page.projectOptionsDialogSlideLoadDepthField.getAttribute('value');
    page.projectOptionsDialogSlideLoadDepthField.clear();
    page.projectOptionsDialogSlideLoadDepthField.sendKeys('2');
    page.projectOptionsButton.click();
    const finalLoadDepth = page.projectOptionsDialogSlideLoadDepthField.getAttribute('value');
    expect(finalLoadDepth).toEqual('2');
    expect(initialLoadDepth).not.toEqual(finalLoadDepth);
  });

  it('should display a color picker in the project options dialog when the slides background color input is clicked', () => {
    page.projectOptionsButton.click();
    page.projectOptionsDialogSlidesBackgroundColor.click();
    expect(page.colorPicker.getCssValue('visibility')).toEqual('visible');
  });

  it('should update the slides background color field of the project options dialog when changed', () => {
    page.projectOptionsButton.click();
    const initialBackgroundColor = page.projectOptionsDialogSlidesBackgroundColor.getAttribute('value');
    page.projectOptionsDialogSlidesBackgroundColor.click();
    browser.actions().mouseDown(page.colorPickerCursor).mouseMove({x: 100, y: 25}).mouseUp().perform();
    page.projectOptionsButton.click();
    const finalBackgroundColor = page.projectOptionsDialogSlidesBackgroundColor.getAttribute('value');
    expect(finalBackgroundColor).toEqual('rgba(206,121,121,1)');
    expect(initialBackgroundColor).not.toEqual(finalBackgroundColor);
  });

  it('should display media library dialog with heading of Select Transcript when the Select button is clicked in the Project Options Dialog', () => {
    page.projectOptionsButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.projectOptionsTranscriptSelectButton), 3000);
    page.projectOptionsTranscriptSelectButton.click();
    expect(page.mediaLibraryDialog.isPresent()).toBe(true);
    expect(page.mediaLibraryDialog.isDisplayed()).toBe(true);
    expect(page.mediaLibraryDialogHeading.getText()).toEqual('Select Transcript');
  });

  it('should check or uncheck the allow big play overlay checkbox in the project options dialog when it is clicked', () => {
    page.projectOptionsButton.click();
    const initialState = page.isAllowBigPlayOverlayChecked();
    page.clickAllowBigPlayOverlay();
    const finalState = page.isAllowBigPlayOverlayChecked();
    expect(initialState).not.toEqual(finalState);
  });

  it('should check or uncheck the manual replay checkbox in the project options dialog when it is clicked', () => {
    page.projectOptionsButton.click();
    const initialState = page.isManualReplayChecked();
    page.clickManualReplay();
    const finalState = page.isManualReplayChecked();
    expect(initialState).not.toEqual(finalState);
  });

  it('should select the auto replay checkbox in the project options dialog when it is clicked', () => {
    page.projectOptionsButton.click();
    page.clickAutoReplayCheckbox();
    expect(page.isAutoReplayChecked()).toBe(true);
  });

  it('should display the editor settings dialog when the editor settings button is clicked', () => {
    page.editorSettingsButton.click();
    expect(page.editorSettingsDialog.isPresent()).toBe(true);
    expect(page.editorSettingsDialog.isDisplayed()).toBe(true);
  });

  it('should display the editor settings dialog with a width of 400px when the editor settings button is clicked', () => {
    page.editorSettingsButton.click();
    expect(page.getWidth(page.editorSettingsDialog)).toEqual(400);
  });

  it('should update the save rate field in the editor settings dialog when changed', () => {
    page.editorSettingsButton.click();
    const initialSaveRate = page.editorSettingsDialogSaveRateField.getAttribute('value');
    page.editorSettingsDialogSaveRateField.clear();
    page.editorSettingsDialogSaveRateField.sendKeys(90000);
    const finalSaveRate = page.editorSettingsDialogSaveRateField.getAttribute('value');
    expect(finalSaveRate).toEqual('90000');
    expect(initialSaveRate).not.toEqual(finalSaveRate);
  });

  it('should check or uncheck the Debug checkbox in the editor settings dialog when clicked', () => {
    page.editorSettingsButton.click();
    const initialState = page.isDebugChecked();

    page.clickDebugCheckbox();
    const finalState = page.isDebugChecked();
    expect(initialState).not.toEqual(finalState)
  });

  xit('should display the statistics dialog when the editor statistics button is clicked', () => {
    page.statisticsButton.click();
    expect(page.statisticsDialog.isPresent()).toBe(true);
    expect(page.statisticsDialog.isDisplayed()).toBe(true);
  });

  xit('should display the statistics dialog with a width of 400px when the statistics button is clicked', () => {
    page.statisticsButton.click();
    expect(page.getWidth(page.statisticsDialog)).toEqual(400);
  });

  xit('should disable all inputs in the Statistics Dialog', () => {
    page.statisticsButton.click();
    page.statisticsDialogInputs.each( (input) => {
      expect(input.isEnabled()).toBe(false);
    })
  });

  xit('should change the icon of the save button to a disk when clicked', () => {
    page.saveButton.click();
    expect(page.saveIcon.getText()).toEqual('save');
  });
});*/
