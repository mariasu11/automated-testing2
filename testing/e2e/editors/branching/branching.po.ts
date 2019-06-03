import { browser, by, element, ElementFinder, $, $$, ElementArrayFinder } from 'protractor';
import {BranchesEditor} from '../../editor.po';

export class BranchingEditor extends BranchesEditor {
//#region Elements
  slidesOverview: ElementFinder = this.branchesEditorComponent.$('msd-branches-editor-branching-editor');

//#endregion

}
