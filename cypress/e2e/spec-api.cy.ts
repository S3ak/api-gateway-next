/**
 * Tests for the GET /api/products endpoint.
 */
const ENV_URL = Cypress.env("BASE_API_URL") || "http://localhost:3000/api";

/**
 * Test products resource, CRUD operations.
 */
describe("GET /api/products", () => {
  it("gets a list of products", () => {
    cy.request("GET", `${ENV_URL}/products`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(
        "Success: Resource has been successfully retrieved. | products"
      );
      expect(response.body.data).to.have.length(5);
      // FIXME: Flakey test
      expect(response.body.data[0].name).to.eq("Gorgeous Metal Gloves");
      expect(response.body.data[0].price).to.eq(`633.00`);
      expect(response.body.data[0].id).to.eq(
        "caa1a0a3-b2eb-4057-8fa0-964ab72e095a"
      );

      expect(response.body.count).to.eq(5);
    });
  });
});

describe("POST /api/products", () => {
  // TODO: Add test for creating a product
  it("Create a product", () => {
    const payload = {
      name: `Shoe maker ${Math.random()}`,
      price: 8945,
      id: crypto.randomUUID(),
      description: "A nice description",
    };

    cy.request("POST", `${ENV_URL}/products`, { ...payload }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(
          "Success: Resource has been successfully created. | product"
        );
        expect(response.body.data).to.have.length(1);
        expect(response.body.data[0].name).to.eq(payload.name);
        expect(response.body.data[0].price).to.eq(`${payload.price}.00`);
        expect(response.body.data[0].id).to.eq(payload.id);
      }
    );
  });
});
