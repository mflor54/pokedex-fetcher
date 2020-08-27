const puppeteer = require('puppeteer');
const s = require('./selectors');

const URL = 'https://pokemon.fandom.com/wiki';

const pokemonScraper = async name  => {
    const browser = await puppeteer.launch({ args : ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setDefaultTimeout(10000);
    await page.goto(`${URL}${name}`);

    await page.waitFor(s.pageHeaderTitle(), { visible : true });

    const noArticle = await page.$(s.noArticle());

    if(noArticle) {
        await browser.close();
        return "I'm sorry, I could not find that pokemon."
    }
    else {
        await page.waitFor(s.physiology());
        const data = await page.$eval(s.physiology(), e => e.innerText);

        await browser.close();
        return data;
    }
};

module.exports = pokemonScraper;