Schemas.CustomerForm = new SimpleSchema({
  billingAddress: {
    type: Schemas.AddressForm
  },
  shippingAddresses: {
    type: [Schemas.AddressForm],
    minCount: 2
  }
});