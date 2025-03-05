import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class SecureFileDownloaderPage extends BasePage {
    protected url = '/download_secure';
    public fileLinks: Locator;

    constructor(page: Page) {
        super(page);
        this.fileLinks = this.page.locator('a[href^="download"]');
    }

    /**
     * Retrieves the names of all files available for download.
     * @returns {Promise<string[]>} A promise that resolves to an array of file names.
     */
    async getFileNames(): Promise<string[]> {
        logger.info('Getting file names');
        return await this.fileLinks.allTextContents();
    }

    /**
     * Downloads a file by its index.
     * @param {number} [index=0] - The index of the file to download.
     * @returns {Promise<string>} A promise that resolves to the file path of the downloaded file.
     * @throws Will throw an error if no files are available for download or if the file name cannot be retrieved.
     */
    async downloadFile(index: number = 0): Promise<string> {
        logger.info('Starting file download process...');

        const files = await this.fileLinks.all();
        if (files.length === 0) {
            const errorMessage = 'No files available for download';
            logger.error(errorMessage);
            throw new Error(errorMessage);
        }

        const fileName = await files[index].textContent();
        if (!fileName) {
            const errorMessage = 'Failed to get file name';
            logger.error(errorMessage);
            throw new Error(errorMessage);
        }

        logger.info(`Downloading file: ${fileName}`);

        const downloadPromise = this.page.waitForEvent('download');
        await files[index].click();
        const download = await downloadPromise;

        const filePath = `downloads/${fileName}`;
        await download.saveAs(filePath);
        logger.info(`File downloaded successfully to: ${filePath}`);

        return filePath;
    }
}