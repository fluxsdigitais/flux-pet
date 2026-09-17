import { expect, test } from "@playwright/test";

const routes = ["/", "/gestao-inteligente", "/gestao-inteligente-copia", "/acolhedora"];

for (const route of routes) {
  test(`${route} renderiza sem overflow horizontal`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.ok()).toBeTruthy();
    await page.evaluate(() => document.fonts.ready);

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
    expect(errors).toEqual([]);
    await expect(page.locator("h1")).toContainText("Você sabe");
    await expect(page.locator("main img")).toHaveCount(3);
  });
}

test("menu móvel abre e fecha ao navegar", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Comportamento exclusivo do breakpoint móvel");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Fechar menu" })).toBeVisible();
  await page.locator("header").getByRole("link", { name: "Recursos", exact: true }).click();
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeVisible();
  await expect(page.locator("#recursos")).toBeInViewport();
});

test("acordeões preservam os estados de cada export", async ({ page }) => {
  await page.goto("/#faq");
  const premiumQuestion = page.getByRole("button", { name: "O que é o Flux Pet?" });
  await expect(premiumQuestion).toHaveAttribute("aria-expanded", "false");
  await premiumQuestion.click();
  await expect(premiumQuestion).toHaveAttribute("aria-expanded", "true");

  await page.goto("/acolhedora#faq");
  const warmQuestion = page.getByRole("button", { name: "O que é o Flux Pet?" });
  await expect(warmQuestion).toHaveAttribute("aria-expanded", "true");
  await warmQuestion.click();
  await expect(warmQuestion).toHaveAttribute("aria-expanded", "false");
});

test("gera evidências visuais", async ({ page, isMobile }) => {
  for (const [route, name] of [["/", "principal"], ["/acolhedora", "acolhedora"]] as const) {
    await page.goto(route, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      fullPage: true,
      path: `validation-artifacts/${name}-${isMobile ? "mobile" : "desktop"}.png`,
    });
  }
});
