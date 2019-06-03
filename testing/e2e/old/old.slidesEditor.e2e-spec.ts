// import {browser, element, by, Key, ExpectedConditions} from 'protractor';
// import {toBase64String} from '@angular/compiler/src/output/source_map';
// import {MsdBranchesEditorSlidesEditor} from './slidesEditor.po';


/*describe('msd-branches-editor Slides Editor', () => {
  let page: MsdBranchesEditorSlidesEditor;

  beforeEach(() => {
    page = new MsdBranchesEditorSlidesEditor();
    page.navigateTo();
  });

  xit('should contain the Slides Editor tag', () => {
    page.navigateTo();
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    expect(page.slidesEditor.isDisplayed()).toBe(true);
  });

  xit('should contain a navigation panels with 10 buttons', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    expect(page.navMenu.isDisplayed()).toBe(true);
    expect(page.allNavButtons.count()).toEqual(10);
    expect(page.allNavButtonNames.getText()).toEqual(['Animation', 'CEWidget', 'Image', 'Text', 'MathJAX', 'Flow Control', 'HTML', 'IFrame', 'Audio', 'Video']);
  });

  xit('should contain a tool menu', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(browser.ExpectedConditions.visibilityOf(page.toolMenu), 5000);
    expect(page.toolMenu.isDisplayed()).toBe(true);
  });

  xit('should contain a panels sidenav with header of Element Options', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    expect(page.panelSideNav.isDisplayed()).toBe(true);
    expect(page.panelSideNavHeader.getText()).toEqual('Element Options')
  });

  xit('should minimize the panels sidenav with header of Element Options when the fullscreen exit icon is clicked', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    expect(page.getPanelSidenavWidth()).toEqual(300);
    page.exitFullscreenButton.click();
    expect(page.getPanelSidenavWidth()).toEqual(30);
  });

  xit('should open the webobject dialog with the heading Add Web Object - Animation with the correct icon when the Animation button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickAnimationButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('movie_filter');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Animation');
  });

  xit('should open the toollibrary dialog when the CEWIDGET button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickCewidgetButton();
    expect(page.toolLibraryDialog.isDisplayed()).toBe(true); // functionality of this dialog has already been tested earlier.
  });

  xit('should open the webobject dialog with the heading Add Web Object - Image with the correct icon when the image button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickImageButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('photo');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Image');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Text with the correct icon when the text button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickTextButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('title');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Text');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Mathjax with the correct icon when MathJAX button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    page.clickMathJaxButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('functions');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Mathjax');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Flowcontrol with the correct icon when the add FlowControl button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickFlowControlButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('settings_ethernet');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Flowcontrol');
  });

  xit('should open the webobject dialog with the heading Add Web Object - HTML with the correct icon when the add HTML button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickHtmlButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('code');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('HTML');
  });

  xit('should open the webobject dialog with the heading Add Web Object - IFrame with the correct icon when the add IFrame button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickIframeButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('layers');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('IFrame');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Audio with the correct icon when the audio button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickAudioButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('audiotrack');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Audio');
  });

  xit('should open the webobject dialog with the heading Add Web Object - Video with the correct icon when the video button is clicked on the navigation panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.panelSideNav), 5000);
    page.clickVideoButton();
    expect(page.webObjectDialog.isDisplayed()).toBe(true);
    expect(page.webObjectDialogIcon.getText()).toEqual('movie');
    expect(page.webObjectDialogTitle.getText()).toEqual('Add Web Object - ');
    expect(page.webObjectDialogType.getText()).toEqual('Video');
  });

  xit('should display the style panels', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.stylePanel), 5000);
    expect(page.stylePanel.isDisplayed()).toBe(true);
  });

  xit('should display the default text in the style panels when no slide object has been selected', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.stylePanel), 5000);
    expect(page.stylePanelText.getText()).toEqual('Select an element on the stage to see it\'s style options.');
  });

  xit('should not display the default text in the style panels when a slide object has been selected', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object
    expect(page.stylePanelText.getText()).not.toEqual('Select an element on the stage to see it\'s style options.');
  });

  xit('should display six style categories in the style panels when a slide object has been selected', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object;
    expect(page.stylePanelCategories.count()).toEqual(6);
    expect(page.stylePanelCategoryHeadings.getText()).toEqual(['Layout', 'Typography', 'Background', 'Border', 'Shadows', 'Effects']);
  });

  xit('should display the expanded layout category in the style panels by default when a slide object is clicked. All other categories should be collapsed.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(0).getAttribute('class')).not.toContain('closed');
    expect(page.layoutStylePanel.isDisplayed()).toBe(true);
    page.stylePanelCategories.then( (categories) => {
      for (let i = 1; i < categories.length; i++) {
        expect(categories[i].getAttribute('class')).toContain('closed');
      }
    });
  });

  xit('should not display the layout category when it has been collapsed in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.layoutStylePanel.isDisplayed()).toBe(true);
    page.stylePanelLayoutSection.click();
    expect(page.layoutStylePanel.isDisplayed()).toBe(false);
    expect(page.stylePanelCategories.get(0).getAttribute('class')).toContain('closed');
  });

  xit('should toggle the display of the typography category when it is expanded in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(1).getAttribute('class')).toContain('closed');
    // expect(page.typographyStylePanel.isDisplayed()).toBe(false); unsure why this fails for typography, background, and border?
    page.stylePanelTypographySection.click();
    expect(page.stylePanelCategories.get(1).getAttribute('class')).not.toContain('closed');
    expect(page.typographyStylePanel.isDisplayed()).toBe(true);
  });

  xit('should toggle the display of the background category when it is expanded in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(2).getAttribute('class')).toContain('closed');
    // expect(page.backgroundStylePanel.isDisplayed()).toBe(false); unsure why this fails for typography, background, and border?
    page.stylePanelBackgroundSection.click();
    expect(page.stylePanelCategories.get(2).getAttribute('class')).not.toContain('closed');
    expect(page.backgroundStylePanel.isDisplayed()).toBe(true);
  });

  xit('should toggle the display of the border category when it is expanded in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(3).getAttribute('class')).toContain('closed');
    // expect(page.borderStylePanel.isDisplayed()).toBe(false); unsure why this fails for typography, background, and border?
    page.stylePanelBorderSection.click();
    expect(page.stylePanelCategories.get(3).getAttribute('class')).not.toContain('closed');
    expect(page.borderStylePanel.isDisplayed()).toBe(true);
  });

  xit('should toggle the display of the shadows category when it is expanded in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(4).getAttribute('class')).toContain('closed');
    expect(page.shadowsStylePanel.isDisplayed()).toBe(false);
    page.stylePanelShadowsSection.click();
    expect(page.stylePanelCategories.get(4).getAttribute('class')).not.toContain('closed');
    expect(page.shadowsStylePanel.isDisplayed()).toBe(true);
  });

  xit('should toggle the display of the effects category when it is expanded in the style panels when a slide object is clicked.', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.stylePanelCategories.get(5).getAttribute('class')).toContain('closed');
    expect(page.effectsStylePanel.isDisplayed()).toBe(false);
    page.stylePanelEffectsSection.click();
    expect(page.stylePanelCategories.get(5).getAttribute('class')).not.toContain('closed');
    expect(page.effectsStylePanel.isDisplayed()).toBe(true);
  });

  xit('should display the settings panels when the Settings Tab under the Element Options sidenav is clicked', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsTab), 5000);
    page.settingsTab.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsPanel), 5000);
    expect(page.settingsPanel.isDisplayed()).toBe(true);
  });

  xit('should display the default text in the settings panels when no slide object has been selected', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsTab), 5000);
    page.settingsTab.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsPanel), 5000);
    expect(page.settingsPanelText.getText()).toEqual('Select an element on the stage to see it\'s settings.');
  });

  xit('should not display the default text in the settings panels when a slide object has been selected', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object
    page.settingsTab.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsPanel), 5000);
    expect(page.settingsPanelText.getText()).not.toEqual('Select an element on the stage to see it\'s style options.');
  });

  xit('should display three settings categories in the style panels when a slide object has been selected', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    page.settingsTab.click();
    browser.wait(ExpectedConditions.visibilityOf(page.settingsPanel), 5000);
    expect(page.settingsPanelCategories.count()).toEqual(3);
    expect(page.settingsPanelCategoryHeadings.getText()).toEqual(['General', 'Element Specific', 'Asset Properties']);
  });

  it('should display the element menu when a slide object has been selected ', () => {
    page.firstSlideSelector.click();
    page.enterEditorModeButton.click();
    // expect(page.elementMenu.isDisplayed()).toBe(false);
    browser.wait(ExpectedConditions.elementToBeClickable(page.stageSlideElements.get(0)), 5000);
    page.clickfirstStageElement(); // click first stage object; code in above test does not work, unsure why?
    expect(page.elementMenu.isDisplayed()).toBe(true);
  });


  xit('should display the sequencer component with header and icon', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    expect(page.sequencer.isDisplayed()).toBe(true);
    expect(page.sequencerHeader.getText()).toEqual('Sequencer');
    expect(page.sequencerIcon.getText()).toEqual('movie_filter');
  });

  xit('should contain a stage area where the slide elements are displayed', () => {
    page.secondSlideSelector.click();
    page.enterEditorModeButton.click();
    expect(page.stage.isDisplayed()).toBe(true);
  });
});*/
