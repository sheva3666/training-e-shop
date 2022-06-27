describe("App E2E", () => {
  it("should have a form", () => {
    cy.visit("/");

    cy.get('input[type="email"]').should("have.value", "");
    cy.get('input[type="password"]').should("have.value", "");
    cy.get('input[type="submit"]');
  });

  it("open register", () => {
    cy.contains("Register").click();
    cy.get('input[type="text"]').should("have.value", "");
    cy.get('input[type="text"]').should("have.value", "");
    cy.get('input[type="text"]').should("have.value", "");
    cy.get('input[type="email"]').should("have.value", "");
    cy.get('input[type="password"]').should("have.value", "");
  });

  it("register", () => {
    cy.contains("Register").click();
    cy.get('input[data-testid="register-firstName"]')
      .type("Ivan")
      .should("have.value", "Ivan");
    cy.get('input[data-testid="register-lastName"]')
      .type("Shevchenko")
      .should("have.value", "Shevchenko");
    cy.get('input[data-testid="register-address"]')
      .type("Sidliste Osvobozeni")
      .should("have.value", "Sidliste Osvobozeni");
    cy.get('input[type="email"]')
      .type("sheva3666@gmail.com")
      .should("have.value", "sheva3666@gmail.com");
    cy.get('input[type="password"]')
      .type("qweqweqwe123")
      .should("have.value", "qweqweqwe123");
    cy.get('input[type="submit"]').click();
    cy.contains("Login").click();
  });

  it("should login", () => {
    cy.get("input").should("have.value", "");
    cy.get("input").should("have.value", "");
    cy.get("input");

    cy.get('input[type="email"]')
      .type("sheva3666@gmail.com")
      .should("have.value", "sheva3666@gmail.com");
    cy.get('input[type="password"]')
      .type("qweqweqwe123")
      .should("have.value", "qweqweqwe123");
    cy.get('input[type="submit"]').click();
    cy.visit("/shoppage");
  });

  it("add to cart", () => {
    cy.contains("To cart").click();
    cy.contains("Cart").click();

    cy.visit("/cart");
    cy.get("div");
  });

  it("back to shop", () => {
    cy.contains("Shop").click();
    cy.visit("/shoppage");
  });
});
