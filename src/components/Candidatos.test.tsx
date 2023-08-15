import { act, render, screen } from "@testing-library/react";
import api from "../api/api";
import { Provider } from "react-redux";
import Candidatos from "./Candidatos";
import { store } from "../store/store";
import { mockUserAPIOneRecord, mockUsersAPI } from "../mocks/userAPIMock";

describe("Candidatos - unit test", () => {
  beforeEach(() => {
    const mockAPIcall = jest
      .spyOn(api, "get")
      .mockImplementation((url, config) => {
        return new Promise((resolve) => {
          switch (url) {
            case "/api/?results=1":
              return resolve({ status: 200, data: mockUserAPIOneRecord });
            case "/api/?results=6":
              return resolve({ status: 200, data: mockUsersAPI });
          }
        });
      });
    return mockAPIcall;
  });

  test("Did data load when component has mounted", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      //updating state after getting data from mocked api and render information on UI
      render(
        <Provider store={store}>
          <Candidatos />
        </Provider>
      );
    });

    const mockUserItem = mockUsersAPI.results[0];
    const dateTestId = `${mockUserItem.name.title}${mockUserItem.name.first}${mockUserItem.name.last}0`;
    const itemMock = screen.queryByTestId(dateTestId);

    expect(itemMock).toBeInTheDocument();
  });
  
  test("Did item saved on redux and display on screen", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      //updating state after getting data from mocked api and render information on UI
      render(
        <Provider store={store}>
          <Candidatos />
        </Provider>
      );
    });

    const mockUserItem = mockUsersAPI.results[0];
    let dateTestId = `onSave_${mockUserItem.name.title}${mockUserItem.name.first}${mockUserItem.name.last}0`;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      const itemMock = screen.queryByTestId(dateTestId);
      itemMock?.click();
    });

    dateTestId = `SavedItems_${mockUserItem.name.title}${mockUserItem.name.first}${mockUserItem.name.last}0`;
    const itemMockSavedOnRedux = screen.queryByTestId(dateTestId);

    expect(itemMockSavedOnRedux).toBeInTheDocument();
  });
});
