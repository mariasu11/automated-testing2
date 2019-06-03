import { BranchesEditor } from './editor.po';
import { browser, by, element, ExpectedConditions } from 'protractor';
import {BranchesEditorSideNav} from './sidenav/sidenav.po';
import {BranchingEditor} from './editors/branching/branching.po';

describe('msd-branches-editor App', () => {
  let branchesEditor: BranchesEditor;
  let sideNav: BranchesEditorSideNav;
  let branchingEditor: BranchingEditor;

  function initializePageObjects(): void {
    branchesEditor = new BranchesEditor();
    sideNav = new BranchesEditorSideNav();
    branchingEditor = new BranchingEditor();
  }

  beforeEach(() => {
    initializePageObjects();
    branchesEditor.navigateTo();
    branchesEditor.removeAlert();
    browser.wait(ExpectedConditions.visibilityOf(branchesEditor.tabGroup), 5000);
  });

  it('branches editor should be present', (done: DoneFn) => {
    return branchesEditor.branchesEditorComponent.isDisplayed().then((result: boolean) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a side nav menu', (done: DoneFn) => {
    return sideNav.sideNavComponent.isDisplayed().then((result: boolean) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display a tab group', (done: DoneFn) => {
    return branchesEditor.tabGroup.isDisplayed().then((result: boolean) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });

  it('should display slides overview', (done: DoneFn) => {
    return branchingEditor.slidesOverview.isDisplayed().then((result: boolean) => expect(result).toEqual(true))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
