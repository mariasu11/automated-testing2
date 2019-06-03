import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {Slide} from './slide.po';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {SlidesEditor} from '../../../slides/slides.po';
import {DataFactory} from '../../../../data-factory';


describe('msd-branches-editor Slide Component', () => {
  let sideNav: BranchesEditorSideNav;
  let slide: Slide;
  let slidesEditor: SlidesEditor;
  let dataFactory: DataFactory;


  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav;
    slide = new Slide();
    slidesEditor = new SlidesEditor();
    dataFactory = new DataFactory();
  }

  beforeEach(() => {
    initializePageObjects();
    slide.navigateTo();
    slide.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });


  it('should contain slides', (done: DoneFn) => {
    return slide.allSlides.isDisplayed().then((result) => expect(result).toContain(true))
      .then(() => expect(slide.allSlides.count()).toBeGreaterThanOrEqual(1))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain branching logic', (done: DoneFn) => {
    return slide.branches.isDisplayed().then((result) => expect(result).toContain(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain a title and an object count on each slide', (done: DoneFn) => {
    return slide.slideObjects.each((slideObject) => expect(slideObject.$('.title tspan').getText()).toBeDefined())
      .then(() => slide.slideObjects.each((slideObject) => expect(slideObject.$('.objectcount').getText).toBeDefined()))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of a slide to green when hovered over', (done: DoneFn) => {
    return slide.getFirstSlideColor().then((color) => expect(color).toEqual(dataFactory.DefaultSlideColor))
      .then(() => slide.getSlide(1).getAttribute('class').then((classAttribute) => expect(classAttribute).not.toContain('hover')))
      .then(() => browser.actions().mouseMove(slide.getSlide(1)).perform())
      .then(() => browser.sleep(5000))
      .then(() => slide.getSlide(1).getAttribute('class').then((classAttribute) => expect(classAttribute).toContain('hover')))
      .then(() => slide.getFirstSlideColor().then((color) => expect(color).toEqual(dataFactory.SlideHoverColor)))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should change the color of a slide to green when it is clicked', (done: DoneFn) => {
    slide.getSlideSelector(1).click()
      .then(() => browser.sleep(5000))
      .then(() => expect(slide.getFirstSlideColor()).toEqual(dataFactory.SlideHoverColor))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
