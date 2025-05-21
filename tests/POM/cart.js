class cart{
     constructor(page){
        this.checkout = page.locator("a[class*='btn_action']")
     }
     async sauccheckout(){
        await this.checkout.click();
     }
}

export default cart; 

