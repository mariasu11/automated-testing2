import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {DataFactory} from '../../../../data-factory';
import {StylePanel} from './style.po';
import {Slide} from '../../../branching/svgcanvas/slide/slide.po';
import {SlideMenu} from '../../../branching/menus/slide/slideMenu.po';
import {SlidesEditor} from '../../slides.po';
import {LayoutStylePanelComponent} from './layout/layout.po';
import {TypographyStylePanelComponent} from './typography/typography.po';
import {BackgroundStylePanelComponent} from './background/background.po';
import {BorderStylePanelComponent} from './border/border.po';
import {ShadowStylePanelComponent} from './shadow/shadow.po';
import {EffectStylePanelComponent} from './effect/effect.po';
import {style} from "@angular/core";


describe('Style Panel', () => {
  let sideNav: BranchesEditorSideNav;
  let dataFactory: DataFactory;
  let stylePanel: StylePanel;
  let slide: Slide;
  let slideMenu: SlideMenu;
  let slidesEditor: SlidesEditor;
  let layoutCategory: LayoutStylePanelComponent;
  let typographyCategory: TypographyStylePanelComponent;
  let backgroundCategory: BackgroundStylePanelComponent;
  let borderCategory: BorderStylePanelComponent;
  let shadowCategory: ShadowStylePanelComponent;
  let effectCategory: EffectStylePanelComponent;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    dataFactory = new DataFactory();
    stylePanel = new StylePanel();
    slide = new Slide();
    slideMenu = new SlideMenu();
    slidesEditor = new SlidesEditor();
    layoutCategory = new LayoutStylePanelComponent();
    typographyCategory = new TypographyStylePanelComponent();
    backgroundCategory = new BackgroundStylePanelComponent();
    borderCategory = new BorderStylePanelComponent();
    shadowCategory = new ShadowStylePanelComponent();
    effectCategory = new EffectStylePanelComponent();
  }

  beforeEach(() => {
    initializePageObjects();
    stylePanel.navigateTo();
    stylePanel.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should display the default text in the style panels when no slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => expect(stylePanel.placeholderText.getText()).toEqual(dataFactory.StylePanelDefaultText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should not display the default text in the style panel when a slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.placeholderText.getText()).not.toEqual(dataFactory.StylePanelDefaultText))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display six style categories in the style panel when a slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.count()).toEqual(6))
      .then(() => expect(stylePanel.categoryHeadings.getText()).toEqual(dataFactory.StylePanelCategoryHeadings))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain each style category component in the style panel when a slide object has been selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(layoutCategory.component.isPresent()).toBe(true))
      .then(() => expect(typographyCategory.component.isPresent()).toBe(true))
      .then(() => expect(backgroundCategory.component.isPresent()).toBe(true))
      .then(() => expect(borderCategory.component.isPresent()).toBe(true))
      .then(() => expect(shadowCategory.component.isPresent()).toBe(true))
      .then(() => expect(effectCategory.component.isPresent()).toBe(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the expanded layout category in the style panels by default when a slide object is clicked. All other categories should be collapsed.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(0).getAttribute('class')).not.toContain('closed'))
      .then(() => expect(layoutCategory.component.isDisplayed()).toBe(true))
      .then(() => stylePanel.categories.then((categories) => {
        for (let i = 1; i < categories.length; i++) {
          expect(categories[i].getAttribute('class')).toContain('closed');
        }
      }))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should not display the layout category when it has been collapsed in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => stylePanel.layoutSection.click())
      .then(() => expect(stylePanel.categories.get(0).getAttribute('class')).toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the typography category when it is expanded in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(1).getAttribute('class')).toContain('closed'))
      .then(() => stylePanel.typographySection.click())
      .then(() => expect(typographyCategory.component.isDisplayed()).toBe(true))
      .then(() => expect(stylePanel.categories.get(1).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));

  });

  it('should toggle the display of the background category when it is expanded in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(2).getAttribute('class')).toContain('closed'))
      .then(() => stylePanel.backgroundSection.click())
      .then(() => expect(backgroundCategory.component.isDisplayed()).toBe(true))
      .then(() => expect(stylePanel.categories.get(2).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the border category when it is expanded in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(3).getAttribute('class')).toContain('closed'))
      .then(() => stylePanel.borderSection.click())
      .then(() => expect(borderCategory.component.isDisplayed()).toBe(true))
      .then(() => expect(stylePanel.categories.get(3).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the shadows category when it is expanded in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(4).getAttribute('class')).toContain('closed'))
      .then(() => stylePanel.shadowsSection.click())
      .then(() => expect(shadowCategory.component.isDisplayed()).toBe(true))
      .then(() => expect(stylePanel.categories.get(4).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should toggle the display of the effects category when it is expanded in the style panels when a slide object is clicked.', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => expect(stylePanel.categories.get(5).getAttribute('class')).toContain('closed'))
      .then(() => stylePanel.effectsSection.click())
      .then(() => expect(effectCategory.component.isDisplayed()).toBe(true))
      .then(() => expect(stylePanel.categories.get(5).getAttribute('class')).not.toContain('closed'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
