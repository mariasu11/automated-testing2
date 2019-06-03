import { browser, by, element } from 'protractor';

/*export class MsdBranchesEditorSlidesOverview {
  canvas = element(by.tagName('msd-branches-editor-svg-canvas'));
  grid = this.canvas.element(by.tagName('g'));
  tree = element(by.id('tree'));
  slides = element.all(by.css('.graphic .slide'));
  selectableSlides = element.all(by.css('.graphic .selector'));
  slideObjects = element.all(by.css('.graphic'));
  branches = element.all(by.css('.branches'));
  toolsMenu = element(by.tagName('msd-branches-editor-menu-tool'));
  toolsMenuButtons = this.toolsMenu.all(by.tagName('button'));
  lockCameraMovementAndZoomButton = this.toolsMenuButtons.get(0);
  zoomExtentsButton = this.toolsMenuButtons.get(1);
  zoomInButton = this.toolsMenuButtons.get(2);
  zoomOutButton = this.toolsMenuButtons.get(3);
  firstSlide = this.slides.get(0);
  firstSlideSelector = this.selectableSlides.get(0);
  secondSlideSelector = this.selectableSlides.get(1);
  thirdSlideSelector = this.selectableSlides.get(2);
  fourthSlideSelector = this.selectableSlides.get(3);
  fifthSlideSelector = this.selectableSlides.get(4);
  slideMenu = element(by.tagName('msd-branches-editor-menu-slide'));
  slideMenuButtons = this.slideMenu.all(by.tagName('button'));
  removeSelectedSlideButton = this.slideMenuButtons.get(0);
  enterEditorModeButton = this.slideMenuButtons.get(1);
  moveSlideToAnotherBranchButton = this.slideMenuButtons.get(2);
  toggleAddSlideMenuButton = this.slideMenuButtons.get(3);
  toggleAddExistingSlideMenuButton = this.slideMenuButtons.get(4);
  duplicateExistingSlideButton = this.slideMenuButtons.get(5);
  toggleAddObjectsMenuButton = this.slideMenuButtons.get(6);
  editSlideButton = this.slideMenuButtons.get(7);
  slidesEditor = element(by.tagName('msd-branches-editor-slides-editor'));
  secondSlide = this.slideObjects.get(1);
  secondSlideTitle = this.secondSlide.element(by.css('.title tspan')).getText();
  firstSlideTitle = this.slideObjects.get(0).element(by.css('.title tspan')).getText();
  tabGroupLabels = element(by.tagName('msd-branches-editor')).element(by.tagName('md-sidenav-container md-tab-header')).all(by.css('.mat-tab-label'));
  firstSlideBranches = element.all(by.css('#tree > g > .subtree > .nodes'));
  // secondSlideBranches = element.all(by.css('.subtree:eq(1) > .nodes'));

  // secondSlideBranchLogicToNewSlide = this.secondSlideBranches().get(1).element(by.tagName('use'));
  branchLogicSubMenu = element(by.css('.branchlogic'));
  branchLogicSubMenuButtons = this.branchLogicSubMenu.all(by.tagName('button'));
  continueButton = this.branchLogicSubMenuButtons.get(0);
  outcomeButton = this.branchLogicSubMenuButtons.get(1);
  selectionButton = this.branchLogicSubMenuButtons.get(2);
  tallyButton = this.branchLogicSubMenuButtons.get(3);
  newSlideDialog = element(by.tagName('msd-branches-editor-dialog-slide'));
  slideDialogHeading = this.newSlideDialog.element(by.css('.title'));
  slideTitleInput = this.newSlideDialog.element(by.css('.properties')).element(by.id('md-input-1'));
  descriptionTextArea = this.newSlideDialog.element(by.css('.properties')).element(by.id('md-input-4'));
  slidesbackgroundColorInput = this.newSlideDialog.element(by.css('.properties')).element(by.id('md-input-6'));
  maxReplaysInput = this.newSlideDialog.element(by.css('.properties')).element(by.id('md-input-8'));
  allCheckboxInputs = element.all(by.css('input[type="checkbox"]'));
  checkboxes = element.all(by.tagName('md-checkbox'));
  manualReplayLabel = this.checkboxes.get(0).element(by.css('.mat-checkbox-label'));
  autoReplayLabel = this.checkboxes.get(1).element(by.css('.mat-checkbox-label'));
  autoPlayLabel = this.checkboxes.get(2).element(by.css('.mat-checkbox-label'));
  showControlsLabel = this.checkboxes.get(3).element(by.css('.mat-checkbox-label'));
  showProgressLabel = this.checkboxes.get(4).element(by.css('.mat-checkbox-label'));
  branchToURLLabel = this.checkboxes.get(5).element(by.css('.mat-checkbox-label'));
  cancelButtonName = this.getCancelButton(this.newSlideDialog).element(by.css('span span'));
  confirmButtonName = this.getConfirmButton(this.newSlideDialog).element(by.css('span span'));
  addObjectsSubMenu = element(by.css('.objectButtons'));
  addObjectsSubMenuButtons = this.addObjectsSubMenu.all(by.tagName('button'));
  addCEToolsToSlideButton = this.addObjectsSubMenuButtons.get(0);
  addMediaObjectsToSlideButton = this.addObjectsSubMenuButtons.get(1);
  addWebObjectsPlaceholdersToSlideButton = this.addObjectsSubMenuButtons.get(2);
  toolLibraryDialog = element(by.tagName('msd-branching-editor-dialog-toollibrary'));
  toolLibraryDialogHeading = this.toolLibraryDialog.element(by.css('.title'));
  toolLibraryDialogInputs = this.toolLibraryDialog.element(by.css('.pcontent')).all(by.tagName('input'));
  toolNameInput = this.toolLibraryDialogInputs.get(0);
  toolURLInput = this.toolLibraryDialogInputs.get(1);
  CEWidgetTypeDropdown = element(by.css('.mat-select-trigger'));
  CEWidgetTypes = element.all(by.tagName('md-option'));
  mediaLibraryDialog = element(by.tagName('msd-branching-editor-dialog-medialibrary'));
  mediaLibraryDialogHeading = this.mediaLibraryDialog.element(by.css('.title'));
  mediaLibraryDialogCloseButton = this.mediaLibraryDialog.element(by.tagName('button'));
  mediaPanel = this.mediaLibraryDialog.element(by.css('.pcontent')).element(by.tagName('msd-media-panels'));
  allAssetsMediaPanel = this.mediaPanel.all(by.tagName('msd-media-panels-asset-panels'));
  image01 = this.allAssetsMediaPanel.get(3);
  webObjectsSubMenu = element(by.css('.graphicalObjectButtons'));
  webObjectsSubMenuButtons = this.webObjectsSubMenu.all(by.tagName('button'));
  addCreateJSPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(0);
  addWidgetPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(1);
  addImagePlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(2);
  addTextPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(3);
  addIFramePlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(4);
  addHTMLPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(5);
  addMathJAXPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(6);
  addFlowControlPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(7);
  addAudioPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(8);
  addVideoPlaceholderToSlideButton = this.webObjectsSubMenuButtons.get(9);
  webObjectDialog = element(by.tagName('msd-branching-editor-dialog-webobject'));
  webObjectDialogTitle = this.webObjectDialog.element(by.css('.title'));
  webObjectDialogType = this.webObjectDialog.element(by.css('.type'));
  webObjectDialogIcon = this.webObjectDialog.element(by.css('.icon md-icon'));
  addWebObjectDialogNameInput = this.webObjectDialog.element(by.id('name'));
  addWebObjectDialogDescriptionInput = this.webObjectDialog.element(by.id('md-input-3'));
  addWebObjectDialogTextInput = this.webObjectDialog.element(by.tagName('msd-branches-editor-text-panels')).element(by.id('text'));
  addWebObjectDialogURLInput = this.webObjectDialog.element(by.tagName('msd-branches-editor-iframe-panels')).element(by.id('url'));
  htmlField = this.webObjectDialog.element(by.tagName('msd-branches-editor-html-panels')).element(by.css('textarea[name="html"]'));
  cssField = this.webObjectDialog.element(by.tagName('msd-branches-editor-html-panels')).element(by.css('textarea[name="css"]'));
  javascriptField = this.webObjectDialog.element(by.tagName('msd-branches-editor-html-panels')).element(by.css('textarea[name="javascript"]'));
  mathmlField = this.webObjectDialog.element(by.tagName('msd-branches-editor-mathjax-panels')).element(by.css('textarea[name="mathml"]'));
  continueRadioButton = this.webObjectDialog.element(by.tagName('msd-branches-editor-flowcontrol-panels')).element(by.css('md-radio-button[name="continue"'));
  hotspotRadioButton = this.webObjectDialog.element(by.tagName('msd-branches-editor-flowcontrol-panels')).element(by.css('md-radio-button[name="hotspot"'));
  audioPanel = this.webObjectDialog.element(by.tagName('msd-branches-editor-audio-panels'));
  videoPanel = this.webObjectDialog.element(by.tagName('msd-branches-editor-videojs-panels'));
  assetSelectionLabel = this.webObjectDialog.element(by.css('.asset label'));
  assetSelectionButtons = this.webObjectDialog.element(by.css('.select')).all(by.tagName('button'));
  selectButton = this.assetSelectionButtons.get(0);
  uploadButton = this.assetSelectionButtons.get(1);
  cancelButton = element.all(by.css('.actions button')).get(0);
  confirmButton = element.all(by.css('.actions button')).get(1);



  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getIconText(button) {
    return button.element(by.tagName('md-icon')).getText();
  }

  getSlideColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic .slide")[0]).getPropertyValue("fill")');
  }

  getFourthTabGroupLabel() {
   return this.tabGroupLabels.get(3).getText();
  }

  getModeOverlay() {
    return this.canvas.element(by.css('.modeOverlay'));
  }

  getOverlayHeading() {
    const modeOverlay = this.getModeOverlay();
    return modeOverlay.element(by.tagName('h3')).getText();
  }

  getGrayOverlay() {
    return this.canvas.element(by.css('.overlay'));
  }

  getOverlayColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelector(".overlay")).getPropertyValue("fill")');
  }

  getOverlayOpacity() {
    return browser.executeScript('return window.getComputedStyle(document.querySelector(".overlay")).getPropertyValue("fill-opacity")');
  }

  getSecondSlideOpacity() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic")[1]).getPropertyValue("opacity")');
  }

  getSecondSlideCursor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".graphic")[1]).getPropertyValue("cursor")');
  }

  getContinueButtonBackgroundColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".branchlogic button")[0]).getPropertyValue("background-color")');
  }

  getContinueButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".branchlogic button")[0], ":hover").getPropertyValue("background-color")');
  }

  getOutcomeButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".branchlogic button")[1], ":hover").getPropertyValue("background-color")');
  }

  getSelectionButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".branchlogic button")[2], ":hover").getPropertyValue("background-color")');
  }

  getTallyButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".branchlogic button")[3], ":hover").getPropertyValue("background-color")');
  }

  getConfirmButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".actions button")[1], ":hover").getPropertyValue("background-color")');
  }

  getCancelButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll(".actions button")[0], ":hover").getPropertyValue("background-color")');
  }

  getAllCheckboxes() {
    return browser.executeScript('return document.querySelectorAll("input[type="checkbox"]")');
  }

  getNewSlideTitle() {
    return this.slideObjects.last().element(by.css('.title tspan')).getText();
  }

  getObjectCount(slide) {
    return slide.element(by.css('.objectcount')).getText();
  }

  getMediaDialogCloseButtonHoverColor() {
    return browser.executeScript('return window.getComputedStyle(document.querySelectorAll("msd-branching-editor-dialog-medialibrary button")[0], ":hover").getPropertyValue("background-color")');
  }

  getAllActionButtons(dialog) {
    return dialog.element(by.css('.actions')).all(by.tagName('button'));
  }

  getCancelButton(dialog) {
    return this.getAllActionButtons(dialog).get(0);
  }

  getConfirmButton(dialog) {
    return this.getAllActionButtons(dialog).get(1);
  }

  numberOfSecondSlideBranches() {
    return browser.executeScript('return document.querySelectorAll(".subtree")[1].children.length');
  }

  secondSlideBranchLogicToNewSlide() {
    return browser.executeScript('return document.querySelectorAll(".subtree")[1].children[1].getElementsByTagName("use")[0].getAttribute("class")'); // or .className.baseVal
  }
}
*/
