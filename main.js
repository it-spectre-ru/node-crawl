const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://accounts.google.com/signup');
    await driver.findElement(By.name('firstName')).sendKeys('Your First Name');
    await driver.findElement(By.name('lastName')).sendKeys('Your Last Name');
    await driver.findElement(By.name('Username')).sendKeys('yourusername');
    await driver.findElement(By.name('Passwd')).sendKeys('yourpassword');
    await driver.findElement(By.name('ConfirmPasswd')).sendKeys('yourpassword', Key.RETURN);
    await driver.wait(until.titleIs('Google Account'), 1000);
  } finally {
    await driver.quit();
  }
})();
