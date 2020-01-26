const serializer = require("..");

describe("jest-serializer-xml", () => {
  it("serializes an XML document correctly", () => {
    expect.addSnapshotSerializer(serializer);

    const testDocument = `<document>test</document>`;

    expect(testDocument).toMatchSnapshot();
  });
});
