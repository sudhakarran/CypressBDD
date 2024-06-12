export class HomePage{

    loginsuccessMsg = '.post-title';

    isLoginSuccessful(){
        cy.get(this.loginsuccessMsg).should('contain', 'Logged In Successfully')
    }
    
}

export default new HomePage();