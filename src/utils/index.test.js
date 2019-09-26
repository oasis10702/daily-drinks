import { getTrimString } from "./";

describe("test getTrimString", () => {
  test("text abc and limit 4", () => {
    expect(getTrimString("abc", 4)).toBe("abc");
  });
  test("text abc and limit 2", () => {
    expect(getTrimString("abc", 2)).toBe("ab");
  });
  test("text 珍珠奶茶 and limit 4", () => {
    expect(getTrimString("珍珠奶茶", 4)).toBe("珍珠奶茶");
  });
  test("text 紅茶拿鐵 and limit 3", () => {
    expect(getTrimString("紅茶拿鐵", 3)).toBe("紅茶拿");
  });
});
