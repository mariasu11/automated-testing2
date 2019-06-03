import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {Grid} from './grid/grid.po';
import {BranchesEditorSideNav} from '../../../sidenav/sidenav.po';
import {SVGCanvas} from './svgcanvas.po';
import {Slide} from './slide/slide.po';
import {SlideMenu} from '../menus/slide/slideMenu.po';
import {DataFactory} from '../../../data-factory';
import {ToolMenu} from '../menus/tool/tool.po';


describe('msd-branches-editor SVG Canvas', () => {
  let sideNav: BranchesEditorSideNav;
  let svgCanvas: SVGCanvas;
  let grid: Grid;
  let slide: Slide;
  let slideMenu: SlideMenu;
  let dataFactory: DataFactory;
  let toolMenu: ToolMenu;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav;
    svgCanvas = new SVGCanvas;
    grid = new Grid();
    slide = new Slide();
    slideMenu = new SlideMenu();
    dataFactory = new DataFactory();
    toolMenu = new ToolMenu();
  }

  beforeEach(() => {
    initializePageObjects();
    svgCanvas.navigateTo();
    svgCanvas.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain a grid', (done: DoneFn) => {
    return grid.gridComponent.isDisplayed().then((result) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the move mode overlay when the move slide to another branch button is clicked after a slide is selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.moveSlideToAnotherBranchButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.MoveModeOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add a gray overlay on top of the grid when the move slide to another branch button is clicked after a slide is selected', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.moveSlideToAnotherBranchButton.click())
      .then(() => expect(svgCanvas.grayOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getOverlayColor()).toEqual(dataFactory.GrayOverlayColor))
      .then(() => expect(svgCanvas.getOverlayOpacity()).toEqual(dataFactory.GrayOverlayOpacity))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should dim and not display a cursor on slides that cannot be selected when the move slide to another branch button is clicked after a slide is selected', (done: DoneFn) => {
    slide.getSlideSelector(3).click()
      .then(() => slideMenu.moveSlideToAnotherBranchButton.click())
      .then(() => expect(svgCanvas.getSecondSlideOpacity()).toEqual(dataFactory.GrayOverlayOpacity))
      .then(() => expect(svgCanvas.getSecondSlideCursor()).toEqual(dataFactory.NoCursorValue))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should correctly move slide to the selected slide when the move slide to another branch button is clicked', (done: DoneFn) => {
    slide.getSlideSelector(3).click()
      .then(() => expect(svgCanvas.numberOfFirstSlideBranches()).toEqual(1))
      .then(() => slideMenu.moveSlideToAnotherBranchButton.click())
      .then(() => slide.getSlideSelector(1).click())
      .then(() => expect(svgCanvas.numberOfFirstSlideBranches()).toEqual(2))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the select an existing slide overlay when the continue button from the toggle add existing slide button submenu is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.SelectExistingSlideOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the select an existing slide overlay when the outcome button from the toggle add existing slide button submenu is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.outcomeButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.SelectExistingSlideOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the select an existing slide overlay when the selection button from the toggle add existing slide button submenu is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.selectionButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.SelectExistingSlideOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display the select an existing slide overlay when the tally button from the toggle add existing slide button submenu is clicked', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.tallyButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.SelectExistingSlideOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add a gray overlay on top of the grid when the continue button is clicked from the toggle add existing slide button submenu', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(svgCanvas.grayOverlay.isDisplayed()).toEqual(true))
      .then(() => expect(svgCanvas.getOverlayColor()).toEqual(dataFactory.GrayOverlayColor))
      .then(() => expect(svgCanvas.getOverlayOpacity()).toEqual(dataFactory.GrayOverlayOpacity))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should dim and not display a cursor on slides that cannot be selected on the select an existing slide overlay ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(svgCanvas.getSecondSlideOpacity()).toEqual(dataFactory.GrayOverlayOpacity))
      .then(() => expect(svgCanvas.getSecondSlideCursor()).toEqual(dataFactory.NoCursorValue))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of slides that can be selected to green when hovered over on the select an existing slide overlay ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => expect(slide.getSlide(1).getCssValue('fill')).toEqual(dataFactory.DefaultSlideColor))
      .then(() => browser.actions().mouseMove(slide.getSlide(1)).perform())
      .then(() => browser.sleep(5000))
      .then(() => expect(slide.getSlide(1).getCssValue('fill')).toEqual(dataFactory.SlideHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add the selected existing slide to the originally selected slide when chosen from the select an existing slide overlay ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => expect(svgCanvas.numberOfSecondSlideBranches()).toEqual(1))
      .then(() => slideMenu.toggleAddExistingSlideMenuButton.click())
      .then(() => slideMenu.continueButton.click())
      .then(() => slide.getSlideSelector(1).click())
      .then(() => browser.sleep(3000))
      .then(() => expect(svgCanvas.numberOfSecondSlideBranches()).toEqual(2))
      .then(() => slide.allSlides.count().then((number) => expect(slide.getSlideTitle(number)).toEqual(slide.getSlideTitle(1))))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should add the correct branching logic after a slide is selected from the select an existing slide overlay', () => {
    // Currently, only continue logic is added even if another branch logic is selected from the toggle add existing slide submenu.

  });

  it('should display the duplicate mode overlay when the duplicate existing slide button is clicked ', (done: DoneFn) => {
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.duplicateExistingSlideButton.click())
      .then(() => expect(svgCanvas.modeOverlay.isDisplayed()).toBe(true))
      .then(() => expect(svgCanvas.getModeOverlayHeading()).toEqual(dataFactory.DuplicateModeOverlayHeading))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should duplicate existing slides to the slide you selected in the duplicate mode overlay as long as it comes before the originally selected slide*', (done: DoneFn) => {
    let initialNumberOfSlides;
    slide.getSlideSelector(2).click()
      .then(() => slide.allSlides.count().then((number) => initialNumberOfSlides = number))
      .then(() => slideMenu.duplicateExistingSlideButton.click())
      .then(() => slide.getSlideSelector(1).click())
      .then(() => browser.sleep(3000))
      .then(() => slide.allSlides.count().then((finalNumber) => expect(finalNumber).toBeGreaterThan(initialNumberOfSlides)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should allow user to drag slides around on canvas when the lock camera movement and zoom button in the tools menu has NOT been clicked', (done: DoneFn) => {
    let initialTreeLocation;
    slide.getSlideSelector(2).click()
      .then(() => svgCanvas.tree.getCssValue('transform').then((transformValue) => initialTreeLocation = transformValue))
      .then(() => browser.actions().dragAndDrop(slide.getSlideObject(2), slideMenu.slideMenuComponent).perform())
      .then(() => svgCanvas.tree.getCssValue('transform').then((finalTreeLocation) => expect(finalTreeLocation).not.toEqual(initialTreeLocation)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should not allow user to drag slides around on canvas when the lock camera movement and zoom button in the tools menu has been clicked', (done: DoneFn) => {
    let initialTreeLocation;
    slide.getSlideSelector(2).click()
      .then(() => svgCanvas.tree.getCssValue('transform').then((transformValue) => initialTreeLocation = transformValue))
      .then(() => toolMenu.lockCameraMovementAndZoomButton.click())
      .then(() => browser.actions().dragAndDrop(slide.getSlideObject(2), slideMenu.slideMenuComponent).perform())
      .then(() => svgCanvas.tree.getCssValue('transform').then((finalTreeLocation) => expect(finalTreeLocation).toEqual(initialTreeLocation)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });



});
