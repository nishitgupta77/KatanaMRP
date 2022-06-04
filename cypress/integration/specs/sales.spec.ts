import { SalesPage } from "../page/sales.page"
import { LoginPage } from "../page/login.page"

describe('Sales Test',() => {

    const salespage = new SalesPage();
    const loginpage = new LoginPage();

    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin('nishitgupta76@gmail.com','ng1qaz!QAZ')
        cy.url().should('be.equal', 'https://factory.katanamrp.com/sales')
    })

    it('verify that user navigates to customer page when clicking add customer using global add', ()=> {
        salespage.addCustomer();
        cy.url().should('be.equal', 'https://factory.katanamrp.com/customer')
    })

})