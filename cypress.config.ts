import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            on('task', {
                async selenium(testPath:string) {
                    const { default: defaultExport } = await import(`./selenium/${testPath}`);
                    return defaultExport();
                }
            });

            on('task', {
                async playwright(testPath:string) {
                    const { default: defaultExport } = await import(`./playwright/${testPath}`);
                    return defaultExport();
                }
            });
        }
    }
});