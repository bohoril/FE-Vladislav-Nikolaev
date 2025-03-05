import {Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class NestedFramesPage extends BasePage {
    protected url = '/nested_frames';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Retrieves the text content from a specified frame.
     *
     * @param {string} frameName - The name of the frame to retrieve text from.
     * @returns {Promise<string>} A promise that resolves to the text content of the frame.
     * @throws {Error} If the frame with the specified name is not found.
     */
    async getFrameText(frameName: string): Promise<string> {
        logger.info(`Attempting to retrieve text from frame: ${frameName}`);
        const frame = this.page.frame({name: frameName});
        if (!frame) {
            const errorMessage = `Frame with name ${frameName} not found`;
            logger.error(errorMessage);
            throw new Error(errorMessage);
        }
        const text = await frame.locator('body').innerText();
        logger.info(`Retrieved text from frame ${frameName}: ${text}`);
        return text;
    }
}