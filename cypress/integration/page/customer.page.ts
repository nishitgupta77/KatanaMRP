export class CustomerPage {
  
    private inpFirstName : string;
    private inpLastName : string;
    private txtDisplayName : string;
    private inpCompanyName : string;
    private inpEmail : string;
    private inpPhone : string;
    private inpComment : string;
    private clckBillingAddress : string;
    private inpAddressLine1 : string;
    private inpAddressLine2 : string;
    private inpCity : string;
    private inpState : string;
    private inpCode : string;
    private inpCountry : string;
    private inpBillFirstName : string;
    private inpBillLastName : string;
    private clckOkButton : string;
    private clckThreeDots : string;
    private clckDeleteButton : string;
    private btnconfirmDelete : string;
    private txtDeleteConfirmation : string;
    private btnCloseCustomerCard : string;
 
    constructor() {
        this.inpFirstName = 'input[name="firstName"]';
        this.inpLastName = 'input[name="lastName"]';
        this.txtDisplayName = '[data-testid="inputCustomerDisplayName"] > .MuiInputBase-root > .MuiInputBase-input';
        this.inpCompanyName = 'input[name="company"]';
        this.inpEmail = 'input[name="email"]';
        this.inpPhone = 'input[name="phone"]';
        this.inpComment = 'input[name="comment"]'; 
        this.clckBillingAddress = 'input[name="defaultBillingAddress"]'; 
        this.inpAddressLine1 = 'input[placeholder="Enter street name"]'; 
        this.inpAddressLine2 = 'input[placeholder="Address line 2 (e.g., apartment, suite, unit, or building)."]'; 
        this.inpCity = 'input[placeholder="City, district, suburb, town, or village."]'; 
        this.inpCode = 'input[placeholder="ZIP or postal code."]'; 
        this.inpState = 'input[placeholder="State, county, province, or region."]'; 
        this.inpCountry = 'input[name="country"]'; 
        this.inpBillFirstName = '[data-testid="firstNameTextField"] > .MuiInputBase-root > .MuiInputBase-input'; 
        this.inpBillLastName = '[data-testid="gridExtended"] > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input'; 
        this.clckOkButton = 'button[data-testid="submitButton"]'; 
        this.clckThreeDots = 'span.print-hide > .MuiButtonBase-root';
        this.clckDeleteButton = '[data-testid="cardHeaderMenuButtonDELETE"]';
        this.btnconfirmDelete = '[data-testid="confirmDeleteButton"]';
        this.txtDeleteConfirmation = '.MuiDialogContent-root > .MuiTypography-root';
        this.btnCloseCustomerCard = '.MuiButtonBase-root.print-hide > .MuiIconButton-label > .MuiSvgIcon-root'
    }

    public inputFirstName(firstName : string) {
        cy.contains('First')
        .should('have.text','First name')
        .get(this.inpFirstName)
        .clear()
        .type(firstName)
     }

     public inputLastName(lastName : string) {
        cy.contains('Last')
        .should('have.text','Last name')
        .get(this.inpLastName)
        .clear()
        .type(lastName)
        .type('{enter}')
     }

     public inputCompanyName(companyName : string) {
        cy.contains('Company name')
        .should('be.visible')
        .get(this.inpCompanyName)
        .clear()
        .type(companyName)
     }

     public inputDisplayName(displayName : string) {
      cy.contains('Display name')
      .should('be.visible')
      .get(this.txtDisplayName)
      .clear()
      .type(displayName)
   }

     public verifyDisplayName(displayName : string) {
         cy.contains('Display name')
         .should('be.visible')
         .get(this.txtDisplayName)
         .click()
         .type('{enter}')
         .should('have.value',displayName)
     }

     public inputEmail(email : string) {
        cy.contains('Email')
        .should('be.visible')
        .get(this.inpEmail)
        .click()
        .clear()
        .type(email)
     }

     public inputPhone(phone : string) {
        cy.contains('Phone')
        .should('be.visible')
        .get(this.inpPhone)
        .clear()
        .type(phone)
     }

     public inputComment(comment : string) {
        cy.contains('Comment')
        .should('be.visible')
        .get(this.inpComment)
        .clear()
        .type(comment)
     }

     public enterCustomerDetails(firstName: string, lastName: string, companyName: string, email: string, phone: string) {
         this.inputFirstName(firstName)
         this.inputLastName(lastName)
         this.inputCompanyName(companyName)
         this.inputEmail(email)
         this.inputPhone(phone)
         this.inputComment('Comment')
         this.verifyDisplayName(firstName + " " + lastName)     
     }

     public updateCustomerDetails(firstName: string, lastName: string, displayName: string) {
      this.inputFirstName(firstName)
      this.inputLastName(lastName)
      this.inputDisplayName(displayName)    
  }

     public verifyChangesSaved() {
        cy.contains('save')
        .should('be.visible')
        .should('have.text','All changes saved')
     }

     public clickBillingAddressBtn() {
        cy.contains('Billing address')
        .should('be.visible')
        .get(this.clckBillingAddress)
        .click()
     }

     public inputAddress1(add1 : string) {
        cy.contains('Address line 1')
        .should('be.visible')
        .get(this.inpAddressLine1)
        .clear()
        .type(add1)
     }

     public inputAddress2(add2 : string) {
        cy.contains('Address line 2')
        .should('be.visible')
        .get(this.inpAddressLine2)
        .clear()
        .type(add2)
     }

     public inputCity(city : string) {
        cy.contains('City/Town')
        .should('be.visible')
        .get(this.inpCity)
        .clear()
        .type(city)
     }

     public inputState(state : string) {
        cy.contains('State/Region')
        .should('be.visible')
        .get(this.inpState)
        .clear()
        .type(state)
     }

     public inputCode(code : string) {
        cy.contains('Zip/Postal code')
        .should('be.visible')
        .get(this.inpCode)
        .clear()
        .type(code)
     }

     public inputCountry(country : string) {
        cy.contains('Country')
        .should('be.visible')
        cy.get(this.inpCountry)
        .clear()
        .type(country)
     }

     public inputBillFirstName(firstName : string) {
        cy.contains('First name')
        .should('be.visible')
        .get(this.inpBillFirstName)
        .clear()
        .type(firstName)
     }

     public inputBillLastName(lastName : string) {
        cy.contains('First name')
        .should('be.visible')
        .get(this.inpBillLastName)
        .clear()
        .type(lastName)
     }

     public clickSubmitBtn() {
        cy.get(this.clckOkButton)
        .click()
     }

     public enterBillingAddressDetails(firstName: string, lastName: string, add1 : string, 
        add2: string, city : string, state: string, code : string, country: string) {
        cy.contains('Billing address')
        .should('be.visible')
        this.clickBillingAddressBtn()
        this.inputBillFirstName(firstName)
        this.inputBillLastName(lastName)
        this.inputAddress1(add1)
        this.inputAddress2(add2)
        this.inputCity(city)
        this.inputState(state)
        this.inputCode(code)
        this.inputCountry(country)
        this.clickSubmitBtn()
    }

    public deleteDetails(){
          cy.get(this.clckThreeDots)
          .click()
          .get(this.clckDeleteButton)
          .click()
          .get(this.txtDeleteConfirmation)
          .should('have.text','Are you sure you want to delete?')
          .get(this.btnconfirmDelete)
          .click()
    }

    public closeCustomerCard() {
       cy.get(this.btnCloseCustomerCard)
       .click()
    }

}