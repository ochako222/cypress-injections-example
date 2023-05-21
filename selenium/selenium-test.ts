import { By, Builder, selenium } from 'selenium-webdriver';
import { expect } from 'chai';

export default async function () {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.wikipedia.org/');

    await driver.findElement(By.css('#searchInput')).sendKeys('Stranger in a Strange Land');
    await driver.findElement(By.css('button[type="submit"]')).click();

    const innerText = await driver.findElement(By.css('h1#firstHeading')).getText();
    expect(innerText).to.equal('Stranger in a Strange Land');

    await driver.quit();

    return null;
}
