const { browser } = require ('webdriverio');

function waituntilElementExist(element, timeout = 10000) {
    element.waitForExist(timeout);
}

async function waitAndClick(element){
    await waituntilElementExist(element);
    await element.click();

}

module.exports = {
    waituntilElementExist,
    waitAndClick
};