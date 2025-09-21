describe("Poketest - Navigation", () => {
  it("Load content, test complete flow", () => {
    cy.visit("http://localhost:5173/?page=1");
    cy.get("#type-btn").click();
    cy.wait(1000);
    cy.get("#next-btn").click();
    cy.wait(1000);
    cy.get("#next-btn").click();
    cy.wait(1000);
    cy.get("#previous-btn").click();
    cy.wait(1000);
    cy.get("[data-cy=pokemon-25]").click();
    cy.wait(2000);
    cy.get("img").should("exist");
    cy.wait(1000);
    cy.get("#back-btn").click();
    cy.wait(1000);
    cy.get("#type-btn").click();
    cy.wait(1000);
    cy.get("[data-cy=navbar]").click();
  });
});
