import {expect, test} from "@playwright/test";
import {NestedFramesPage} from "../pages/nested-frames-page";

test('shouldRetrieveTextFromAllFrames', async ({page}) => {
    const nestedFramesPage = new NestedFramesPage(page);
    await nestedFramesPage.navigate();

    expect(await nestedFramesPage.getFrameText('frame-left')).toBe('LEFT');
    expect(await nestedFramesPage.getFrameText('frame-middle')).toBe('MIDDLE');
    expect(await nestedFramesPage.getFrameText('frame-right')).toBe('RIGHT');
    expect(await nestedFramesPage.getFrameText('frame-bottom')).toBe('BOTTOM');
});