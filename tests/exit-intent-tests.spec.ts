import {expect, test} from "@playwright/test";
import {ExitIntentPage} from "../pages/exit-intent-page";

test('shouldDisplayModalOnExitIntent', async ({page}) => {
    const exitIntentPage = new ExitIntentPage(page);
    await exitIntentPage.navigate();

    await exitIntentPage.triggerExitIntent();
    await expect(exitIntentPage.modal).toBeVisible();
});