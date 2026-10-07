import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Studio/);
  });

  test('has hero section with headline', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /presença digital à altura do seu trabalho/i });
    await expect(heading).toBeVisible();
  });

  test('has navigation header', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();

    const logo = page.getByRole('link', { name: /studio - página inicial/i });
    await expect(logo).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    const navLinks = ['Início', 'Soluções', 'Exemplos', 'Processo', 'FAQ'];

    for (const linkText of navLinks) {
      const link = page.getByRole('link', { name: linkText });
      await expect(link).toBeVisible();
    }
  });

  test('hero CTAs are present', async ({ page }) => {
    const primaryCta = page.getByRole('link', { name: /quero minha landing page/i });
    const secondaryCta = page.getByRole('link', { name: /ver demonstração/i });

    await expect(primaryCta).toBeVisible();
    await expect(secondaryCta).toBeVisible();
  });

  test('problem section has 3 cards', async ({ page }) => {
    const problemSection = page.getByRole('region', { name: /problema/i }).or(page.locator('#problema'));
    await expect(problemSection).toBeVisible();

    const cards = problemSection.locator('.card, [class*="card"]');
    await expect(cards).toHaveCount(3);
  });

  test('solution section has 4 cards', async ({ page }) => {
    const solutionSection = page.locator('#solucoes');
    await expect(solutionSection).toBeVisible();

    const cards = solutionSection.locator('.card, [class*="card"]');
    await expect(cards).toHaveCount(4);
  });

  test('demos section has tabs', async ({ page }) => {
    const demosSection = page.locator('#demonstracoes');
    await expect(demosSection).toBeVisible();

    const tabs = ['Medicina', 'Advocacia', 'Odontologia', 'Serviços', 'Empresas'];
    for (const tab of tabs) {
      await expect(page.getByRole('tab', { name: tab })).toBeVisible();
    }
  });

  test('faq section has accordion items', async ({ page }) => {
    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeVisible();

    const questions = [
      'Quanto custa uma Landing Page?',
      'O projeto é personalizado?',
      'Funciona no celular?',
      'Vocês fazem a publicação?',
      'Posso integrar WhatsApp?',
      'Posso solicitar alterações?',
      'Quanto tempo leva para ficar pronta?',
      'Vocês atendem qualquer segmento?',
    ];

    for (const question of questions) {
      await expect(page.getByText(question)).toBeVisible();
    }
  });

  test('whatsapp float button is present', async ({ page }) => {
    const whatsappButton = page.getByRole('button', { name: /falar no whatsapp/i });
    await expect(whatsappButton).toBeVisible();
  });

  test('footer has copyright', async ({ page }) => {
    await expect(page.getByText(/© 2026 Studio. Todos os direitos reservados/i)).toBeVisible();
  });

  test('no horizontal overflow', async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test('no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    const filteredErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404') && !e.includes('net::ERR')
    );

    expect(filteredErrors).toHaveLength(0);
  });
});

test.describe('Mobile Responsiveness', () => {
  test.use({ ...devices['iPhone 12'] });

  test('mobile menu works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const menuButton = page.getByRole('button', { name: /abrir menu/i });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    await expect(page.getByRole('navigation', { name: /menu mobile/i })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Início' })).toBeVisible();
  });

  test('content adapts to mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const hero = page.locator('#inicio');
    await expect(hero).toBeVisible();

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});

test.describe('Accessibility', () => {
  test('has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);

    const h2s = page.locator('h2');
    await expect(h2s.first()).toBeVisible();
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('focus visible styles work', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.keyboard.press('Tab');
    const focused = page.locator(':focus-visible');
    await expect(focused.first()).toBeVisible();
  });
});