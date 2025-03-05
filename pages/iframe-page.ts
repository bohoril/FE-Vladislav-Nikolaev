import {FrameLocator, Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";

export class IframePage extends BasePage {
    protected url = '/iframe';
    public iframe: FrameLocator;
    public iframeBody: Locator;

    constructor(page: Page) {
        super(page);
        this.iframe = this.page.frameLocator('#mce_0_ifr');
        this.iframeBody = this.iframe.locator('body');
    }
}