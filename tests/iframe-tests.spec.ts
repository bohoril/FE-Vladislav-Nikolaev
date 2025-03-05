import {expect, test} from "@playwright/test";
import {IframePage} from "../pages/iframe-page";

// There is a TinyMCE payment requirement to interact with the editor, therefore I am only checking the text.
test('shouldRetrieveTextFromIframe', async ({page}) => {
    const iframePage = new IframePage(page);
    await iframePage.navigate();

    await expect(iframePage.iframeBody).toHaveText('Your content goes here.');
});