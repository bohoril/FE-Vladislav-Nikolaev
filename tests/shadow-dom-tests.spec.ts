import {expect, test} from "@playwright/test";
import {ShadowDomPage} from "../pages/shadow-dom-page";

test('shouldGetShadowText', async ({page}) => {
    const shadowDomPage = new ShadowDomPage(page);
    await shadowDomPage.navigate();

    const expectedText = 'My default text';
    const shadowTexts = await shadowDomPage.getAllShadowTexts();

    for (const text of shadowTexts) {
        expect(text).toBe(expectedText);
    }
});