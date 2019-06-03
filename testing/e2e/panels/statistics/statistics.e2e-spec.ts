import {browser, element, by, Key, ExpectedConditions} from 'protractor';
import {BranchesEditorSideNav} from '../../sidenav/sidenav.po';
import {StatisticsPanel} from './statistics.po';


describe('msd-branches-editor Statistics Panel', () => {
  let sideNav: BranchesEditorSideNav;
  let statisticsPanel: StatisticsPanel;

  function initializePageObjects(): void {
    sideNav = new BranchesEditorSideNav();
    statisticsPanel = new StatisticsPanel();
  }

  beforeEach(() => {
    initializePageObjects();
    statisticsPanel.navigateTo();
    statisticsPanel.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(sideNav.sideNavComponent), 5000);
  });

  xit('should display the statistics dialog when the editor statistics button is clicked', (done: DoneFn) => {
    sideNav.statisticsButton.click()
      .then(() => expect(statisticsPanel.dialog.isDisplayed()).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  xit('should display the statistics dialog with a width of 400px when the statistics button is clicked', (done: DoneFn) => {
    sideNav.statisticsButton.click()
      .then(() => expect(statisticsPanel.getWidth(statisticsPanel.dialog)).toEqual(400))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  xit('should disable all inputs in the Statistics Dialog', (done: DoneFn) => {
    sideNav.statisticsButton.click()
      .then(() => statisticsPanel.dialogInputs.each((input) => {expect(input.isEnabled()).toBe(false) }))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
