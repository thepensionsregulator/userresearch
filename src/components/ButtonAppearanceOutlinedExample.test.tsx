import React from 'react';
import { render } from '@testing-library/react';
import ButtonAppearanceOutlinedExample from './ButtonAppearanceOutlinedExample';
describe('Button Appearance Outlined Component', () => {
  it('does not regress', () => {
    const tree = render(<ButtonAppearanceOutlinedExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-none__8w685 buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Submit
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-success__8Zly- buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Success
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-danger__uSzaV buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Danger
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-warning__2KtsW buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Warning
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-special__1TjHC buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                type="button"
              >
                Special
              </button>
              <button
                class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-special__1TjHC buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
                disabled=""
                type="button"
              >
                Disabled
              </button>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-none__8w685 buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Submit
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-success__8Zly- buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Success
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-danger__uSzaV buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Danger
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-warning__2KtsW buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Warning
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-special__1TjHC buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              type="button"
            >
              Special
            </button>
            <button
              class="buttons-module_button__27Fxb buttons-module_appearance-outlined__1T76z buttons-module_intent-special__1TjHC buttons-module_size-medium__2WIGT globals-module_mr-3__HF2Vw"
              disabled=""
              type="button"
            >
              Disabled
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
