
class addProduct{
    constructor(page){
        this.additem = page.locator(".inventory_item:nth-child(5) button")
        this.additem1 = page.locator(".inventory_item:nth-child(3) button")
        this.cartlogo = page.locator("svg[class*='svg-inline--fa']")
    }
    async saucadditem1(){
       await this.additem.click()
    }
    async saucadditem2(){
        await this.additem1.click()
    }
    async sauccartlogo(){
      await this.cartlogo.click()
    }
}

export default addProduct;