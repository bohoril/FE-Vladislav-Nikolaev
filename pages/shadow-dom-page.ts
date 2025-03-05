import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class ShadowDomPage extends BasePage {
    protected url = '/shadowdom';
    public shadowHost: Locator;
    public shadowText: Locator;

    constructor(page: Page) {
        super(page);
        this.shadowHost = this.page.locator('#content > my-paragraph');
        this.shadowText = this.shadowHost.locator('slot[name="my-text"]');
    }

    /**
     * Retrieves the text content of all entities within the shadow host.
     *
     * @returns {Promise<string[]>} A promise that resolves to an array of text contents.
     */
    async getAllShadowTexts(): Promise<string[]> {
        logger.info('Retrieving text content of all entities within the shadow host');
        const texts = await this.shadowText.allTextContents();
        logger.info(`Retrieved texts: ${texts}`);
        return texts;
    }
}