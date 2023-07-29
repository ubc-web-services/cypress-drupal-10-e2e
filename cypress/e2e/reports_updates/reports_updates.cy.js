import { doLogin } from "../helpers/helpers.cy.js"

describe("Generic Test Suite - reports/updates", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Failed to execute 'observe' on 'IntersectionObserver'")) {
            return false
        }
        if (err.message.includes("drupalSettings is not defined")) {
            return false
        }
        if (err.message.includes("Drupal is not defined")) {
            return false
        }
        return true;
    })

    beforeEach(() => {
        cy.doLogin();
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