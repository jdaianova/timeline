import ValidateUserCoords from "../components/ValidateUserCoords";

test.each([
  ["[23.45698, 1.12345]", true],
  ["[23.45698, 11.12345", false],
  ["23.45698, -11.12345", false],
  ["[23.45698,11.12345]", false],
  ["23.45698, 11.12345]", false],
  ["[-23.45698, -1.12345]", true],
  ["[-3.45698 11.12345]", false],
])("validation coordinates", (coords, result) => {
  expect(ValidateUserCoords(coords)).toEqual(result);
});
