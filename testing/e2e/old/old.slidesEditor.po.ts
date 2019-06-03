import { browser, by, element } from 'protractor';

/*export class MsdBranchesEditorSlidesEditor {
  // constructor
  slidesEditor = element(by.tagName('msd-branches-editor-slides-editor'));
  navMenu = this.slidesEditor.element(by.tagName('nav'));
  allNavButtons = this.navMenu.all(by.tagName('li'));
  allNavButtonNames = this.navMenu.all(by.tagName('li span'));
  animationButton = this.allNavButtons.get(0);
  cewidgetButton = this.allNavButtons.get(1);
  imageButton = this.allNavButtons.get(2);
  textButton = this.allNavButtons.get(3);
  mathjaxButton = this.allNavButtons.get(4);
  flowcontrolButton = this.allNavButtons.get(5);
  htmlButton = this.allNavButtons.get(6);
  iframeButton = this.allNavButtons.get(7);
  audioButton = this.allNavButtons.get(8);
  videoButton = this.allNavButtons.get(9);
  selectableSlides = element.all(by.css('.graphic .selector'));
  firstSlideSelector = this.selectableSlides.get(0);
  secondSlideSelector = this.selectableSlides.get(1);
  slideMenu = element(by.tagName('msd-branches-editor-menu-slide'));
  slideMenuButtons = this.slideMenu.all(by.tagName('button'));
  enterEditorModeButton = this.slideMenuButtons.get(1);
  menus = element(by.css('.menus'));
  toolMenu = this.menus.element(by.tagName('msd-branches-editor-slide-editor-tool-menu'));
  panelSideNav = this.slidesEditor.element(by.css('.panelSideNav'));
  exitFullscreenButton = this.panelSideNav.element(by.css('.header')).all(by.tagName('md-icon')).get(1);
  panelSideNavHeader = this.panelSideNav.element(by.css('.header span'));
  webObjectDialog = element(by.tagName('msd-branching-editor-dialog-webobject'));
  webObjectDialogTitle = this.webObjectDialog.element(by.css('.title'));
  webObjectDialogType = this.webObjectDialog.element(by.css('.type'));
  webObjectDialogIcon = this.webObjectDialog.element(by.css('.icon md-icon'));
  toolLibraryDialog = element(by.tagName('msd-branching-editor-dialog-toollibrary'));
  settingsTab = this.panelSideNav.element(by.id('md-tab-label-1-1'));
  stylePanel = this.panelSideNav.element(by.tagName('msd-branches-editor-slide-editor-element-style-panels'));
  settingsPanel = this.panelSideNav.element(by.tagName('msd-branches-editor-slide-editor-element-settings-panels'));
  settingsPanelText = this.settingsPanel.element(by.tagName('span'));
  settingsPanelCategories = this.settingsPanel.all(by.css('.accordian-row'));
  settingsPanelGeneralSection = this.settingsPanelCategories.get(0).element(by.css('.aheader'));
  settingsPanelElementSpecificSection = this.settingsPanelCategories.get(1).element(by.css('.aheader'));
  settingsPanelAssetPropertiesSection = this.settingsPanelCategories.get(2).element(by.css('.aheader'));
  settingsPanelCategoryHeadings = this.settingsPanelCategories.all(by.css('.aheader span'));
  stylePanelText = this.stylePanel.element(by.tagName('span'));
  stylePanelCategories = this.stylePanel.all(by.css('.accordian-row'));
  stylePanelLayoutSection = this.stylePanelCategories.get(0).element(by.css('.aheader'));
  stylePanelTypographySection = this.stylePanelCategories.get(1).element(by.css('.aheader'));
  stylePanelBackgroundSection = this.stylePanelCategories.get(2).element(by.css('.aheader'));
  stylePanelBorderSection = this.stylePanelCategories.get(3).element(by.css('.aheader'));
  stylePanelShadowsSection = this.stylePanelCategories.get(4).element(by.css('.aheader'));
  stylePanelEffectsSection = this.stylePanelCategories.get(5).element(by.css('.aheader'));
  stylePanelCategoryHeadings = this.stylePanelCategories.all(by.css('.aheader span'));
  layoutStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-layout-style-panels'));
  typographyStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-typography-style-panels'));
  backgroundStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-background-style-panels'));
  borderStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-border-style-panels'));
  shadowsStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-shadow-style-panels'));
  effectsStylePanel = this.stylePanel.element(by.tagName('msd-branches-editor-slide-editor-element-effect-style-panels'));
  sequencer = this.slidesEditor.element(by.tagName('msd-branches-editor-panels-sequencer'));
  sequencerHeader = this.sequencer.element(by.css('.header span'));
  sequencerIcon = this.sequencer.element(by.tagName('md-icon'));
  stage = this.slidesEditor.element(by.tagName('main')).element(by.css('.sw .stage'));
  stageSlideElements = this.slidesEditor.element(by.tagName('msd-branches-stage-slide')).all(by.tagName('msd-branches-stage-slide-element'));
  elementMenu = this.slidesEditor.element(by.tagName('msd-branches-editor-slide-editor-element-menu'));

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getPanelSidenavWidth() {
    return this.panelSideNav.getSize().then( (panelSidenav) => {
      return panelSidenav.width;
    })
  }

  clickfirstStageElement() {
    return browser.executeScript('return arguments[0].click()', this.stageSlideElements.get(0));
  }

  clickAnimationButton() {
    return browser.executeScript('return arguments[0].click()', this.animationButton);
  }

  clickCewidgetButton() {
    return browser.executeScript('return arguments[0].click()', this.cewidgetButton);
  }

  clickImageButton() {
    return browser.executeScript('return arguments[0].click()', this.imageButton);
  }

  clickTextButton() {
    return browser.executeScript('return arguments[0].click()', this.textButton);
  }

  clickMathJaxButton() {
    return browser.executeScript('return arguments[0].click()', this.mathjaxButton);
  }

  clickFlowControlButton() {
    return browser.executeScript('return arguments[0].click()', this.flowcontrolButton);
  }

  clickHtmlButton() {
    return browser.executeScript('return arguments[0].click()', this.htmlButton);
  }

  clickIframeButton() {
    return browser.executeScript('return arguments[0].click()', this.iframeButton);
  }

  clickAudioButton() {
    return browser.executeScript('return arguments[0].click()', this.audioButton);
  }

  clickVideoButton() {
    return browser.executeScript('return arguments[0].click()', this.videoButton);
  }
}
*/
