/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

const path = require('path');

export default defineConfig({
    reporter: 'cypress-multi-reporters',
    chromeWebSecurity: false,
    screenshotsFolder: 'report/assets',
    screenshotOnRunFailure: true,
    video: false,
    e2e: {
        experimentalOriginDependencies: true,
        experimentalInteractiveRunEvents: true,
        downloadsFolder: 'report/downloads',
        watchForFileChanges: false,
        defaultCommandTimeout: 60 * 1000,
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            on('task', {
                async playwright() {
                    // const { default: myTest } = await import('./playwright/playwright-test');
                    const { default: defaultExport } = await import('./playwright/playwright-test');
                    return defaultExport();
                }
            });

            on('task', {
                async selenium() {
                    // const { default: myTest } = await import('./playwright/playwright-test');
                    const { default: defaultExport } = await import('./selenium/selenium-test');
                    return defaultExport();
                }
            });
        }
    }
});
