import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 1 : 0,
  retries: 1,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. */
  reporter: 'html',

  /* Global timeout for each test (e.g., 60 seconds). */
  timeout: 50000,  // Timeout global configurado correctamente  //CAMBIAR A 60000 OTRA VEZ CON PRUEBAS REALES

  /* Shared settings for all the projects below. */
  use: {
    // Use video recording. Lines 24, 25, 26 and 27
    video: 'on', // off to not record videos
    launchOptions: {
      slowMo: 1000
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* No usar headless mode para ver las pruebas en tiempo real. */
    headless: false,

    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry' //to record all the test race, // 'retain-on-failure'  // This is to record only the failure tests. 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
        headless: false, // Ejecutar en modo gráfico
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'], 
        headless: false, // Ejecutar en modo gráfico
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'], 
        headless: false, // Ejecutar en modo gráfico
      },
    },
    
  ],
});
