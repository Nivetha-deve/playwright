class details{
    constructor(page){
        this.firstname = page.locator("input#first-name")
        this.lastname = page.locator("input#last-name")
        this.postalcode = page.locator("input#postal-code")
        this.continue = page.locator("[class*='btn_primary'][value='CONTINUE']")
        this.finsh = page.locator("a[href='./checkout-complete.html']")
        this.words = page.locator('h2.complete-header')
    }
    async saucfirstname(fname){
       await this.firstname.fill(fname);
    } 
    async sauclastname(lname){
        await this.lastname.fill(lname);
    }
    async saucpostalcode(code){
        await this.postalcode.fill(code);
    }
    async saucbutton(){
        await this.continue.click();
    }
    async saucfinish(){
        await this.finsh.click();
    }
    async saucword(word){
        await expect(this.words).toHaveText(word);
    }

}

    export default details;