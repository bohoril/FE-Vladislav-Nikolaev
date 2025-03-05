import {expect, test} from "@playwright/test";
import {DragAndDropPage} from "../pages/drag-and-drop-page";

test('shouldDragAndDropColumnAtoColumnB', async ({page}) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.navigate();

    await dragAndDropPage.dragAndDrop(dragAndDropPage.columnA, dragAndDropPage.columnB);
    await expect(page.locator(dragAndDropPage.columnA)).toHaveText('B');
    await expect(page.locator(dragAndDropPage.columnB)).toHaveText('A');
});