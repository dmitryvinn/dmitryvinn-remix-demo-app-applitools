describe("Actions page form", () => {
  it("Posts wrong answer to the form", () => {
    // Arrange
    cy.visit("http://localhost:3000/demos/actions");

    // Act
    cy.get(".remix__form input").type("wrong answer");
    cy.get(".remix__form button").click();

    // Assert
    cy.get(".remix__form").contains("Sorry, wrong answer is not right.");
  });

  it("Posts correct answer to the form", () => {
    // Arrange
    cy.visit("http://localhost:3000/demos/actions");

    // Act
    cy.get(".remix__form input").type("egg");
    cy.get(".remix__form button").click();

    // Assert
    cy.url().should("include", "/correct");
    cy.get(".remix-app__main-content").contains("You got it right!");
  });

  it("Visually confirms action form renders", () => {
    // Arrange
    cy.visit("http://localhost:3000/demos/actions");

    // Act
    cy.eyesOpen({
      appName: "Remix Demo App",
      testName: "Validate Action Form",
    });

    // Assert
    cy.eyesCheckWindow("Action Page");

    // Cleanup
    cy.eyesClose();
    cy.reload();
  });
});
