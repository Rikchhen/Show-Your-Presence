const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const ProductMock = dbMock.define("Product", {
  id: 1,
  productName: "Test Product",
  price: 20,
  description: "This is a test product",
  productImage: "test.jpg",
});

describe("Product Model", () => {
  it("should create a product", async () => {
    const product = await ProductMock.create({
      productName: "New Product",
      price: 20,
      description: "A new test product",
      productImage: "new.jpg",
    });

    expect(product.get("productName")).toBe("New Product");
    expect(product.get("price")).toBe(20);
    expect(product.get("description")).toBe("A new test product");
    expect(product.get("productImage")).toBe("new.jpg");
  });
});
