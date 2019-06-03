import {browser, element, by, Key, ExpectedConditions, ElementFinder} from 'protractor';
import {BranchesEditorSideNav} from '../../../../sidenav/sidenav.po';
import {ToolMenu} from './tool.po';
import {DataFactory} from '../../../../data-factory';
import {SVGCanvas} from '../../svgcanvas/svgcanvas.po';


describe('msd-branches-editor Tool Menu', () => {
  let sideNav: BranchesEditorSideNav;
  let toolMenu: ToolMenu;
  let dataFactory: DataFactory;
  let svgCanvas: SVGCanvas;


  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav;
    toolMenu = new ToolMenu();
    dataFactory = new DataFactory();
    svgCanvas = new SVGCanvas();
  }

  beforeEach(() => {
    initializePageObjects();
    toolMenu.navigateTo();
    toolMenu.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  it('should contain 4 buttons in the tools menu', (done: DoneFn) => {
    let nameArray = [];
    return toolMenu.buttons.count().then((number) => expect(number).toEqual(4))
      .then(() => toolMenu.buttons.each((button) => button.getAttribute('title').then((title) => nameArray.push(title))))
      .then(() => expect(nameArray).toEqual([dataFactory.LockCameraMovementAndZoomButtonTitle, dataFactory.ZoomExtentsButtonTitle,
        dataFactory.ZoomInButtonTitle, dataFactory.ZoomOutButtonTitle]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should contain the correct icon for each button in the tools menu', (done: DoneFn) => {
    let iconArray = [];
    return toolMenu.buttons.each((button) => toolMenu.getIconText(button).then((text) => iconArray.push(text)))
      .then(() => expect(iconArray).toEqual([dataFactory.LockCameraMovementAndZoomButtonIconText,
        dataFactory.ZoomExtentsButtonIconText, dataFactory.ZoomInButtonIconText, dataFactory.ZoomOutButtonIconText]))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should disable last 3 buttons in the tools menu when the lock movement and zoom button in the tools menu has been clicked', (done: DoneFn) => {
    toolMenu.lockCameraMovementAndZoomButton.click()
      .then(() => toolMenu.buttons.then((buttons) => {
        for (let i = 1; i < buttons.length; i++) {
          expect(buttons[i].isEnabled()).toBe(false);
        }
      }))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should allow user to zoom in with the zoom in button, zoom out with the zoom out button, and return to default view when the zoom extents button is clicked', (done: DoneFn) => {
    let initialTreeLocation;
    let secondTreeLocation;
    let thirdTreeLocation;
    let finalTreeLocation;
    svgCanvas.tree.getCssValue('transform').then((value) => initialTreeLocation = value)
      .then(() => toolMenu.zoomOutButton.click())
      .then(() => toolMenu.zoomOutButton.click())
      .then(() => svgCanvas.tree.getCssValue('transform').then((value) => secondTreeLocation = value))
      .then(() => toolMenu.zoomInButton.click())
      .then(() => svgCanvas.tree.getCssValue('transform').then((value) => thirdTreeLocation = value))
      .then(() => toolMenu.zoomExtentsButton.click())
      .then(() => browser.sleep(3000))
      .then(() => svgCanvas.tree.getCssValue('transform').then((value) => finalTreeLocation = value))
      .then(() => expect(initialTreeLocation).not.toEqual(secondTreeLocation))
      .then(() => expect(secondTreeLocation).not.toEqual(thirdTreeLocation))
      .then(() => expect(initialTreeLocation).not.toEqual(thirdTreeLocation))
      .then(() => expect(thirdTreeLocation).not.toEqual(finalTreeLocation))
      .then(() => expect(initialTreeLocation).toEqual(finalTreeLocation))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

});
