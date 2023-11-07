class LoginPage{


    elements = {

        login_username: ()=> cy.get(""),
        login_password: ()=> cy.get(""),
        login_Btn: ()=> cy.get("")

    };

    typeusername(){
        this.elements.login_username().type('Admin');

    }

    typepassword(){
        this.elements.login_password().type('admin123');
    }

    clickLogin(){
        this.elements.login_Btn().click();
    }
}