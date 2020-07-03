import React from 'react';
import { render } from '@testing-library/react';
import ButtonSizeExample from './ButtonSizeExample';
describe('Button Size Component', () => {
  it('does not regress', () => {
    const tree = render(<ButtonSizeExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-large__2HgtD globals-module_mr-3__HF2Vw"
                type="button"
              >
                Large
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Medium
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-small__3rJZ1 globals-module_mr-3__HF2Vw"
                type="button"
              >
                Small
              </button>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-large__2HgtD globals-module_mr-3__HF2Vw"
              type="button"
            >
              Large
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Medium
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-primary__1UKxm buttons-module_intent-none__8w685 buttons-module_size-small__3rJZ1 globals-module_mr-3__HF2Vw"
              type="button"
            >
              Small
            </button>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
