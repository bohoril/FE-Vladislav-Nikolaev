import {Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class DragAndDropPage extends BasePage {
    protected url = '/drag_and_drop';
    public columnA: string;
    public columnB: string;

    constructor(page: Page) {
        super(page);
        this.columnA = '#column-a';
        this.columnB = '#column-b';
    }

    /**
     * Drags an element from the source selector to the target selector.
     *
     * @param {string} source - The selector of the element to drag.
     * @param {string} target - The selector of the element to drop onto.
     * @returns {Promise<void>} A promise that resolves when the drag-and-drop action is complete.
     */
    async dragAndDrop(source: string, target: string): Promise<void> {
        logger.info(`Dragging ${source} to ${target}`);
        await this.page.dragAndDrop(source, target);
        logger.info('Drag and drop completed');
    }
}