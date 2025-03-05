import {Page} from "@playwright/test";
import logger from "../utils/logger";

export abstract class BasePage {
    protected page: Page;
    protected abstract url: string;

    protected constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the URL specified in the `url` property.
     *
     * @returns {Promise<void>} A promise that resolves when the navigation is complete.
     */
    async navigate(): Promise<void> {
        logger.info(`Navigating to: ${this.url}`);
        await this.page.goto(this.url);
    }
}