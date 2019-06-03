import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {DataFactory} from '../../data-factory';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {ToolLibraryDialog} from './toollibrary.po';
import {SlideMenu} from '../../editors/branching/menus/slide/slideMenu.po';
import {Slide} from '../../editors/branching/svgcanvas/slide/slide.po';


describe('msd-branches-editor Tool Library Dialog', () => {
  let dataFactory: DataFactory;
  let sideNav: BranchesEditorSideNav;
  let toolLibraryDialog: ToolLibraryDialog;
  let slideMenu: SlideMenu;
  let slide: Slide;

  function initializePageObjects(): void {
    dataFactory = new DataFactory();
    sideNav = new BranchesEditorSideNav();
    toolLibraryDialog = new ToolLibraryDialog();
    slideMenu = new SlideMenu();
    slide = new Slide();
  }

  beforeEach(() => {
    initializePageObjects();
    toolLibraryDialog.navigateTo();
    toolLibraryDialog.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should update the tool library dialog heading when the Tool Name input is changed by the user ', (done: DoneFn) => {
    const nameInputText = ' My new tool';
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => toolLibraryDialog.nameInput.sendKeys(nameInputText))
      .then(() => expect(toolLibraryDialog.heading.getText()).toEqual(dataFactory.ToolLibraryDialogHeading + nameInputText))
      .then(() => expect(toolLibraryDialog.nameInput.getAttribute('value')).toEqual(nameInputText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update Tool URL field when the input is changed by the user ', (done: DoneFn) => {
    const urlInputText = 'www.google.com';
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => toolLibraryDialog.urlInput.sendKeys(urlInputText))
      .then(() => expect(toolLibraryDialog.urlInput.getAttribute('value')).toEqual(urlInputText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a selection box with 27 options for widget type when the widget type dropdown is clicked in the tool library dialog', (done: DoneFn) => {
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(toolLibraryDialog.dialog), 5000))
      .then(() => toolLibraryDialog.ceWidgetTypeDropdown.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(toolLibraryDialog.ceWidgetTypes.get(0)), 5000))
      .then(() => expect(toolLibraryDialog.ceWidgetTypes.count()).toEqual(27))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should remove the tool library dialog when the cancel button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => expect(toolLibraryDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => toolLibraryDialog.cancelButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(toolLibraryDialog.dialog), 5000))
      .then(() => expect(browser.isElementPresent(toolLibraryDialog.dialog)).toBe(false))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should increment the object count on the slide when the confirm button is clicked on the tool library dialog', (done: DoneFn) => {
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addCEToolsToSlideButton.click())
      .then(() => toolLibraryDialog.confirmButton.click())
      .then(() => browser.sleep(3000))
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalNumber) => expect(Number(finalNumber)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });


});
