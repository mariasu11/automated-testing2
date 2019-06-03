import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {DataFactory} from '../../data-factory';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {MedialibraryPageObject} from './medialibrary.po';
import {ProjectOptionsPanel} from '../../panels/projectOptions/projectOptions.po';
import {Slide} from '../../editors/branching/svgcanvas/slide/slide.po';
import {SlideMenu} from '../../editors/branching/menus/slide/slideMenu.po';


describe('msd-branches-editor Media Library Dialog', () => {
  let projectOptionsPanel: ProjectOptionsPanel;
  let dataFactory: DataFactory;
  let sideNav: BranchesEditorSideNav;
  let mediaLibrary: MedialibraryPageObject;
  let slide: Slide;
  let slideMenu: SlideMenu;

  function initializePageObjects(): void {
    projectOptionsPanel = new ProjectOptionsPanel();
    dataFactory = new DataFactory();
    sideNav = new BranchesEditorSideNav();
    mediaLibrary = new MedialibraryPageObject();
    slide = new Slide();
    slideMenu = new SlideMenu();
  }

  beforeAll( () => {
    initializePageObjects();
    mediaLibrary.navigateTo();
    mediaLibrary.login();
  });

  beforeEach(() => {
    initializePageObjects();
    mediaLibrary.navigateTo();
    // mediaLibrary.login();
    mediaLibrary.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should display media library dialog with heading of Select Transcript when the Select button is clicked in the Project Options Dialog', (done: DoneFn) => {
    sideNav.projectOptionsButton.click()
      .then(() => browser.wait(ExpectedConditions.elementToBeClickable(projectOptionsPanel.transcriptSelectButton), 3000))
      .then(() => projectOptionsPanel.transcriptSelectButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(mediaLibrary.dialog), 5000))
      .then(() => expect(mediaLibrary.dialogHeading.getText()).toEqual(dataFactory.MediaLibraryDialogHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have the heading Select Media to Create Slide Element(s) on the the media library dialog when the Add Media Objects to Slide button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => expect(mediaLibrary.dialogHeading.getText()).toEqual(dataFactory.MediaLibraryDialogHeadingSlideMenu))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should have a close button with a yellow hover color on the the media library dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => browser.sleep(3000))
      .then(() => expect(mediaLibrary.closeButton.isDisplayed()).toEqual(true))
      .then(() => browser.actions().mouseMove(mediaLibrary.closeButton).perform())
      .then(() => expect(mediaLibrary.closeButton.getCssValue('background-color')).toEqual(dataFactory.MediaDialogCloseButtonHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should remove the media library dialog when the close button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => expect(mediaLibrary.dialog.isDisplayed()).toBe(true))
      .then(() => mediaLibrary.clickCloseButton())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(mediaLibrary.dialog), 5000))
      .then(() => expect(browser.isElementPresent(mediaLibrary.dialog)).toBe(false))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the media panels inside the medialibrary dialog', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => expect(mediaLibrary.mediaPanel.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add selected media object to the slide when the create button is clicked in the the medialibrary dialog', (done: DoneFn) => {
    let initialSlideObjects;
    slide.getSlideSelector(2).click()
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((number) => initialSlideObjects = number))
      .then(() => slideMenu.toggleAddObjectsMenuButton.click())
      .then(() => slideMenu.addMediaObjectsToSlideButton.click())
      .then(() => mediaLibrary.image01.click())
      .then(() => mediaLibrary.closeButton.click())
      .then(() => browser.wait(ExpectedConditions.invisibilityOf(mediaLibrary.dialog), 3000))
      .then(() => slide.getObjectCount(slide.getSlideObject(2)).then((finalNumber) => expect(Number(finalNumber)).toEqual(Number(initialSlideObjects) + 1)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });


});
