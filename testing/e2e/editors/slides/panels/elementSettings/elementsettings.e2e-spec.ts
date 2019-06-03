import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {DataFactory} from '../../../../data-factory';
import {Slide} from '../../../branching/svgcanvas/slide/slide.po';
import {SlideMenu} from '../../../branching/menus/slide/slideMenu.po';
import {SlidesEditor} from '../../slides.po';
import {SettingsPanel} from './elementsettings.po';
import {settings} from "cluster";



describe('Settings Panel', () => {
  let sideNav: BranchesEditorSideNav;
  let dataFactory: DataFactory;
  let slide: Slide;
  let slideMenu: SlideMenu;
  let slidesEditor: SlidesEditor;
  let settingsPanel: SettingsPanel;


  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    dataFactory = new DataFactory();
    slide = new Slide();
    slideMenu = new SlideMenu();
    slidesEditor = new SlidesEditor();
    settingsPanel = new SettingsPanel();
  }

  beforeEach(() => {
    initializePageObjects();
    settingsPanel.navigateTo();
    settingsPanel.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should display the default text in the settings panel when no slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.placeholderText.getText()).toEqual(dataFactory.SettingsPanelDefaultText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should not display the default text in the settings panel when a slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.placeholderText.getText()).not.toEqual(dataFactory.StylePanelDefaultText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display three settings categories in the settings panel when a slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.categories.count()).toEqual(3))
      .then(() => expect(settingsPanel.categoryHeadings.getText()).toEqual(dataFactory.SettingsPanelCategoryHeadings))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the expanded general category in the settings panel by default when a slide object is clicked. All other categories should be collapsed.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.categories.get(0).getAttribute('class')).not.toContain('closed'))
      .then(() => settingsPanel.categories.then((categories) => {
        for (let i = 1; i < categories.length; i++) {
          expect(categories[i].getAttribute('class')).toContain('closed');
        }
      }))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should not display the general category when it has been collapsed in the settings panel when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => settingsPanel.generalSection.click())
      .then(() => expect(settingsPanel.categories.get(0).getAttribute('class')).toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the element specific category when it is expanded in the settings panel when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.categories.get(1).getAttribute('class')).toContain('closed'))
      .then(() => settingsPanel.elementSpecificSection.click())
      .then(() => expect(settingsPanel.categories.get(1).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the asset properties category when it is expanded in the settings panel when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.categories.get(2).getAttribute('class')).toContain('closed'))
      .then(() => settingsPanel.assetPropertiesSection.click())
      .then(() => expect(settingsPanel.categories.get(2).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
