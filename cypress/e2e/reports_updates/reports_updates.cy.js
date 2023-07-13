describe("Generic Test Suite - reports/updates", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        // log in before each test
        cy.visit('/user/login')
        cy.get('#edit-name').type(Cypress.env('username'))
        cy.get('#edit-pass').type(Cypress.env('password'))
        cy.get('#edit-submit').click()

        cy.viewport(1440, 900)
    })

    // NOTE: if this test fails, Cypress will show the number of unsupported
    // elements in the top right corner
    it("Tests whether there are unsupported modules (fails if it finds any)", () => {

        cy.visit('/admin/reports/updates')
 
        cy.get('.project-update__status--not-supported').should('not.exist')
        cy.get('.color-error').should("not.exist")

    })

    // NOTE: if this test fails, Cypress will show the number of updates
    // in the top right corner
    it("Looks for listed updates", () => {
        cy.visit("/admin/reports/updates/update")
        cy.get('.update-recommended').should('not.exist')
    })
})