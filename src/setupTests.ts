// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { resolve } from "path";

const mockedScrollTo = jest.fn();
Object.defineProperty(window, "scrollTo", {
  value: mockedScrollTo,
  writable: true,
});

const mockedFrames = () => [{ focus: jest.fn(), print: jest.fn() }];
Object.defineProperty(window, "frames", {
  value: mockedFrames,
  writable: true,
});

const mockedPrint = jest.fn();
Object.defineProperty(window, "print", {
  value: mockedPrint,
  writable: true,
});

jest.mock("./api/api", () => ({
  post: jest.fn((_url, _body) => {
    return new Promise((resolve) => {
      resolve({});
    });
  }),
  get: jest.fn((_url) => {
    return new Promise((resolve) => {
      resolve({});
    });
  }),
}));