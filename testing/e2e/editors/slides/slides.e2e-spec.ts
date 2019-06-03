import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {SlidesEditor} from './slides.po';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {Slide} from '../branching/svgcanvas/slide/slide.po';
import {DataFactory} from '../../data-factory';
import {SlideMenu} from '../branching/menus/slide/slideMenu.po';
import {SlidesEditorToolMenu} from './menus/tool/tool.po';
import {WebObjectDialog} from '../../dialogs/webobject/webobject.po';
import {ToolLibraryDialog} from '../../dialogs/toollibrary/toollibrary.po';
import {StylePanel} from './panels/elementStyle/style.po';
import {SettingsPanel} from './panels/elementSettings/elementsettings.po';
import {ElementMenu} from './menus/element/elementMenu.po';
import {Sequencer} from './panels/sequencer/sequencer.po';


describe('Slides Editor', () => {
  let sideNav: BranchesEditorSideNav;
  let slide: Slide;
  let dataFactory: DataFactory;
  let slidesEditor: SlidesEditor;
  let slideMenu: SlideMenu;
  let toolMenu: SlidesEditorToolMenu;
  let webObjectDialog: WebObjectDialog;
  let toolLibraryDialog: ToolLibraryDialog;
  let stylePanel: StylePanel;
  let settingsPanel: SettingsPanel;
  let elementMenu: ElementMenu;
  let sequencer: Sequencer;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav;
    slidesEditor = new SlidesEditor();
    slide = new Slide();
    dataFactory = new DataFactory();
    slideMenu = new SlideMenu();
    toolMenu = new SlidesEditorToolMenu();
    webObjectDialog = new WebObjectDialog();
    toolLibraryDialog = new ToolLibraryDialog();
    stylePanel = new StylePanel();
    settingsPanel = new SettingsPanel();
    elementMenu = new ElementMenu();
    sequencer = new Sequencer();
  }

  beforeEach(() => {
    initializePageObjects();
    slidesEditor.navigateTo();
    slidesEditor.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain a navigation panels with 10 buttons', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => expect(slidesEditor.navMenu.isDisplayed()).toEqual(true))
      .then(() => expect(slidesEditor.allNavButtons.count()).toEqual(10))
      .then(() => expect(slidesEditor.allNavButtonNames.getText()).toEqual([dataFactory.AnimationButtonText, dataFactory.CEWidgetButtonText, dataFactory.ImageButtonText,
      dataFactory.TextButtonText, dataFactory.MathJaxButtonText, dataFactory.FLowControlButtonText, dataFactory.HTMLButtonText, dataFactory.IFramceButtonText,
      dataFactory.AudioButtonText, dataFactory.VideoButtonText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a tool menu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(toolMenu.toolMenuComponent), 5000))
      .then(() => expect(toolMenu.toolMenuComponent.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a panels sidenav with header of Element Options', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => expect(slidesEditor.panelSideNav.isDisplayed()).toBe(true))
      .then(() => expect(slidesEditor.panelSideNavHeader.getText()).toEqual(dataFactory.PanelSideNavHeader))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should minimize the panels sidenav with header of Element Options when the fullscreen exit icon is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => expect(slidesEditor.getPanelSidenavWidth()).toEqual(300))
      .then(() => slidesEditor.clickExitFullscreenButton())
      .then(() => expect(slidesEditor.getPanelSidenavWidth()).toEqual(30))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Animation with the correct icon when the Animation button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.animationButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toBe(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddCreateJSPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogAnimationType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the toollibrary dialog when the CEWIDGET button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.cewidgetButton.click())
      .then(() => expect(toolLibraryDialog.dialog.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Image with the correct icon when the image button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.imageButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddImagePlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogImageType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Text with the correct icon when the text button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.textButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddTextPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogTextType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Mathjax with the correct icon when MathJAX button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.mathjaxButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddMathJAXPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogMathJaxType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Flowcontrol with the correct icon when the add FlowControl button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.flowcontrolButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddFlowControlPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogFlowControlType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - HTML with the correct icon when the add HTML button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.htmlButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddHTMLPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogHTMLType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - IFrame with the correct icon when the add IFrame button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.iframeButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddIFramePlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogIFrameType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Audio with the correct icon when the audio button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.audioButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddAudioPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogAudioType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should open the webobject dialog with the heading Add Web Object - Video with the correct icon when the video button is clicked on the navigation panels', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.videoButton.click())
      .then(() => expect(webObjectDialog.dialog.isDisplayed()).toEqual(true))
      .then(() => expect(webObjectDialog.icon.getText()).toEqual(dataFactory.AddVideoPlaceholderToSlideButtonIconText))
      .then(() => expect(webObjectDialog.title.getText()).toEqual(dataFactory.AddWebObjectsDialogTitle))
      .then(() => expect(webObjectDialog.type.getText()).toEqual(dataFactory.WebObjectDialogVideoType))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the style panel', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => expect(stylePanel.panel.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the settings panel when the Settings Tab under the Element Options sidenav is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.settingsTab), 5000))
      .then(() => slidesEditor.settingsTab.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(settingsPanel.panel), 5000))
      .then(() => expect(settingsPanel.panel.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the element menu when a slide object has been selected ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(elementMenu.menuComponent.isDisplayed()).toBe(true) )
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the sequencer component with header and icon', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => expect(sequencer.component.isDisplayed()).toBe(true))
      .then(() => expect(sequencer.header.getText()).toEqual(dataFactory.SequencerHeaderText))
      .then(() => expect(sequencer.icon.getText()).toEqual(dataFactory.SequencerIconText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a stage area where the slide elements are displayed', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => expect(slidesEditor.stage.isDisplayed()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
