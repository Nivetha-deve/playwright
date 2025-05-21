// class Login{
//     constructor(page){
//         this.username = page.locator("input#username")
//         this.password = page.locator("input#password")
//         this.submit = page.locator("button#submit")
//     }
//         async enterusername(usern){
//             await this.username.fill(usern);
//         }
//         async enterpassword(userpass){
//             await this.password.fill(userpass)
//         }
//         async submitClick(){
//             await this.submit.click()
//         } 
//     }

//     export default Login;


    class Loginsauce{
        constructor(page){ 
            this.username = page.locator("input#user-name")
            this.password = page.locator("input#password")
            this.submit = page.locator("input#login-button")
        }
        async saucusername(userna){
            await this.username.fill(userna)
        }
        async saucpassword(userpas){
            await this.password.fill(userpas)
        }
        async saucsubmit(){
            await this.submit.click()
        }
    }

export default Loginsauce;












