import {browser, element, by, Key, ExpectedConditions, ElementFinder} from 'protractor';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {DataFactory} from '../../../../data-factory';
import {SlideMenu} from './slideMenu.po';
import {Slide} from '../../svgcanvas/slide/slide.po';
import {SlidesEditor} from '../../../slides/slides.po';
import {NewSlideDialog} from '../../dialogs/slide/slideDialog.po';
import {ToolLibraryDialog} from '../../../../dialogs/toollibrary/toollibrary.po';
import {MedialibraryPageObject} from '../../../../dialogs/medialibrary/medialibrary.po';
import {WebObjectDialog} from '../../../../dialogs/webobject/webobject.po';


describe('Slide Menu', () => {
  let sideNav: BranchesEditorSideNav;
  let dataFactory: DataFactory;
  let slideMenu: SlideMenu;
  let slide: Slide;
  let slidesEditor: SlidesEditor;
  let newSlideDialog: NewSlideDialog;
  let toolLibraryDialog: ToolLibraryDialog;
  let mediaLibrary: MedialibraryPageObject;
  let webObjectDialog: WebObjectDialog;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav;
    slideMenu = new SlideMenu();
    dataFactory = new DataFactory();
    slide = new Slide();
    slidesEditor = new SlidesEditor();
    newSlideDialog = new NewSlideDialog();
    toolLibraryDialog = new ToolLibraryDialog();
    mediaLibrary = new MedialibraryPageObject();
    webObjectDialog = new WebObjectDialog();
  }

  beforeEach(() => {
    initializePageObjects();
    slideMenu.navigateTo();
    slideMenu.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain 8 buttons in the slide menu', (done: DoneFn) => {
    let titleArray = [];
    slide.getSlideSelector(1).click()
      .then(() => slideMenu.buttons.count().then((number) => expect(number).toEqual(8)))
      .then(() => slideMenu.buttons.each((button) => button.getAttribute('title').then((title) => titleArray.push(title))))
      .then(() => expect(titleArray).toEqual([dataFactory.RemoveSelectedSlideButtonTitle, dataFactory.EnterEditorModeButtonTitle,
        dataFactory.MoveSlideToAnotherBranchButtonTitle, dataFactory.ToggleAddSlideMenuButtonTitle,
        dataFactory.ToggleAddExistingSlideMenuButtonTitle, dataFactory.DuplicateExistingSlideMenuButtonTitle,
        dataFactory.ToggleAddObjectsMenuButtonTitle, dataFactory.EditSlideButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display correct icon for each button in the slide menu', (done: DoneFn) => {
    let iconArray = [];
    slide.getSlideSelector(1).click()
      .then(() => slideMenu.buttons.each((button) => slideMenu.getIconText(button).then((text) => iconArray.push(text))))
      .then(() => expect(iconArray).toEqual([dataFactory.RemoveSelectedSlideButtonIconText, dataFactory.EnterEditorModeButtonIconText,
        dataFactory.MoveSlideToAnotherBranchIconText, dataFactory.ToggleAddSlideMenuButtonIconText,
        dataFactory.ToggleAddExistingSlideMenuButtonIconText, dataFactory.DuplicateExistingSlideMenuIconText,
        dataFactory.ToggleAddObjectsMenuButtonIconText, dataFactory.EditSlideButtonIconText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should disable the remove selected slide button and and move slide to another branch button when the first slide is selected', (done: DoneFn) => {
    slide.getSlideSelector(1).click()
      .then(() => [slideMenu.removeSelectedSlideButton, slideMenu.moveSlideToAnotherBranchButton, slideMenu.duplicateExistingSlideButton]
        .forEach((button) => button.isEnabled().then((boolean) => expect(boolean).toEqual(false))))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should disable the remove selected slide button when any slide in between the first and last slide is selected, all other buttons should be enabled', () => {
    slide.getSlideSelector(2).click()
      .then(() => expect(slideMenu.removeSelectedSlideButton.isEnabled()).toEqual(false))
      .then(() => slideMenu.buttons.then((buttons) => {
        for (let i = 1; i < buttons.length; i++) {
          expect(buttons[i].isEnabled()).toBe(true);
        }
      }))
  });

  it('should enable all buttons in the slide menu when the last slide is selected', (done: DoneFn) => { // doesnt work with cloned slide?
    slide.selectableSlides.last().click()
      .then(() => slideMenu.buttons.each((button) => button.isEnabled().then((boolean) => expect(boolean).toBe(true))))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should remove the last slide if it is selected and the user clicks on the Remove Selected Slide button in the Slide menu', (done: DoneFn) => {
    const numberOfSlides = slide.allSlides.count();
    slide.selectableSlides.last().click()
      .then(() => slideMenu.removeSelectedSlideButton.click())
      .then(() => numberOfSlides.then((originalNumber) => {
        expect(browser.isElementPresent(slide.getSlideSelector(originalNumber))).toBe(false)
      }))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the slide editor for the selected slide when Enter Editor Mode button is clicked on the Slide menu', (done: DoneFn) => {
    let slideTitle;
    return slide.getSlideTitle(2).then((title) => slideTitle = title)
      .then(() => slide.getSlideSelector(2).click())
      .then(() => expect(browser.isElementPresent(slidesEditor.editor)).toBe(false))
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => expect(browser.isElementPresent(slidesEditor.editor)).toBe(true))
      .then(() => slideMenu.getFourthTabGroupLabel())
      .then((label) => expect(label).toEqual('Slide - ' + slideTitle))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a submenu when the toggle add slide menu button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => expect(browser.isElementPresent(slideMenu.branchLogicSubMenu)).toBe(false))
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.branchLogicSubMenu.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display 4 buttons in the submenu when the toggle add slide menu button is clicked', (done: DoneFn) => {
    let buttonTitles = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.branchLogicSubMenuButtons.count()).toEqual(4))
      .then(() => slideMenu.branchLogicSubMenuButtons.each((button) => button.getAttribute('title').then((title) => buttonTitles.push(title))))
      .then(() => expect(buttonTitles).toEqual([dataFactory.ContinueButtonTitle, dataFactory.OutcomeButtonTitle, dataFactory.SelectionButtonTitle, dataFactory.TallyButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of the continue button to yellow when hovered over ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.continueButton.getCssValue('background-color')).toEqual(dataFactory.ContinueButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(slideMenu.continueButton).perform())
      .then(() => browser.sleep(5000))
      .then(() => expect(slideMenu.continueButton.getCssValue('background-color')).toEqual(dataFactory.SubmenuButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of the outcome button to yellow when hovered over ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.outcomeButton.getCssValue('background-color')).toEqual(dataFactory.OutcomeButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(slideMenu.outcomeButton).perform())
      .then(() => browser.sleep(5000))
      .then(() => expect(slideMenu.outcomeButton.getCssValue('background-color')).toEqual(dataFactory.SubmenuButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of the selection button to yellow when hovered over ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.selectionButton.getCssValue('background-color')).toEqual(dataFactory.SelectionButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(slideMenu.selectionButton).perform())
      .then(() => browser.sleep(5000))
      .then(() => expect(slideMenu.selectionButton.getCssValue('background-color')).toEqual(dataFactory.SubmenuButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of the tally button to yellow when hovered over ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => expect(slideMenu.tallyButton.getCssValue('background-color')).toEqual(dataFactory.TallyButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(slideMenu.tallyButton).perform())
      .then(() => browser.sleep(5000))
      .then(() => expect(slideMenu.tallyButton.getCssValue('background-color')).toEqual(dataFactory.SubmenuButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a new slide dialog when the continue button is clicked ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a new slide dialog when the outcome button is clicked ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.outcomeButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a new slide dialog when the selection button is clicked ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.selectionButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a new slide dialog when the tally button is clicked ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.tallyButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a submenu when the toggle add existing slide menu button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => expect(slideMenu.branchLogicSubMenu.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a submenu with three buttons when the toggle add objects button is clicked in the slide menu ', (done: DoneFn) => {
    let titleArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => expect(slideMenu.addObjectsSubMenu.isDisplayed()).toBe(true))
      .then(() => slideMenu.addObjectsSubMenuButtons.count().then((number) => expect(number).toEqual(3)))
      .then(() => slideMenu.addObjectsSubMenuButtons.each((button) => button.getAttribute('title').then((title) => titleArray.push(title))))
      .then(() => expect(titleArray).toEqual([dataFactory.AddCEToolsToSlideMenuButtonTitle, dataFactory.AddMediaObjectsToSlideButtonTitle, dataFactory.AddWebObjectsPlaceholdersToSlideButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display correct icons for each button in the submenu when the toggle add objects button is clicked in the slide menu ', (done: DoneFn) => {
    let iconTextArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addObjectsSubMenuButtons.each((button) => slideMenu.getIconText(button).then((text) => iconTextArray.push(text))))
      .then(() => expect(iconTextArray).toEqual([dataFactory.AddCEToolsToSlideButtonIconText, dataFactory.AddMediaObjectsToSlideButtonIconText, dataFactory.AddWebObjectsPlaceholdersToSlideButtonIconText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a tool library dialog with the heading New CE Tool - when the add CE tools to slide button is clicked in the add objects submenu ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => expect(toolLibraryDialog.dialog.isDisplayed()).toBe(true))
      .then(() => expect(toolLibraryDialog.heading.getText()).toEqual(dataFactory.ToolLibraryDialogHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the media library dialog when the add media objects to slide button is clicked in the toggle add objects submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => expect(mediaLibrary.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a submenu with ten buttons when the add web objects placeholders to slide button is clicked on the toggle add objects submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => expect(slideMenu.webObjectsSubMenu.isDisplayed()).toBe(true))
      .then(() => expect(slideMenu.webObjectsSubMenuButtons.count()).toEqual(10))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have the correct title for each button in the the add web objects placeholders to slide submenu', (done: DoneFn) => {
    let titleArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.webObjectsSubMenuButtons.each((button) => button.getAttribute('title').then((title) => titleArray.push(title))))
      .then(() => expect(titleArray).toEqual([dataFactory.AddCreateJSPlaceholderToSlideButtonTitle, dataFactory.AddWidgetPlaceholderToSlideButtonTitle,
        dataFactory.AddImagePlaceholderToSlideButtonTitle, dataFactory.AddTextPlaceholderToSlideButtonTitle, dataFactory.AddIFramePlaceholderToSlideButtonTitle,
        dataFactory.AddHTMLPlaceholderToSlideButtonTitle, dataFactory.AddMathJAXPlaceholderToSlideButtonTitle, dataFactory.AddFlowControlPlaceholderToSlideButtonTitle,
        dataFactory.AddAudioPlaceholderToSlideButtonTitle, dataFactory.AddVideoPlaceholderToSlideButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain the correct icon for each button in the the add web objects placeholders to slide submenu', (done: DoneFn) => {
    let iconArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.webObjectsSubMenuButtons.each((button) => slideMenu.getIconText(button).then((text) => iconArray.push(text))))
      .then(() => expect(iconArray).toEqual([dataFactory.AddCreateJSPlaceholderToSlideButtonIconText, dataFactory.AddWidgetPlaceholderToSlideButtonIconText,
        dataFactory.AddImagePlaceholderToSlideButtonIconText, dataFactory.AddTextPlaceholderToSlideButtonIconText, dataFactory.AddIFramePlaceholderToSlideButtonIconText,
        dataFactory.AddHTMLPlaceholderToSlideButtonIconText, dataFactory.AddMathJAXPlaceholderToSlideButtonIconText,
        dataFactory.AddFlowControlPlaceholderToSlideButtonIconText, dataFactory.AddAudioPlaceholderToSlideButtonIconText, dataFactory.AddVideoPlaceholderToSlideButtonIconText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Animation with the correct icon when the add createJS placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddCreateJSPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogAnimationType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the toollibrary dialog when the Add Widget Placeholder to Slide button is clicked in the Add Web Objects Placeholders to Slide Submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addWidgetPlaceholderToSlideButton.click())
      .then(() => expect(toolLibraryDialog.dialog.isDisplayed()).toBe(true)) // functionality of this dialog has already been tested earlier.
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Image with the correct icon when the add image placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addImagePlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddImagePlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogImageType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Text with the correct icon when the add text placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addTextPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddTextPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogTextType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - IFrame with the correct icon when the add IFrame placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addIFramePlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddIFramePlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogIFrameType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - HTML with the correct icon when the add HTML placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addHTMLPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddHTMLPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogHTMLType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Mathjax with the correct icon when the add MathJAX placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addMathJAXPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddMathJAXPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogMathJaxType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Flowcontrol with the correct icon when the add FlowControl placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addFlowControlPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddFlowControlPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogFlowControlType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Audio with the correct icon when the add audio placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addAudioPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddAudioPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogAudioType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Video with the correct icon when the add video placeholder to slide button is clicked in the add web objects placeholders to slide submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addVideoPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddVideoPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogVideoType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a dialog with heading Edit Slide - [slide name] when the edit slide button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.editSlideButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(() => slide.getSlideTitle(2).then((title) => expect(newSlideDialog.heading.getText()).toEqual(dataFactory.EditSlideDialogDefaultHeading + title)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
