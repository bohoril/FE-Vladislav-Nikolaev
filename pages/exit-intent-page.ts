import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class ExitIntentPage extends BasePage {
    protected url = '/exit_intent';
    public modal: Locator;

    constructor(page: Page) {
        super(page);
        this.modal = this.page.locator('.modal');
    }

    /**
     * Triggers the exit intent by moving the mouse out of the viewport.
     *
     * @returns {Promise<void>} A promise that resolves when the exit intent is triggered.
     * @throws {Error} If the viewport size is not available.
     */
    async triggerExitIntent(): Promise<void> {
        const viewportSize = this.page.viewportSize();
        if (viewportSize) {
            const {width, height} = viewportSize;
            logger.info('Moving mouse to center of the viewport');
            await this.page.mouse.move(width / 2, height / 2);
            logger.info('Moving mouse out of the viewport to trigger exit intent');
            await this.page.mouse.move(width / 2, -50);
            logger.info('Exit intent triggered');
        } else {
            const errorMessage = 'Viewport size is not available';
            logger.error(errorMessage);
            throw new Error(errorMessage);
        }
    }
}