export class LoginPage {
  
    public txtUsername : string;
    public txtPassword : string;
    public btnSubmit : string;

    constructor() {
        this.txtUsername = 'input[type="email"]';
        this.txtPassword = 'input[type="password"]';
        this.btnSubmit = 'button[type="submit"]';
    }

    public navigate(url: string) {
        cy.visit(url);
      }

    public inputUserName(username: string) {
        cy.get(this.txtUsername)
        .clear()
        .type(username)
        return this
      }

      public inpuPassword(username: string) {
        cy.get(this.txtPassword)
        .clear()
        .type(username)
        return this
      }

      public clickSubmit() {
        cy.get(this.btnSubmit)
        .click();       
      }

      public doLogin(username: string, password: string) {
          this.inputUserName(username);
          this.inpuPassword(password);
          this.clickSubmit();
      }
 }