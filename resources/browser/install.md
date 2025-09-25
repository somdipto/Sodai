# Baidu & Bing Search Support

For Baidu and Bing search support on client

## Installation

Before packaging, run this command in the project root directory:

```
npx playwright install chromium
```

## Copy

Move Chromium to project resources

For Mac:

```
cp -r ~/Library/Caches/ms-playwright/chromium_headless_shell-*/* resources/browser/chromium/
```

For Windows, it is the same.

Then compile your project.