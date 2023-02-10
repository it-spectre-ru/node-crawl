const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('Node.js', Key.RETURN);
    await driver.wait(until.titleContains('Node.js'), 1000);
    console.log(await driver.getTitle());
    await WebDriver.promise.delayed(10000);
  } finally {
    await driver.quit();
  }
})();
