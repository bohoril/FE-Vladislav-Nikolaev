import {expect, test} from "@playwright/test";
import {SecureFileDownloaderPage} from "../pages/secure-file-downloader-page";
import fs from 'fs';
import logger from "../utils/logger";

test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === 'passed') {
        logger.info('Test passed. Cleaning up downloads folder...');
        fs.rmSync('downloads', {recursive: true, force: true});
        logger.info('Downloads folder cleaned up successfully');
    }
});

test('shouldDownloadFile', async ({page, browserName}) => {
    if (browserName === 'webkit') {
        test.skip(true, 'Skipping test on WebKit due to Playwright open issue');
    }

    const downloaderPage = new SecureFileDownloaderPage(page);
    await downloaderPage.navigate();

    const files = await downloaderPage.getFileNames();
    expect(files.length).toBeGreaterThan(0);

    const filePath = await downloaderPage.downloadFile();
    expect(fs.existsSync(filePath)).toBeTruthy();
});