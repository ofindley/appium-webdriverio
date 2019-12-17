const dialog = require('../../pageObjects/dialog.page');
const data = require('../../data/data');
const expect = require('chai').expect;
 
describe('Cancel Dialogs', () => {
    // Execute a block of code at the start of the test suite
    before(() => {
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
    });
    
    it('Verify that the cancel dialog short message is correct and displays', () => {
        dialog.cancelDialogMsgBtn.click();
        expect(dialog.getDialogModalTitle()).equal(data.shortCancelDialog.title);
        dialog.dialogOkBtn.click();
    });
    
    it('Verify that the cancel dialog long message is correct and displays', () => {
        dialog.cancelLongDialogMsgBtn.click();
        expect(dialog.getDialogModalTitle()).equal(data.longCancelDialog.title);
        expect(dialog.getDialogModalMsg()).equal(data.longCancelDialog.msg);
        dialog.dialogOkBtn.click();
    });
    
    it('Verify that the cancel dialog ultra long message is correct', () => {
        dialog.cancelUltraLongDialogMsgBtn.click();
        expect(dialog.getDialogModalTitle()).equal(data.ultraLongCancelDialog.title);
        expect(dialog.getDialogModalMsg()).equal(data.ultraLongCancelDialog.msg);
        dialog.dialogOkBtn.click();
    });

    // Execute a block of code at the end of the test suite
    after(() => {
    });
});
