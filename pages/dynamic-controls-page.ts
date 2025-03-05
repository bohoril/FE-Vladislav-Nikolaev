import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class DynamicControlsPage extends BasePage {
    protected url = '/dynamic_controls';
    public checkbox: Locator;
    public removeButton: Locator;
    public addButton: Locator;
    public inputField: Locator;
    public enableButton: Locator;
    public disableButton: Locator;

    constructor(page: Page) {
        super(page);
        this.checkbox = this.page.locator('#checkbox');
        this.removeButton = this.page.getByRole('button', {name: 'Remove'});
        this.addButton = this.page.getByRole('button', {name: 'Add'});
        this.inputField = this.page.locator('#input-example input');
        this.enableButton = this.page.getByRole('button', {name: 'Enable'});
        this.disableButton = this.page.getByRole('button', {name: 'Disable'});
    }

    /**
     * Removes the checkbox by clicking the remove button.
     *
     * @returns {Promise<void>} A promise that resolves when the checkbox is removed.
     */
    async removeCheckbox(): Promise<void> {
        logger.info('Removing checkbox');
        await this.removeButton.click();
        logger.info('Checkbox removed');
    }

    /**
     * Adds the checkbox by clicking the add button.
     *
     * @returns {Promise<void>} A promise that resolves when the checkbox is added.
     */
    async addCheckbox(): Promise<void> {
        logger.info('Adding checkbox');
        await this.addButton.click();
        logger.info('Checkbox added');
    }

    /**
     * Enables the input field by clicking the enable button.
     *
     * @returns {Promise<void>} A promise that resolves when the input field is enabled.
     */
    async enableInputField(): Promise<void> {
        logger.info('Enabling input field');
        await this.enableButton.click();
        logger.info('Input field enabled');
    }

    /**
     * Disables the input field by clicking the disable button.
     *
     * @returns {Promise<void>} A promise that resolves when the input field is disabled.
     */
    async disableInputField(): Promise<void> {
        logger.info('Disabling input field');
        await this.disableButton.click();
        logger.info('Input field disabled');
    }
}