const mockCreate = jest.fn();

const PrismaClient = jest.fn().mockImplementation(() => ({
  contactMessage: {
    create: mockCreate,
  },
}));

module.exports = {
  PrismaClient,
  mockCreate, // Export the mock function
};
