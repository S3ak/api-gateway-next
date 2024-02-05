/**
 * Tests for the GET /api/products endpoint.
 */
const ENV_URL = Cypress.env("BASE_API_URL") || "http://localhost:3000/api";

/**
 * Test products resource, CRUD operations.
 */
describe("GET /api/products", () => {
  it.skip("gets a list of products", () => {
    cy.request("GET", `${ENV_URL}/products`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(
        "Success: Resource has been successfully retrieved. | Invoices"
      );
      expect(response.body.data).to.have.length(5);
      // FIXME: Flakey test
      expect(response.body.data[0].name).to.eq("Delba de Oliveira");
      expect(response.body.data[0].amount).to.eq(8945);
      expect(response.body.data[0].customer_id).to.eq(undefined);
      expect(response.body.data[0].date).to.eq(undefined);
      expect(response.body.data[0].id).to.eq(undefined);
      expect(response.body.data[0].status).to.eq(undefined);

      expect(response.body.count).to.eq(5);
    });
  });
});

describe("POST /api/products", () => {
  // TODO: Add test for creating a product
  it("Create a product", () => {
    const payload = {
      name: `Shoe maker ${Math.random()}`,
      amount: 8945,
      customer_id: crypto.randomUUID(),
      status: "paid",
    };

    cy.request("POST", `${ENV_URL}/products`, { ...payload }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(
          "Success: Resource has been successfully created. | Invoice"
        );
        expect(response.body.data).to.have.length(1);
        // FIXME: Flakey test
        expect(response.body.data[0].name).to.eq(payload.name);
        expect(response.body.data[0].amount).to.eq(8945);
        expect(response.body.data[0].customer_id).to.eq(payload.customer_id);
        expect(response.body.data[0].date).to.eq(undefined);
        expect(response.body.data[0].id).to.eq(payload.customer_id);
        expect(response.body.data[0].status).to.eq(payload.status);

        expect(response.body.count).to.eq(5);
      }
    );
  });
});
