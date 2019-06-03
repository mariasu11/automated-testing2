import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchingEditor} from './branching.po';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {SVGCanvas} from './svgcanvas/svgcanvas.po';
import {ToolMenu} from './menus/tool/tool.po';
import {Slide} from './svgcanvas/slide/slide.po';
import {SlideMenu} from './menus/slide/slideMenu.po';


describe('msd-branches-editor Branching Editor Component', () => {
  let sideNav: BranchesEditorSideNav;
  let branchingEditor: BranchingEditor;
  let svgCanvas: SVGCanvas;
  let toolMenu: ToolMenu;
  let slide: Slide;
  let slideMenu: SlideMenu;



  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    branchingEditor = new BranchingEditor();
    svgCanvas = new SVGCanvas();
    toolMenu = new ToolMenu();
    slide = new Slide();
    slideMenu = new SlideMenu();
  }

  beforeEach(() => {
    initializePageObjects();
    branchingEditor.navigateTo();
    branchingEditor.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain a canvas', (done: DoneFn) => {
    return svgCanvas.canvas.isDisplayed().then((result) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a tool menu', (done: DoneFn) => {
    return toolMenu.toolMenuComponent.isDisplayed().then((result) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a slide menu  when a slide is clicked', (done: DoneFn) => {
    slide.getSlideSelector(1).click()
      .then(() => expect(slideMenu.slideMenuComponent.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));

  });
/*
  it('should contain a multi menu', () => {
    expect(page.toolsMenu.isPresent()).toBe(true);
    expect(page.toolsMenu.isDisplayed()).toBe(true);
  });*/

});
