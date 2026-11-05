
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'tests/features/**/*.feature',

    steps: [
        'tests/steps/**/*.ts',
        'tests/fixtures/login.fixture.ts'
    ],

    importTestFrom: './tests/fixtures/login.fixture',
});

export default defineConfig({
    testDir,

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: 'html',

    use: {
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
