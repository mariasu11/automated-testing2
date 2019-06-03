import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {DataFactory} from '../../data-factory';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {SlideMenu} from '../../editors/branching/menus/slide/slideMenu.po';
import {Slide} from '../../editors/branching/svgcanvas/slide/slide.po';
import {WebObjectDialog} from './webobject.po';
import {MedialibraryPageObject} from '../medialibrary/medialibrary.po';


describe('Web Object Dialog', () => {
  let webObjectDialog: WebObjectDialog;
  let dataFactory: DataFactory;
  let sideNav: BranchesEditorSideNav;
  let slideMenu: SlideMenu;
  let slide: Slide;
  let mediaLibrary: MedialibraryPageObject;

  function initializePageObjects(): void {
    webObjectDialog = new WebObjectDialog();
    dataFactory = new DataFactory();
    sideNav = new BranchesEditorSideNav();
    slideMenu = new SlideMenu();
    slide = new Slide();
    mediaLibrary = new MedialibraryPageObject();
  }

  beforeEach(() => {
    initializePageObjects();
    webObjectDialog.navigateTo();
    webObjectDialog.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 8000);
  });

  it('should have name field and description field that can be updated by the user in the Add Web Object - Animation dialog', (done: DoneFn) => {
    const nameInputText = 'My new animation';
    const descriptionInputText = 'Enter description here';
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => webObjectDialog.nameInput.clear())
      .then(() => webObjectDialog.nameInput.sendKeys(nameInputText))
      .then(() => browser.sleep(5000))
      .then(() => webObjectDialog.descriptionInput.click())
      .then(() => webObjectDialog.descriptionInput.sendKeys(descriptionInputText))
      .then(() => expect(webObjectDialog.nameInput.getAttribute('value')).toEqual(nameInputText))
      .then(() => expect(webObjectDialog.descriptionInput.getAttribute('value')).toEqual(descriptionInputText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain an asset selection section with a Select and Upload button in the Add Web Object - Animation dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.assetSelectionLabel.getText()).toEqual(dataFactory.AssetSelectionLabel))
      .then(() => expect(webObjectDialog.selectButton.isDisplayed()).toBe(true))
      .then(() => expect(webObjectDialog.uploadButton.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the medialibrary dialog when the Select button is clicked in the Add Web Object - Animation dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => webObjectDialog.clickSelectButton())
      .then(() => expect(mediaLibrary.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add medialibrary object from the medialibrary dialog when the Select button is clicked in the Add Web Object - Animation dialog', (done: DoneFn) => {
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => webObjectDialog.clickSelectButton())
      .then(() => mediaLibrary.image01.click())
      .then(() => mediaLibrary.closeButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(mediaLibrary.dialog), 3000))
      .then(() => webObjectDialog.confirmButton.click())
      .then(() => browser.sleep(5000))
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalObjectCount) => expect(Number(finalObjectCount)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the file explorer and add selected file to the slide when the Upload button is clicked in the Add Web Object - Animation dialog', (done: DoneFn) => {
    const fileExplorer = element(by.css('input[type="file"]'));
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addCreateJSPlaceholderToSlideButton.click())
      .then(() => webObjectDialog.uploadButton.click())
      .then(() => fileExplorer.sendKeys('/Users/alohani/yellow flower.jpeg')) // absolute path, fails to upload to Nest.
      .then(() => browser.actions().sendKeys(Key.ENTER).perform())
      .then(() => browser.sleep(5000)) // wait for upload
      .then(() => webObjectDialog.confirmButton.click()) // once you click upload, you get a message saying "Uploading Selected Files" no confirm button?
      .then(() => browser.sleep(5000)) // wait for number to increment
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalObjectCount) => expect(Number(finalObjectCount)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a text field in the webobject dialog with the heading Add Web Object - Text', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addTextPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.textInput.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the text field in the webobject dialog and add increase the object count when the confirm button is clicked on the Add Web Object - Text dialog', (done: DoneFn) => {
    const inputText = 'New Text';
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addTextPlaceholderToSlideButton.click())
      .then(() => webObjectDialog.textInput.sendKeys(inputText))
      .then(() => expect(webObjectDialog.textInput.getAttribute('value')).toEqual(inputText))
      .then(() => webObjectDialog.confirmButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(webObjectDialog.dialog), 3000))
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalObjectCount) => expect(Number(finalObjectCount)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a url field in the webobject dialog with the heading Add Web Object - IFrame', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addIFramePlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.urlInput.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should update the url field in the webobject dialog and add increase the object count when the confirm button is clicked on the Add Web Object - IFrame dialog', (done: DoneFn) => {
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addIFramePlaceholderToSlideButton.click())
      .then(() => webObjectDialog.confirmButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(webObjectDialog.dialog), 3000))
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalObjectCount) => expect(Number(finalObjectCount)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain HTML, CSS, and Javascript fields in the webobject dialog with the heading Add Web Object - HTML', (done: DoneFn) => {
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addHTMLPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.htmlField.isDisplayed()).toBe(true))
      .then(() => expect(webObjectDialog.cssField.isDisplayed()).toBe(true))
      .then(() => expect(webObjectDialog.javascriptField.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a MathML field in the webobject dialog with the heading Add Web Object - Mathjax', (done: DoneFn) => {
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addMathJAXPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.mathmlField.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a Continue and Hotspot radio button in the webobject dialog with the heading Add Web Object - Flowcontrol', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addFlowControlPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.continueRadioButton.isDisplayed()).toBe(true))
      .then(() => expect(webObjectDialog.hotspotRadioButton.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain audio panels tag in the webobject dialog with the heading Add Web Object - Audio', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addAudioPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.audioPanel.isPresent()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain video panels tag in the webobject dialog with the heading Add Web Object - Video', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addWebObjectsPlaceholdersToSlideButton.click())
      .then(() => slideMenu.addVideoPlaceholderToSlideButton.click())
      .then(() => expect(webObjectDialog.videoPanel.isPresent()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
