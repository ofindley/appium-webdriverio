const dialog = require('../../pageObjects/dialog.page');
const expect = require('chai').expect;

describe('Dialog', ()=>{
    // Execute a block of code before every test
    beforeEach(() => {
    });

    it('Verify that the text entry dialog username & password fields are editable', ()=>{
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.textEntryDialogBtn.click();

        dialog.userNameField.addValue("Test User");
        dialog.userNameField.clearValue();
        dialog.userNameField.addValue("Actual User");

        dialog.passwordField.clearValue();
        dialog.passwordField.addValue("Test Pass");

        let text = dialog.userNameField.getText();
        console.log(text);
        expect(text).equal("Actual User");

        dialog.dialogOkBtn.click();
    });

    it('Verify that the app adjust when orientation is switched', () => {
        console.log(driver.getOrientation());
        driver.setOrientation('LANDSCAPE');

        driver.saveScreenshot('./screenshots/landscape.png');
        dialog.appBtn.click();

        driver.setOrientation('PORTRAIT');
        driver.back();
        driver.saveScreenshot('./screenshots/portrait.png');
    });

    it('Verify isSelected, isEnabled & isDisplayed', () => {
        dialog.viewBtn.click();
        driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])

        dialog.tabsBtn.click();
        dialog.contentByIdBtn.click();

        let isEnabled, isSelected, isDisplayed;

        for(i=0; i<3; i++){
            isEnabled = dialog.tabs[i].isEnabled();
            isSelected = dialog.tabs[i].isSelected();
            isDisplayed = dialog.tabs[i].isDisplayed();
    
            console.log(`Tab ${i+1}`)
            console.log('isEnabled:', isEnabled);
            console.log('isSelected:', isSelected);
            console.log('isDisplayed:', isDisplayed);

            if(isEnabled && isSelected){
                console.log("Tab Details 1:", dialog.tab1Details.isDisplayed());
                console.log("Tab Details 2:", dialog.tab2Details.isDisplayed());
                console.log("Tab Details 3:", dialog.tab3Details.isDisplayed());
            }
        }
    });

    it('Verify Timeouts', () => {
        //driver.setImplicitTimeout(10000);
        //driver.setTimeouts(10000);
        //driver.pause(10000);

        dialog.viewBtn.click();
        //dialog.tabsBtn.click();
    });

    it('Verify the repeat alarm options has attribute checked set to true when selected', ()=>{
        let isChecked, text;

        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.repeatAlarmBtn.click();

        text = dialog._weekdayCheckbox(0).getText();
        expect(text).equal('Every Monday');

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('false');

        dialog._weekdayCheckbox(0).click();

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('true');
    });

    // Execute a block of code after every test
    afterEach(() => {
        driver.reset();
    });
})