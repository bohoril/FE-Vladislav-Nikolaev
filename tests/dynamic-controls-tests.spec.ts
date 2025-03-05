import {expect, test} from "@playwright/test";
import {DynamicControlsPage} from "../pages/dynamic-controls-page";

let dynamicControlsPage: DynamicControlsPage;

test.beforeEach(async ({page}) => {
    dynamicControlsPage = new DynamicControlsPage(page);
    await dynamicControlsPage.navigate();
});

test('shouldRemoveAndAddCheckbox', async () => {
    await dynamicControlsPage.removeCheckbox();
    await expect(dynamicControlsPage.checkbox).toBeHidden();

    await dynamicControlsPage.addCheckbox();
    await expect(dynamicControlsPage.checkbox).toBeVisible();
});

test('shouldEnableAndDisableInputField', async () => {
    await dynamicControlsPage.enableInputField();
    await expect(dynamicControlsPage.inputField).toBeEnabled();

    await dynamicControlsPage.disableInputField();
    await expect(dynamicControlsPage.inputField).toBeDisabled();
});