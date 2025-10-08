import { test, expect } from "@playwright/test";

test("has page header and counter button", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Testerama!" })).toBeVisible();

  await expect(page.getByRole("button", { name: /^count is/ })).toBeVisible();
});
