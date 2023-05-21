import { LaunchOptions, chromium } from 'playwright';
import { expect } from '@playwright/test';

const playwrightOptions: LaunchOptions = {
    headless: false
};

export default async function () {
    const browser = await chromium.launch(playwrightOptions);
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.wikipedia.org/');

    await page.type('#searchInput', 'Stranger in a Strange Land');
    await page.click('button[type="submit"]');

    const title = await page.innerText('h1#firstHeading');
    expect(title).toEqual('Stranger in a Strange Land');

    await browser.close();

    return null;
}
