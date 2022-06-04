export class SalesPage {
  
    public btnGlobalAdd : string;
    public selectAddCustomer : string;
    

    constructor() {
        this.btnGlobalAdd = 'button[id="globalAdd"]';
        this.selectAddCustomer = 'a[id="add-customer"]'; 
    }

    public clickAddGlobalBtn() {
         cy.get(this.btnGlobalAdd)
           .click();
      }

      public selectCustomer() {
        cy.get(this.selectAddCustomer)
          .click();
     }
     
     public addCustomer() {
        this.clickAddGlobalBtn();
        this.selectCustomer();
     } 
 }