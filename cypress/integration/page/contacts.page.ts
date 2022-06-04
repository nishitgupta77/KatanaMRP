export class ContactPage {
    
    public btnAddNewCustomer : string;
    

    constructor() {
        this.btnAddNewCustomer = '.row > div > .MuiButtonBase-root > .MuiButton-label';
    }

    public navigate(url: string) {
        cy.visit(url);
      }

      public verifyCustomerTable() {
          cy
          .get(this.btnAddNewCustomer)
          .should('have.text','New customer')
      }

      public clickAddNewCustomer() {
        cy
        .get(this.btnAddNewCustomer)
        .contains('New customer')
        .should('have.text','New customer')
        .click()
    }
 
    public openCustomerExistingDetails(customerName : string) {
        cy.contains(customerName)
         .click()
    }
     

}