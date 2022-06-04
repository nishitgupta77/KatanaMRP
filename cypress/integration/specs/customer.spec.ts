import { SalesPage } from "../page/sales.page"
import { LoginPage } from "../page/login.page"
import { CustomerPage } from "../page/customer.page"


describe('Customer Test',() => {

    const salespage = new SalesPage();
    const loginpage = new LoginPage();
    const customerpage = new CustomerPage();

    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin('nishitgupta76@gmail.com','ng1qaz!QAZ');
        cy.url().should('be.equal', 'https://factory.katanamrp.com/sales')
        salespage.addCustomer();
        cy.url().should('be.equal', 'https://factory.katanamrp.com/customer')
    })

    it('verify that cusomer gets display name correctly displayed', ()=> {        
        customerpage.inputFirstName('Nishit')
        customerpage.inputLastName('Gupta')
        customerpage.verifyDisplayName('Nishit Gupta')
    })

    it('verify that all customer details are saved', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyz@fb.com','2387')
        customerpage.verifyChangesSaved()
    })

    it('verify that customer can add billing address', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyz@fb.com','2387')
        customerpage.enterBillingAddressDetails('Nishit','Gupta','address1','address2','Delhi','New Delhi','1223','India')
        customerpage.verifyChangesSaved()
    })

    it('verify that customer can delete user details', ()=> {       
        customerpage.enterCustomerDetails('Nishit','Gupta','ABC company','abcxyz@fb.com','2387')
        customerpage.enterBillingAddressDetails('Nishit','Gupta','address1','address2','Delhi','New Delhi','1223','India')
        customerpage.verifyChangesSaved() 
        customerpage.deleteDetails()
        cy.url().should('be.equal', 'https://factory.katanamrp.com/contacts/customers')
    })
})