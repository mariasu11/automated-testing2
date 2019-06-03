import {browser, element, by, Key, ExpectedConditions, ElementFinder} from 'protractor';
import {DataFactory} from '../../../../data-factory';
import {NewSlideDialog} from './slideDialog.po';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {BranchingEditor} from '../../branching.po';
import {Slide} from '../../svgcanvas/slide/slide.po';
import {SlideMenu} from '../../menus/slide/slideMenu.po';
import {SVGCanvas} from '../../svgcanvas/svgcanvas.po';



describe('New Slide Dialog', () => {
  let newSlideDialog: NewSlideDialog;
  let dataFactory: DataFactory;
  let sideNav: BranchesEditorSideNav;
  let branchesEditor: BranchingEditor;
  let slide: Slide;
  let slideMenu: SlideMenu;
  let svgCanvas: SVGCanvas;

  function initializePageObjects(): void {
    newSlideDialog = new NewSlideDialog();
    sideNav = new BranchesEditorSideNav();
    dataFactory = new DataFactory();
    branchesEditor = new BranchingEditor();
    slide = new Slide();
    slideMenu = new SlideMenu();
    svgCanvas = new SVGCanvas();
  }

  beforeEach(() => {
    initializePageObjects();
    newSlideDialog.navigateTo();
    newSlideDialog.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should allow the user to enter a slide title on the new slide dialog which updates the heading of the dialog ', (done: DoneFn) => {
    const slideName = 'My New Slide';
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => newSlideDialog.slideTitleInput.sendKeys(slideName))
      .then(() => expect(newSlideDialog.heading.getText()).toEqual(dataFactory.NewSlideDialogDefaultHeading + slideName))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a text area where the user can enter a description of the new slide in the New slide dialog ', (done: DoneFn) => {
    const descriptionText = 'Look at my new slide';
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => newSlideDialog.descriptionTextArea.sendKeys(descriptionText))
      .then(() => expect(newSlideDialog.descriptionTextArea.getAttribute('value')).toEqual(descriptionText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain input elements to change the slides background color and max number of replays on the new slide dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(newSlideDialog.slidesBackgroundColorInput.isDisplayed()).toEqual(true))
      .then(() => expect(newSlideDialog.slidesBackgroundColorInput.getAttribute('placeholder')).toEqual(dataFactory.SlidesBackgroundColorInputPlaceholder))
      .then(() => expect(newSlideDialog.maxReplaysInput.isDisplayed()).toEqual(true))
      .then(() => expect(newSlideDialog.maxReplaysInput.getAttribute('placeholder')).toEqual(dataFactory.MaxReplaysInputPlaceholder))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain six checkboxes on the new slide dialog', (done: DoneFn) => {
    let checkboxLabels = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(newSlideDialog.allCheckboxInputs.count()).toEqual(6))
      .then(() => newSlideDialog.checkboxes.each((checkbox) => checkbox.$('.mat-checkbox-label').getText().then((text) => checkboxLabels.push(text))))
      .then(() => expect(checkboxLabels).toEqual([dataFactory.ManualReplayLabel, dataFactory.AutoReplayLabel, dataFactory.AutoPlayLabel, dataFactory.ShowControlsLabel,
        dataFactory.ShowProgressLabel, dataFactory.BranchtoURLLabel]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a cancel and confirm button on the new slide dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(newSlideDialog.allActionButtons.count()).toEqual(2))
      .then(() => expect(newSlideDialog.cancelButtonName.getText()).toEqual(dataFactory.CancelButtonName))
      .then(() => expect(newSlideDialog.confirmButtonName.getText()).toEqual(dataFactory.ConfirmButtonName))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the background color of the cancel button to red when hovered over on the new slide dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(newSlideDialog.dialog), 5000))
      .then(() => expect(newSlideDialog.cancelButton.getCssValue('background-color')).toEqual(dataFactory.CancelAndConfirmButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(newSlideDialog.cancelButton).perform())
      .then(() => expect(newSlideDialog.cancelButton.getCssValue('background-color')).toEqual(dataFactory.CancelButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the background color of the confirm button to yellow when hovered over on the new slide dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(newSlideDialog.dialog), 5000))
      .then(() => expect(newSlideDialog.confirmButton.getCssValue('background-color')).toEqual(dataFactory.CancelAndConfirmButtonBackgroundColor))
      .then(() => browser.actions().mouseMove(newSlideDialog.confirmButton).perform())
      .then(() => expect(newSlideDialog.confirmButton.getCssValue('background-color')).toEqual(dataFactory.ConfirmButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should remove the new slide dialog when the cancel button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(newSlideDialog.dialog.isDisplayed()).toBe(true))
      .then(() => newSlideDialog.cancelButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(newSlideDialog.dialog), 5000))
      .then(() => expect(browser.isElementPresent(newSlideDialog.dialog)).toBe(false))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add the correct branching logic to the new slide when the confirm button is clicked the new slide dialog', (done: DoneFn) => { // should this be done for each type of branch logic?
    const slideTitle = 'My New Slide';
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.selectionButton.click())
      .then(() => newSlideDialog.slideTitleInput.sendKeys(slideTitle))
      .then(() => newSlideDialog.confirmButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(newSlideDialog.dialog), 5000))
      .then(() => sideNav.saveButton.click())
      .then(() => browser.sleep(3000))
      .then(() => expect(svgCanvas.secondSlideBranchLogicToNewSlide()).toContain('selection'))
      .then(() => slide.selectableSlides.last().click())
      .then(() => slideMenu.removeSelectedSlideButton.click())
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add a new slide to the canvas when the confirm button is clicked the new slide dialog', (done: DoneFn) => {
    const slideTitle = 'My New Slide';
    slide.getSlideSelector(2).click()
      .then(() => expect(svgCanvas.numberOfSecondSlideBranches()).toEqual(1))
      .then(() => slideMenu.toggleAddSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => newSlideDialog.slideTitleInput.sendKeys(slideTitle))
      .then(() => newSlideDialog.confirmButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(newSlideDialog.dialog), 5000))
      .then(() => sideNav.saveButton.click())
      .then(() => browser.sleep(3000))
      .then(() => expect(svgCanvas.numberOfSecondSlideBranches()).toEqual(2))
      .then(() => slide.allSlides.count().then((number) => expect(slide.getSlideTitle(number)).toEqual(slideTitle))) // get the title of the last slide
      .then(() => slide.selectableSlides.last().click())
      .then(() => slideMenu.removeSelectedSlideButton.click())
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should allow the user to change the slide name in the Edit Slide dialog when the edit slide button is clicked', (done: DoneFn) => {
    let initialSlideTitle;
    const slideTitleText = 'Scene 300';
    slide.getSlideSelector(2).click()
      .then(() => slide.getSlideTitle(2).then((title) => initialSlideTitle = title))
      .then(() => slideMenu.editSlideButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(newSlideDialog.dialog), 3000))
      .then(() => newSlideDialog.slideTitleInput.clear())
      .then(() => newSlideDialog.slideTitleInput.sendKeys(slideTitleText))
      .then(() => newSlideDialog.confirmButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(newSlideDialog.dialog), 5000))
      .then(() => expect(slide.getSlideTitle(2)).not.toEqual(initialSlideTitle))
      .then(() => expect(slide.getSlideTitle(2)).toEqual(slideTitleText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
