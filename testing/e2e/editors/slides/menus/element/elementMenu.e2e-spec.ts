import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {DataFactory} from '../../../../data-factory';
import {Slide} from '../../../branching/svgcanvas/slide/slide.po';
import {SlidesEditor} from '../../slides.po';
import {ElementMenu} from './elementMenu.po';
import {SlideMenu} from '../../../branching/menus/slide/slideMenu.po';



describe('Element Menu', () => {
  let sideNav: BranchesEditorSideNav;
  let dataFactory: DataFactory;
  let slide: Slide;
  let slidesEditor: SlidesEditor;
  let elementMenu: ElementMenu;
  let slideMenu: SlideMenu;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    dataFactory = new DataFactory();
    slide = new Slide();
    slidesEditor = new SlidesEditor();
    elementMenu = new ElementMenu();
    slideMenu = new SlideMenu();
  }

  beforeEach(() => {
    initializePageObjects();
    elementMenu.navigateTo();
    elementMenu.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain 5 buttons in the element menu', (done: DoneFn) => {
    let nameArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => elementMenu.buttons.count().then((number) => expect(number).toEqual(5)))
      .then(() => elementMenu.buttons.each((button) => button.getAttribute('title').then((title) => nameArray.push(title))))
      .then(() => expect(nameArray).toEqual([dataFactory.DuplicateElementsButtonTitle, dataFactory.CopyElementsButtonTitle,
        dataFactory.MoveElementsBackwardButtonTitle, dataFactory.MoveElementsForwardButtonTitle, dataFactory.RemoveElementsButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain the correct icon for each button in the element menu', (done: DoneFn) => {
    let iconArray = [];
    slide.getSlideSelector(2).click()
      .then(() => slideMenu.enterEditorModeButton.click())
      .then(() => browser.wait(ExpectedConditions.visibilityOf(slidesEditor.panelSideNav), 5000))
      .then(() => slidesEditor.clickfirstStageElement())
      .then(() => elementMenu.buttons.each((button) => elementMenu.getIconText(button).then((text) => iconArray.push(text))))
      .then(() => expect(iconArray).toEqual([dataFactory.DuplicateElementsButtonIconText,
        dataFactory.CopyElementsButtonIconText, dataFactory.MoveElementsBackwardIconText, dataFactory.MoveElementForwardButtonIconText,
        dataFactory.RemoveElementsButtonIconText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
