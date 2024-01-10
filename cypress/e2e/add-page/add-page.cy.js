import { doLogin } from "../helpers/helpers.cy.js"

describe("Does add page stuff", {testIsolation: false}, () => {
    
    beforeEach(() => {
        cy.doLogin();
        cy.visit('/node/add/ubc_page');
    })

    it("Types in the title and summary boxes", () => {
        const titleMessage = "Title goes here";
        const summaryMessage = "Summary text goes here";

        cy.get('[data-drupal-selector="edit-title-wrapper"] input').type(titleMessage).should('have.value', titleMessage);
        cy.get('[data-drupal-selector="edit-body-0-summary"]').type(summaryMessage).should('have.value', summaryMessage);
    })

    it("Tries to type in the body text box", () => {
        const bodyMessage = "This text goes in the body";

        cy.get('.ck[role="textbox"]').realClick().realType(bodyMessage);
        cy.get('.ck[role="textbox"]').then(el => {
            const editor = el[0].ckeditorInstance;

            // Test whether typing was successful
            const data = editor.getData();
            expect(data).to.contain(bodyMessage);
        });
    })

    // it("Inserts two columns widget", () => {
    //     // Spawns in the two columns widget
    //     cy.get('.cke5-ubccolumnstwo-insert-button .ck-icon').click()

    //     // Interacts with the two columns widget (TODO: implement this properly)
    // })

    // it("Inserts three columns widget", () => {
    //     cy.get('.cke5-ubccolumnsthree-insert-button .ck-icon').click()
    // })

    // it("Inserts four columns widget", () => {
    //     cy.get('.cke5-ubccolumnsfour-insert-button .ck-icon').click()
    // })

    // it("Inserts an accordian toggle", () => {
    //     cy.get('.cke5-ubcaccordiontoggle-insert-button').click()
    // })

    // it("Inserts an accordian", () => {
    //     cy.get('.cke5-ubcaccordion-insert-button').click()
    // })

    // it("Inserts a horizontal card", () => {
    //     cy.get('.cke5-ubccardhorizontal-insert-button').click()
    // })

    // it("Inserts a vertical card", () => {
    //     cy.get('.cke5-ubccardverticalone-insert-button').click()
    // })

    // it("Inserts two vertical cards", () => {
    //     cy.get('.cke5-ubccardverticaltwo-insert-button').click()
    // })

    // it("Inserts three vertical cards", () => {
    //     cy.get('.cke5-ubccardverticalthree-insert-button').click()
    // })
})