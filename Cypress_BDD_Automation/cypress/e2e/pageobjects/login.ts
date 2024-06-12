export class LoginPage{

    loginPage(){
    }

    inputUsername = '#username';
    inputPassword = '#password';
    btnSubmit =  '#submit';

    open(url: any): void {
        cy.visit(url);
    }

    performLogin(username:string, password:string){
        cy.get(this.inputUsername).type(username);
        cy.get(this.inputPassword).type(password);
        cy.get(this.btnSubmit).click();
    }

}

export default new LoginPage();