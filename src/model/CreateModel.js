import Purchase from "./Purchase";

class CreateModel {
  createPurchaseModel(amount) {
    return new Purchase(amount);
  }
}

export default CreateModel;
