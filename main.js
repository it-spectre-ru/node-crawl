const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('Node.js', Key.RETURN);
    await driver.wait(until.titleContains('Node.js'), 1000);
    console.log(await driver.getTitle());
    let element = await driver.findElement(By.className('LC20lb MBeuO DKV0Md'));
    let text = await element.getText();
    console.log('Text: ' + text);
    await driver.sleep(25000);
  } finally {
    await driver.quit();
  }
})();
