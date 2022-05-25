import { esbuildPlugin } from '@web/dev-server-esbuild';
// import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter, summaryReporter } from '@web/test-runner';

export default {
    files: ['tests/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true })],
    /* browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' })
    ], */
    reporters: [
        summaryReporter(),
        defaultReporter({
            reportTestResults: true,
            reportTestProgress: true
        })
    ],
    coverageConfig: {
        report: true,
        reportDir: 'coverage',
        threshold: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50
        }
    }
};
