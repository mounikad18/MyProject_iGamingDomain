class ShopPage {
    constructor(page) 
    {
        this.page = page;
        this.shopButton = page.getByText('Shop', { exact: true });
    }
}

module.exports = { ShopPage };