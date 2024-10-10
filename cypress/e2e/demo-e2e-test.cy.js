describe('Visit our home page and click on a button', () => {
    it('should allow user to click a button', () => {
        cy.visit('http://localhost:63342/workflow-demo/index.html?_ijt=sc85d80pt77mts66vd4rot17dg&_ij_reload=RELOAD_ON_SAVE')
        cy.get('message').type('Some value')
        cy.on('window:alert', (alertText) => {

        })
    });
})