import { LoginPage } from "../page/login.page"

describe('Login test',() => {

    const loginpage = new LoginPage();
    let url = Cypress.config().baseUrl;

    it('verify user should login correctly',() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin('nishitgupta76@gmail.com','ng1qaz!QAZ');
        cy.url().should('be.equal', 'https://factory.katanamrp.com/sales')
    })

})