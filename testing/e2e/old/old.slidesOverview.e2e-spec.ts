// import { MsdBranchesEditorSlidesOverview } from './slidesOverview.po';
// import {browser, element, by, Key, ExpectedConditions} from 'protractor';
// import {toBase64String} from "@angular/compiler/src/output/source_map";


/*describe('msd-branches-editor Slides Overview', () => {
  let page: MsdBranchesEditorSlidesOverview;

  beforeEach(() => {
    page = new MsdBranchesEditorSlidesOverview();
    page.navigateTo();
  });

  xit('should contain a canvas', () => {
    page.navigateTo();
    expect(page.canvas.isPresent()).toBe(true);
  });

  xit('should contain gridlines', () => { // correct way to check this?
    expect(page.grid.getAttribute('msd-branches-editor-svg-grid')).toEqual('');
  });

  xit('should contain slides connected with branching logic', () => { // correct way to check this?
    expect(page.slides.isPresent()).toBe(true);
    expect(page.slides.count()).toBeGreaterThanOrEqual(1);
    expect(page.branches.isPresent()).toBe(true);
  });

  xit('should contain a title and an object count on each slide', () => { // correct way to check this?
    page.slideObjects.each((slide) => {
      expect(slide.element(by.css('.title tspan')).getText()).toBeDefined(); // title of the slide
    });

    page.slideObjects.each( (slide) => {
      expect(slide.element(by.css('.objectcount')).getText()).toBeDefined();
    })
  });

  xit('should contain a tools menu', () => {
    expect(page.toolsMenu.isPresent()).toBe(true);
    expect(page.toolsMenu.isDisplayed()).toBe(true);
  });

  xit('should contain 4 buttons in the tools menu', () => {
    expect(page.toolsMenuButtons.count()).toEqual(4);
    expect(page.lockCameraMovementAndZoomButton.getAttribute('title')).toEqual('Lock Camera Movement & Zoom');
    expect(page.zoomExtentsButton.getAttribute('title')).toEqual('Zoom Extents');
    expect(page.zoomInButton.getAttribute('title')).toEqual('Zoom In');
    expect(page.zoomOutButton.getAttribute('title')).toEqual('Zoom Out');
  });

  xit('should contain the correct icon for each button in the tools menu', () => {
    expect(page.getIconText(page.lockCameraMovementAndZoomButton)).toEqual('lock');
    expect(page.getIconText(page.zoomExtentsButton)).toEqual('fullscreen');
    expect(page.getIconText(page.zoomInButton)).toEqual('zoom_in');
    expect(page.getIconText(page.zoomOutButton)).toEqual('zoom_out');
  });

  xit('should change the color of a slide to green when hovered over', () => {
    expect(page.getSlideColor()).toEqual('rgb(196, 196, 196)'); // default
    expect(page.firstSlide.getAttribute('class')).not.toContain('hover'); // default
    browser.actions().mouseMove(page.firstSlide).perform();
    browser.sleep(5000);
    expect(page.firstSlide.getAttribute('class')).toContain('hover'); // hover
    expect(page.getSlideColor()).toEqual('rgb(0, 185, 93)');

  });

  xit('should change the color of a slide to green when it is clicked', () => {
    page.firstSlideSelector.click();
    browser.sleep(5000);
    expect(page.getSlideColor()).toEqual('rgb(0, 185, 93)');
  });

  xit('should display a slide menu with 7 buttons when a slide is clicked', () => {
    page.firstSlideSelector.click();
    expect(page.slideMenu.isDisplayed()).toBe(true);
    expect(page.slideMenuButtons.count()).toEqual(8);
    expect(page.removeSelectedSlideButton.getAttribute('title')).toEqual('Remove Selected Slide');
    expect(page.enterEditorModeButton.getAttribute('title')).toEqual('Enter Editor Mode');
    expect(page.moveSlideToAnotherBranchButton.getAttribute('title')).toEqual('Move Slide To Another Branch');
    expect(page.toggleAddSlideMenuButton.getAttribute('title')).toEqual('Toggle Add Slide Menu');
    expect(page.toggleAddExistingSlideMenuButton.getAttribute('title')).toEqual('Toggle Add Existing Slide Menu');
    expect(page.duplicateExistingSlideButton.getAttribute('title')).toEqual('Duplicate Existing Slide')
    expect(page.toggleAddObjectsMenuButton.getAttribute('title')).toEqual('Toggle Add Objects Menu');
    expect(page.editSlideButton.getAttribute('title')).toEqual('Edit Slide');
  });

  xit('should display correct icon for each button in the slide menu', () => {
    page.firstSlideSelector.click();
    expect(page.getIconText(page.removeSelectedSlideButton)).toEqual('delete');
    expect(page.getIconText(page.enterEditorModeButton)).toEqual('open_in_new');
    expect(page.getIconText(page.moveSlideToAnotherBranchButton)).toEqual('swap_calls');
    expect(page.getIconText(page.toggleAddSlideMenuButton)).toEqual('add');
    expect(page.getIconText(page.toggleAddExistingSlideMenuButton)).toEqual('library_add');
    expect(page.getIconText(page.duplicateExistingSlideButton)).toEqual('content_copy');
    expect(page.getIconText(page.toggleAddObjectsMenuButton)).toEqual('videogame_asset');
    expect(page.getIconText(page.editSlideButton)).toEqual('edit');
  });

  xit('should disable the remove selected slide button and and move slide to another branch button when the first slide is selected', () => {
    page.firstSlideSelector.click();
    expect(page.removeSelectedSlideButton.isEnabled()).toBe(false);
    expect(page.moveSlideToAnotherBranchButton.isEnabled()).toBe(false);
    expect(page.duplicateExistingSlideButton.isEnabled()).toBe(false);
  });

  xit('should disable the remove selected slide button only when any slide in between the first and last slide is selected', () => {
    page.secondSlideSelector.click();
    expect(page.removeSelectedSlideButton.isEnabled()).toBe(false);

    page.slideMenuButtons.then( (buttons) => {
      for (let i = 1; i < buttons.length; i++) {
        expect(buttons[i].isEnabled()).toBe(true);
      }
    })
  });

  xit('should enable all buttons in the slide menu when the last slide is selected', () => {
    page.selectableSlides.last().click();
    page.slideMenuButtons.each( (button) => {
      expect(button.isEnabled()).toBe(true);
    });
  });

  xit('should remove the last slide if it is selected and the user clicks on the Remove Selected Slide button in the Slide menu', () => {
    page.selectableSlides.last().click();
    page.removeSelectedSlideButton.click();
    expect(browser.isElementPresent(page.fifthSlideSelector)).toBe(false);
  });

  xit('should open the slide editor for the selected slide when Enter Editor Mode button is clicked on the Slide menu', () => {
    expect(page.secondSlideTitle).toEqual('Scene 005'); // second slide title
    page.secondSlideSelector.click();
    expect(browser.isElementPresent(page.slidesEditor)).toBe(false); // slide editor not present
    page.enterEditorModeButton.click();
    expect(browser.isElementPresent(page.slidesEditor)).toBe(true); // slide editor present
    const fourthTabGroupLabel = page.getFourthTabGroupLabel();
    expect(fourthTabGroupLabel).toEqual('Slide - Scene 005'); // 4th tab label updated to match the selected slide
  });

  xit('should display the move mode overlay when the move slide to another branch button is clicked after a slide is selected', () => {
    page.secondSlideSelector.click();
    page.moveSlideToAnotherBranchButton.click();
    const moveModeOverlay = page.getModeOverlay();
    expect(moveModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Move Mode');
  });

  xit('should add a gray overlay on top of the grid when the move slide to another branch button is clicked after a slide is selected', () => {
    page.secondSlideSelector.click();
    page.moveSlideToAnotherBranchButton.click();
    const grayOverlay = page.getGrayOverlay();
    expect(grayOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayColor()).toEqual('rgb(37, 37, 37)');
    expect(page.getOverlayOpacity()).toEqual('0.5');
  });

  xit('should dim and not display a cursor on slides that cannot be selected when the move slide to another branch button is clicked after a slide is selected', () => {
    page.thirdSlideSelector.click();
    page.moveSlideToAnotherBranchButton.click();
    expect(page.getSecondSlideOpacity()).toEqual('0.5');
    expect(page.getSecondSlideCursor()).toEqual('none');
  });

  xit('should correctly move slide to the selected slide when the move slide to another branch button is clicked', () => {
    expect(page.firstSlideBranches.count()).toEqual(1);
    page.thirdSlideSelector.click();
    page.moveSlideToAnotherBranchButton.click();
    page.firstSlideSelector.click();
    expect(page.firstSlideBranches.count()).toEqual(2);
  });

  xit('should display a submenu when the toggle add slide menu button is clicked', () => {
    page.secondSlideSelector.click();
    expect(browser.isElementPresent(page.branchLogicSubMenu)).toBe(false);
    page.toggleAddSlideMenuButton.click();
    expect(page.branchLogicSubMenu.isDisplayed()).toBe(true);
  });

  xit('should display 4 buttons in the submenu when the toggle add slide menu button is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    expect(page.branchLogicSubMenuButtons.count()).toEqual(4);
    expect(page.continueButton.getAttribute('title')).toEqual('Continue');
    expect(page.outcomeButton.getAttribute('title')).toEqual('Outcome');
    expect(page.selectionButton.getAttribute('title')).toEqual('Selection');
    expect(page.tallyButton.getAttribute('title')).toEqual('Tally');
  });

  xit('should change the color of the continue button to yellow when hovered over ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    expect(page.getContinueButtonBackgroundColor()).toEqual('rgb(0, 103, 168)'); // blue. can use this function or use getCssValue as in the next test.
    browser.actions().mouseMove(page.continueButton).perform();
    browser.sleep(5000);
    expect(page.continueButton.getCssValue('background-color')).toEqual('rgba(255, 215, 64, 1)');
    expect(page.getContinueButtonHoverColor()).toEqual('rgb(255, 215, 64)'); // yellow
  });

  xit('should change the color of the outcome button to yellow when hovered over ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    expect(page.outcomeButton.getCssValue('background-color')).toEqual('rgba(207, 98, 78, 1)'); // orange
    browser.actions().mouseMove(page.outcomeButton).perform();
    browser.sleep(5000);
    expect(page.outcomeButton.getCssValue('background-color')).toEqual('rgba(255, 215, 64, 1)');
    expect(page.getOutcomeButtonHoverColor()).toEqual('rgb(255, 215, 64)'); // yellow
  });

  xit('should change the color of the selection button to yellow when hovered over ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    expect(page.selectionButton.getCssValue('background-color')).toEqual('rgba(8, 148, 155, 1)'); // teal
    browser.actions().mouseMove(page.selectionButton).perform();
    browser.sleep(5000);
    expect(page.selectionButton.getCssValue('background-color')).toEqual('rgba(255, 215, 64, 1)');
    expect(page.getSelectionButtonHoverColor()).toEqual('rgb(255, 215, 64)'); // yellow
  });

  xit('should change the color of the tally button to yellow when hovered over ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    expect(page.tallyButton.getCssValue('background-color')).toEqual('rgba(173, 117, 42, 1)'); // teal
    browser.actions().mouseMove(page.tallyButton).perform();
    browser.sleep(5000);
    expect(page.tallyButton.getCssValue('background-color')).toEqual('rgba(255, 215, 64, 1)');
    expect(page.getTallyButtonHoverColor()).toEqual('rgb(255, 215, 64)'); // yellow
  });

  xit('should display a new slide dialog when the continue button is clicked ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    expect(page.newSlideDialog.isDisplayed()).toBe(true);
  });

  xit('should display a new slide dialog when the outcome button is clicked ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.outcomeButton.click();
    expect(page.newSlideDialog.isDisplayed()).toBe(true);
  });

  xit('should display a new slide dialog when the selection button is clicked ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.selectionButton.click();
    expect(page.newSlideDialog.isDisplayed()).toBe(true);
  });

  xit('should display a new slide dialog when the tally button is clicked ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.tallyButton.click();
    expect(page.newSlideDialog.isDisplayed()).toBe(true);
  });

  xit('should allow the user to enter a slide title on the new slide dialog which updates the heading of the dialog ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    page.slideTitleInput.sendKeys('My New Slide');
    expect(page.slideDialogHeading.getText()).toEqual('New Slide - My New Slide')
  });

  xit('should contain a text area where the user can enter a description of the new slide in the New slide dialog ', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    page.descriptionTextArea.sendKeys('Look at my new slide');
    expect(page.descriptionTextArea.getAttribute('value')).toEqual('Look at my new slide');
  });

  xit('should contain input elements to change the slides background color and max number of replays on the new slide dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    expect(page.slidesbackgroundColorInput.isPresent()).toBe(true);
    expect(page.slidesbackgroundColorInput.getAttribute('placeholder')).toEqual('Slides Background Color');
    expect(page.maxReplaysInput.isPresent()).toBe(true);
    expect(page.maxReplaysInput.getAttribute('placeholder')).toEqual('Max Replay\'s');
  });

  xit('should contain six checkboxes on the new slide dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    expect(page.allCheckboxInputs.count()).toEqual(6);
    expect(page.manualReplayLabel.getText()).toEqual('Manual Replay');
    expect(page.autoReplayLabel.getText()).toEqual('Auto Replay');
    expect(page.autoPlayLabel.getText()).toEqual('Auto Play');
    expect(page.showControlsLabel.getText()).toEqual('Show Controls');
    expect(page.showProgressLabel.getText()).toEqual('Show Progress');
    expect(page.branchToURLLabel.getText()).toEqual('Branch To URL?');
  });

  xit('should contain a cancel and confirm button on the new slide dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    expect(page.getAllActionButtons(page.newSlideDialog).count()).toEqual(2);
    expect(page.cancelButtonName.getText()).toEqual('Cancel');
    expect(page.confirmButtonName.getText()).toEqual('Confirm');
  });

  xit('should change the background color of the cancel button to red when hovered over on the new slide dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.newSlideDialog), 5000); // wait for it to appear
    expect(page.getCancelButton(page.newSlideDialog).getCssValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
    browser.actions().mouseMove(page.cancelButton).perform();
    expect(page.getCancelButtonHoverColor()).toEqual('rgb(142, 0, 0)'); // use a function or mosemove and getCSS Value combination?
    expect(page.getCancelButton(page.newSlideDialog).getCssValue('background-color')).toEqual('rgba(142, 0, 0, 1)');
  });

  xit('should change the background color of the confirm button to yellow when hovered over on the new slide dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.newSlideDialog), 5000); // wait for it to appear
    expect(page.getConfirmButton(page.newSlideDialog).getCssValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
    browser.actions().mouseMove(page.confirmButton).perform();
    expect(page.getConfirmButtonHoverColor()).toEqual('rgb(255, 215, 64)'); // use a function or mosemove and getCSS Value combination?
    expect(page.getConfirmButton(page.newSlideDialog).getCssValue('background-color')).toEqual('rgba(255, 215, 64, 1)');
  });

  xit('should remove the new slide dialog when the cancel button is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    expect(page.newSlideDialog.isDisplayed()).toBe(true);
    page.getCancelButton(page.newSlideDialog).click();
    browser.wait(ExpectedConditions.invisibilityOf(page.newSlideDialog), 5000); // wait for dialog to be removed
    expect(browser.isElementPresent(page.newSlideDialog)).toBe(false);
  });

  xit('should add a new slide to the canvas when the confirm button is clicked the new slide dialog', () => {
    expect(page.numberOfSecondSlideBranches()).toEqual(1);
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.continueButton.click();
    page.slideTitleInput.sendKeys('My New Slide');
    page.getConfirmButton(page.newSlideDialog).click();
    browser.wait(ExpectedConditions.invisibilityOf(page.newSlideDialog), 5000); // wait for dialog to be removed
    expect(page.numberOfSecondSlideBranches()).toEqual(2);
    expect(page.getNewSlideTitle()).toEqual('My New Slide');
  });

  xit('should add the correct branching logic to the new slide when the confirm button is clicked the new slide dialog', () => { // should this be done for each type of branch logic?
    page.secondSlideSelector.click();
    page.toggleAddSlideMenuButton.click();
    page.selectionButton.click();
    page.slideTitleInput.sendKeys('My New Slide');
    page.getConfirmButton(page.newSlideDialog).click();
    browser.wait(ExpectedConditions.invisibilityOf(page.newSlideDialog), 5000); // wait for dialog to be removed
    expect(page.numberOfSecondSlideBranches()).toEqual(2);
    expect(page.secondSlideBranchLogicToNewSlide()).toContain('selection');
  });

  xit('should display a submenu when the toggle add existing slide menu button is clicked', () => {
    page.secondSlideSelector.click();
    expect(browser.isElementPresent(page.branchLogicSubMenu)).toBe(false);
    page.toggleAddExistingSlideMenuButton.click();
    expect(page.branchLogicSubMenu.isDisplayed()).toBe(true);
  });

  xit('should display the select an existing slide overlay when the continue button from the toggle add existing slide button submenu is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.continueButton.click();
    const selectExistingSlideModeOverlay = page.getModeOverlay();
    expect(selectExistingSlideModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Select an Existing Slide');
  });

  xit('should display the select an existing slide overlay when the outcome button from the toggle add existing slide button submenu is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.outcomeButton.click();
    const selectExistingSlideModeOverlay = page.getModeOverlay();
    expect(selectExistingSlideModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Select an Existing Slide');
  });

  xit('should display the select an existing slide overlay when the selection button from the toggle add existing slide button submenu is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.selectionButton.click();
    const selectExistingSlideModeOverlay = page.getModeOverlay();
    expect(selectExistingSlideModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Select an Existing Slide');
  });

  xit('should display the select an existing slide overlay when the tally button from the toggle add existing slide button submenu is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.tallyButton.click();
    const selectExistingSlideModeOverlay = page.getModeOverlay();
    expect(selectExistingSlideModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Select an Existing Slide');
  });

  xit('should add a gray overlay on top of the grid when the continue button is clicked from the toggle add existing slide button submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.continueButton.click();
    const grayOverlay = page.getGrayOverlay();
    expect(grayOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayColor()).toEqual('rgb(37, 37, 37)');
    expect(page.getOverlayOpacity()).toEqual('0.5');
  });

  xit('should dim and not display a cursor on slides that cannot be selected on the select an existing slide overlay ', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.continueButton.click();
    expect(page.getSecondSlideOpacity()).toEqual('0.5');
    expect(page.getSecondSlideCursor()).toEqual('none');
  });

  xit('should change the color of slides that can be selected to green when hovered over on the select an existing slide overlay ', () => {
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.continueButton.click();
    expect(page.firstSlide.getCssValue('fill')).toEqual('rgb(196, 196, 196)');
    browser.actions().mouseMove(page.firstSlide).perform();
    browser.sleep(5000);
    expect(page.firstSlide.getCssValue('fill')).toEqual('rgb(0, 185, 93)');
  });

  xit('should add the selected existing slide to the originally selected slide when chosen from the select an existing slide overlay ', () => {
    expect(page.numberOfSecondSlideBranches()).toEqual(1);
    page.secondSlideSelector.click();
    page.toggleAddExistingSlideMenuButton.click();
    page.continueButton.click();
    page.firstSlideSelector.click();
    expect(page.numberOfSecondSlideBranches()).toEqual(2);
    expect(page.getNewSlideTitle()).toEqual(page.firstSlideTitle);
  });

  xit('should add the correct branching logic after a slide is selected from the select an existing slide overlay', () => {
  // Currently, only continue logic is added even if another branch logic is selected from the toggle add existing slide submenu.

  });

  xit('should display the duplicate mode overlay when the duplicate existing slide button is clicked ', () => {
    page.secondSlideSelector.click();
    page.duplicateExistingSlideButton.click();
    const moveModeOverlay = page.getModeOverlay();
    expect(moveModeOverlay.isDisplayed()).toBe(true);
    expect(page.getOverlayHeading()).toEqual('Duplicate Mode');
  });

  xit('should duplicate existing slides to the slide you selected in the duplicate mode overlay as long as it comes before the originally selected slide*', () => {
    const initialSlidesNumber = page.slideObjects.count();
    page.secondSlideSelector.click();
    page.duplicateExistingSlideButton.click();
    page.firstSlideSelector.click();
    browser.sleep(3000);
    const finalSlidesNumber = page.slideObjects.count();
    initialSlidesNumber.then((number) => {
      expect(finalSlidesNumber).toBeGreaterThan(number)
    });
    expect(finalSlidesNumber).not.toEqual(initialSlidesNumber);
  });

  xit('should display a submenu with three buttons when the toggle add objects button is clicked in the slide menu ', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    expect(page.addObjectsSubMenu.isDisplayed()).toBe(true);
    expect(page.addObjectsSubMenuButtons.count()).toEqual(3);
    expect(page.addCEToolsToSlideButton.getAttribute('title')).toEqual('Add CE Tool(s) (Widgets, mmps, etc) to Slide');
    expect(page.addMediaObjectsToSlideButton.getAttribute('title')).toEqual('Add Media Objects to Slide');
    expect(page.addWebObjectsPlaceholdersToSlideButton.getAttribute('title')).toEqual('Add Web Objects Placeholders to Slide');
  });

  xit('should display correct icons for each button in the submenu when the toggle add objects button is clicked in the slide menu ', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    expect(page.getIconText(page.addCEToolsToSlideButton)).toEqual('widgets');
    expect(page.getIconText(page.addMediaObjectsToSlideButton)).toEqual('perm_media');
    expect(page.getIconText(page.addWebObjectsPlaceholdersToSlideButton)).toEqual('web_asset');
  });

  xit('should display a tool library dialog with the heading New CE Tool - when the add CE tools to slide button is clicked in the add objects submenu ', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    expect(page.toolLibraryDialog.isDisplayed()).toBe(true);
    expect(page.toolLibraryDialogHeading.getText()).toEqual('New CE Tool -')
  });

  xit('should update the tool library dialog heading when the Tool Name input is changed by the user ', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    page.toolNameInput.sendKeys('My new tool');
    expect(page.toolLibraryDialogHeading.getText()).toEqual('New CE Tool - My new tool');
    expect(page.toolNameInput.getAttribute('value')).toEqual('My new tool');
  });

  xit('should update Tool URL field when the input is changed by the user ', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    page.toolURLInput.sendKeys('www.google.com');
    expect(page.toolURLInput.getAttribute('value')).toEqual('www.google.com');
  });

  xit('should display a selection box with 27 options for widget type when the widget type dropdown is clicked in the tool library dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.toolLibraryDialog), 3000);
    page.CEWidgetTypeDropdown.click();
    expect(page.CEWidgetTypes.count()).toEqual(27);
  });

  xit('should remove the tool library dialog when the cancel button is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    expect(page.toolLibraryDialog.isDisplayed()).toBe(true);
    page.getCancelButton(page.toolLibraryDialog).click();
    browser.wait(ExpectedConditions.invisibilityOf(page.toolLibraryDialog), 5000); // wait for dialog to be removed
    expect(browser.isElementPresent(page.toolLibraryDialog)).toBe(false);
  });

  xit('should increment the object count on the slide when the confirm button is clicked on the tool library dialog', () => {
    page.secondSlideSelector.click();
    const initialObjectCount = page.getObjectCount(page.slideObjects.get(1));
    page.toggleAddObjectsMenuButton.click();
    page.addCEToolsToSlideButton.click();
    page.getConfirmButton(page.toolLibraryDialog).click();
    browser.sleep(3000);
    const finalObjectCount = page.getObjectCount(page.slideObjects.get(1));
    expect(Number(finalObjectCount)).toEqual(Number(initialObjectCount) + 1);
  });

  xit('should open the media library dialog when the add media objects to slide button is clicked in the toggle add objects submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    expect(page.mediaLibraryDialog.isDisplayed()).toBe(true);
  });

  xit('should have the heading Select Media to Create Slide Element(s) on the the media library dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    expect(page.mediaLibraryDialogHeading.getText()).toEqual('Select Media To Create Slide Element(s)');
  });

  xit('should have a close button with a yellow hover color on the the media library dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    expect(page.mediaLibraryDialogCloseButton.isDisplayed()).toBe(true);
    browser.actions().mouseMove(page.mediaLibraryDialogCloseButton).perform();
    expect(page.getMediaDialogCloseButtonHoverColor()).toEqual('rgb(255, 215, 64)');
  });

  xit('should remove the media library dialog when the close button is clicked', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    expect(page.mediaLibraryDialog.isDisplayed()).toBe(true);
    page.mediaLibraryDialogCloseButton.click();
    browser.wait(ExpectedConditions.invisibilityOf(page.mediaLibraryDialog), 5000);
    expect(page.mediaLibraryDialog.isDisplayed()).toBe(false);
  });

  xit('should display the media panels inside the medialibrary dialog', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    expect(page.mediaPanel.isDisplayed()).toBe(true);
  });

  xit('should add selected media object to the slide when the create button is clicked in the the medialibrary dialog', () => {
    page.secondSlideSelector.click();
    const initialObjectCount = page.getObjectCount(page.slideObjects.get(1));
    page.toggleAddObjectsMenuButton.click();
    page.addMediaObjectsToSlideButton.click();
    page.image01.click();
    page.mediaLibraryDialogCloseButton.click(); // when you select an image the word Close becomes Create but its still the same element
    browser.wait(ExpectedConditions.invisibilityOf(page.mediaLibraryDialog), 3000);
    const finalObjectCount = page.getObjectCount(page.slideObjects.get(1));
    expect(Number(finalObjectCount)).toEqual(Number(initialObjectCount) + 1);

  });

  xit('should display a submenu with ten buttons when the add web objects placeholders to slide button is clicked on the toggle add objects submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   expect(page.webObjectsSubMenu.isDisplayed()).toBe(true);
   expect(page.webObjectsSubMenuButtons.count()).toEqual(10);
  });

  xit('should have the correct title for each button in the the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   expect(page.addCreateJSPlaceholderToSlideButton.getAttribute('title')).toEqual('Add CreateJS Placeholder to Slide');
   expect(page.addWidgetPlaceholderToSlideButton.getAttribute('title')).toEqual('Add Widget Placeholder to Slide');
   expect(page.addImagePlaceholderToSlideButton.getAttribute('title')).toEqual('Add Image Placeholder to Slide');
   expect(page.addTextPlaceholderToSlideButton.getAttribute('title')).toEqual('Add Text Placeholder to Slide');
   expect(page.addIFramePlaceholderToSlideButton.getAttribute('title')).toEqual('Add IFrame Placeholder to Slide');
   expect(page.addHTMLPlaceholderToSlideButton.getAttribute('title')).toEqual('Add HTML Placeholder to Slide');
   expect(page.addMathJAXPlaceholderToSlideButton.getAttribute('title')).toEqual('Add MathJAX Placeholder to Slide');
   expect(page.addFlowControlPlaceholderToSlideButton.getAttribute('title')).toEqual('Add FlowControl Placeholder to Slide');
   expect(page.addAudioPlaceholderToSlideButton.getAttribute('title')).toEqual('Add Audio Placeholder to Slide');
   expect(page.addVideoPlaceholderToSlideButton.getAttribute('title')).toEqual('Add Video Placeholder to Slide');
  });

  xit('should contain the correct icon for each button in the the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   expect(page.getIconText(page.addCreateJSPlaceholderToSlideButton)).toEqual('movie_filter');
   expect(page.getIconText(page.addWidgetPlaceholderToSlideButton)).toEqual('widgets');
   expect(page.getIconText(page.addImagePlaceholderToSlideButton)).toEqual('photo');
   expect(page.getIconText(page.addTextPlaceholderToSlideButton)).toEqual('title');
   expect(page.getIconText(page.addIFramePlaceholderToSlideButton)).toEqual('layers');
   expect(page.getIconText(page.addHTMLPlaceholderToSlideButton)).toEqual('code');
   expect(page.getIconText(page.addMathJAXPlaceholderToSlideButton)).toEqual('functions');
   expect(page.getIconText(page.addFlowControlPlaceholderToSlideButton)).toEqual('settings_ethernet');
   expect(page.getIconText(page.addAudioPlaceholderToSlideButton)).toEqual('audiotrack');
   expect(page.getIconText(page.addVideoPlaceholderToSlideButton)).toEqual('movie');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Animation with the correct icon when the add createJS placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addCreateJSPlaceholderToSlideButton.click();
   expect(page.webObjectDialog.isDisplayed()).toBe(true);
   expect(page.webObjectDialogIcon.getText()).toEqual('movie_filter');
   expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
   expect(page.webObjectDialogType.getText()).toEqual('Animation');
  });

  xit('should have name field and description field that can be updated by the user in the Add Web Object - Animation dialog', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addCreateJSPlaceholderToSlideButton.click();
   page.addWebObjectDialogNameInput.clear();
   page.addWebObjectDialogNameInput.sendKeys('My new animation');
   page.addWebObjectDialogDescriptionInput.click();
   page.addWebObjectDialogDescriptionInput.sendKeys('Enter description here');
   expect(page.addWebObjectDialogNameInput.getAttribute('value')).toEqual('My new animation');
   expect(page.addWebObjectDialogDescriptionInput.getAttribute('value')).toEqual('Enter description here');
  });

  xit('should contain an asset selection section with a Select and Upload button in the Add Web Object - Animation dialog', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addCreateJSPlaceholderToSlideButton.click();
   expect(page.assetSelectionLabel.getText()).toEqual('Asset Selection (Optional):');
   expect(page.selectButton.isDisplayed()).toBe(true);
   expect(page.uploadButton.isDisplayed()).toBe(true);
  });

  xit('should open the medialibrary dialog when the Select button is clicked in the Add Web Object - Animation dialog', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addCreateJSPlaceholderToSlideButton.click();
   page.selectButton.click();
   expect(page.mediaLibraryDialog.isDisplayed()).toBe(true);
  });

  xit('should open the file explorer and add selected file to the slide when the Upload button is clicked in the Add Web Object - Animation dialog', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addCreateJSPlaceholderToSlideButton.click();
   page.uploadButton.click();
   const fileExplorer = element(by.css('input[type="file"]'));
   fileExplorer.sendKeys('/Users/alohani/Downloads/basketball.jpg'); // absolute path, fails to upload to Nest.
   browser.actions().sendKeys(Key.ENTER).perform();
   // page.getConfirmButton(page.webObjectDialog).click(); // clicking confirm adds object to slide, even though upload fails.
    expect(page.getObjectCount(page.secondSlide)).toEqual('6');
  });

 x it('should open the toollibrary dialog when the Add Widget Placeholder to Slide button is clicked in the Add Web Objects Placeholders to Slide Submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addWidgetPlaceholderToSlideButton.click();
   expect(page.toolLibraryDialog.isDisplayed()).toBe(true); // functionality of this fialog has already been tested earlier.
  });

  xit('should open the webobject dialog with the heading Add Web Object - Image with the correct icon when the add image placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addImagePlaceholderToSlideButton.click();
   expect(page.webObjectDialog.isDisplayed()).toBe(true);
   expect(page.webObjectDialogIcon.getText()).toEqual('photo');
   expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
   expect(page.webObjectDialogType.getText()).toEqual('Image');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Text with the correct icon when the add text placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addTextPlaceholderToSlideButton.click();
   expect(page.webObjectDialog.isDisplayed()).toBe(true);
   expect(page.webObjectDialogIcon.getText()).toEqual('title');
   expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
   expect(page.webObjectDialogType.getText()).toEqual('Text');
  });

  xit('should contain a text field in the webobject dialog with the heading Add Web Object - Text', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addTextPlaceholderToSlideButton.click();
   expect(page.addWebObjectDialogTextInput.isDisplayed()).toBe(true);
  });

  xit('should update the text field in the webobject dialog and add increase the object count when the confirm button is clicked on the Add Web Object - Text dialog', () => {
   page.secondSlideSelector.click();
   const initialObjectCount = page.getObjectCount(page.slideObjects.get(1));
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addTextPlaceholderToSlideButton.click();
   page.addWebObjectDialogTextInput.sendKeys('New Text');
   expect(page.addWebObjectDialogTextInput.getAttribute('value')).toEqual('New Text');
   page.getConfirmButton(page.webObjectDialog).click();
   browser.wait(ExpectedConditions.invisibilityOf(page.webObjectDialog), 3000);
    const finalObjectCount = page.getObjectCount(page.slideObjects.get(1));
    expect(Number(finalObjectCount)).toEqual(Number(initialObjectCount) + 1);
  });

  xit('should open the webobject dialog with the heading Add Web Object - IFrame with the correct icon when the add IFrame placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addIFramePlaceholderToSlideButton.click();
   expect(page.webObjectDialog.isDisplayed()).toBe(true);
   expect(page.webObjectDialogIcon.getText()).toEqual('layers');
   expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
   expect(page.webObjectDialogType.getText()).toEqual('IFrame');
  });

  xit('should contain a url field in the webobject dialog with the heading Add Web Object - IFrame', () => {
   page.secondSlideSelector.click();
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addIFramePlaceholderToSlideButton.click();
   expect(page.addWebObjectDialogURLInput.isDisplayed()).toBe(true);
  });

  xit('should update the url field in the webobject dialog and add increase the object count when the confirm button is clicked on the Add Web Object - IFrame dialog', () => {
   page.secondSlideSelector.click();
   const initialObjectCount = page.getObjectCount(page.slideObjects.get(1));
   page.toggleAddObjectsMenuButton.click();
   page.addWebObjectsPlaceholdersToSlideButton.click();
   page.addIFramePlaceholderToSlideButton.click();
   page.addWebObjectDialogURLInput.sendKeys('www.google.com');
   expect(page.addWebObjectDialogURLInput.getAttribute('value')).toEqual('www.google.com');
   page.getConfirmButton(page.webObjectDialog).click();
   browser.wait(ExpectedConditions.invisibilityOf(page.webObjectDialog), 3000);
   const finalObjectCount = page.getObjectCount(page.slideObjects.get(1));
   expect(Number(finalObjectCount)).toEqual(Number(initialObjectCount) + 1);
  });

  xit('should open the webobject dialog with the heading Add Web Object - HTML with the correct icon when the add HTML placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addHTMLPlaceholderToSlideButton.click();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('code');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('HTML');
  });

  xit('should contain HTML, CSS, and Javascript fields in the webobject dialog with the heading Add Web Object - HTML', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addHTMLPlaceholderToSlideButton.click();
    expect(page.htmlField.isDisplayed()).toBe(true);
    expect(page.cssField.isDisplayed()).toBe(true);
    expect(page.javascriptField.isDisplayed()).toBe(true);
  });

  xit('should open the webobject dialog with the heading Add Web Object - Mathjax with the correct icon when the add MathJAX placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addMathJAXPlaceholderToSlideButton.click();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('functions');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Mathjax');
  });

  xit('should contain a MathML field in the webobject dialog with the heading Add Web Object - Mathjax', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addMathJAXPlaceholderToSlideButton.click();
    expect(page.mathmlField.isDisplayed()).toBe(true);
  });

  xit('should open the webobject dialog with the heading Add Web Object - Flowcontrol with the correct icon when the add FlowControl placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addFlowControlPlaceholderToSlideButton.click();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('settings_ethernet');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Flowcontrol');
  });

  xit('should contain a Continue and Hotspot radio button in the webobject dialog with the heading Add Web Object - Flowcontrol', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addFlowControlPlaceholderToSlideButton.click();
    expect(page.continueRadioButton.isDisplayed()).toBe(true);
    expect(page.hotspotRadioButton.isDisplayed()).toBe(true);
  });

  xit('should open the webobject dialog with the heading Add Web Object - Audio with the correct icon when the add audio placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addAudioPlaceholderToSlideButton.click();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('audiotrack');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Audio');
  });

  xit('should contain audio panels tag in the webobject dialog with the heading Add Web Object - Audio', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addAudioPlaceholderToSlideButton.click();
    expect(page.audioPanel.isPresent()).toBe(true);
  });

  xit('should open the webobject dialog with the heading Add Web Object - Video with the correct icon when the add video placeholder to slide button is clicked in the add web objects placeholders to slide submenu', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addVideoPlaceholderToSlideButton.click();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('movie');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Video');
  });

  xit('should contain video panels tag in the webobject dialog with the heading Add Web Object - Video', () => {
    page.secondSlideSelector.click();
    page.toggleAddObjectsMenuButton.click();
    page.addWebObjectsPlaceholdersToSlideButton.click();
    page.addVideoPlaceholderToSlideButton.click();
    expect(page.videoPanel.isPresent()).toBe(true);
  });

  xit('should display a dialog with heading Edit Slide - [slide name] when the edit slide button is clicked', () => {
    page.secondSlideSelector.click();
    page.editSlideButton.click();
    expect(page.newSlideDialog.isDisplayed()).toEqual(true);
    page.secondSlideTitle.then( (titleText) => {
      expect(page.slideDialogHeading.getText()).toEqual('Edit Slide - ' + titleText );
    })
  });

  xit('should allow the user to change the slide name when the edit slide button is clicked', () => {
    const initialSlideTitle = page.secondSlideTitle;
    page.secondSlideSelector.click();
    page.editSlideButton.click();
    browser.sleep(3000);
    page.slideTitleInput.clear();
    page.slideTitleInput.sendKeys('Scene 300');
    page.confirmButton.click();
    browser.sleep(5000);
    expect(page.secondSlideTitle).not.toEqual(initialSlideTitle);
    expect(page.secondSlideTitle).toEqual('Scene 300');
  });

  xit('should allow user to drag slides around on canvas when the lock camera movement and zoom button in the tools menu has NOT been clicked', () => {
    const initialTreeLocation = page.tree.getCssValue('transform');
    page.secondSlide.click();
    browser.sleep(3000);
    browser.actions().dragAndDrop(page.secondSlide, page.slideMenu).perform();
    const finalTreeLocation = page.tree.getCssValue('transform');
    expect(initialTreeLocation).not.toEqual(finalTreeLocation);
    // expect(initialTreeLocation).toEqual(0); // just to check specific transform value for confirmation.
    // expect(finalTreeLocation).toEqual(0);
  });

  xit('should not allow user to drag slides around on canvas when the lock camera movement and zoom button in the tools menu has been clicked', () => {
    const initialTreeLocation = page.tree.getCssValue('transform');
    page.lockCameraMovementAndZoomButton.click();
    page.secondSlide.click();
    browser.actions().dragAndDrop(page.secondSlide, page.slideMenu).perform();
    const finalTreeLocation = page.tree.getCssValue('transform');
    expect(initialTreeLocation).toEqual(finalTreeLocation);
  });

  xit('should disable last 3 buttons in the tools menu when the lock movement and zoom button in the tools menu has been clicked', () => {
    page.lockCameraMovementAndZoomButton.click();
    page.toolsMenuButtons.then( (buttons) => {
      for (let i = 1; i < buttons.length; i++) {
        expect(buttons[i].isEnabled()).toBe(false);
      }
    });
  });

  xit('should allow user to zoom in with the zoom in button, zoom out with the zoom out button, and return to default view when the zoom extents button is clicked', () => {
    const initialTreeLocation = page.tree.getCssValue('transform');
    page.zoomOutButton.click();
    page.zoomOutButton.click();
    const secondTreeLocation = page.tree.getCssValue('transform');
    page.zoomInButton.click();
    const thirdTreeLocation = page.tree.getCssValue('transform');
    page.zoomExtentsButton.click();
    browser.sleep(3000);
    const finalTreeLocation = page.tree.getCssValue('transform');

    expect(initialTreeLocation).not.toEqual(secondTreeLocation);
    expect(secondTreeLocation).not.toEqual(thirdTreeLocation);
    expect(initialTreeLocation).not.toEqual(thirdTreeLocation);
    expect(thirdTreeLocation).not.toEqual(finalTreeLocation);
    expect(initialTreeLocation).toEqual(finalTreeLocation)
  });
});
*/
