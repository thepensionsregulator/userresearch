import React from 'react';
import { render } from '@testing-library/react';
import CheckboxInputExample from './CheckboxInputExample';
describe('Checkbox Input Example Component', () => {
  it('does not regress', () => {
    const tree = render(<CheckboxInputExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <form>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="checkbox-module_wrapper__395aH"
                >
                  <input
                    class="hidden-module_hiddenInput__2Pe1h"
                    type="checkbox"
                  />
                  <svg
                    class="checkbox-module_checkbox__2fvmX"
                    height="40"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="#f5f5f5"
                      stroke="#585858"
                      stroke-width="1"
                    >
                      <rect
                        height="40"
                        stroke="none"
                        width="40"
                      />
                      <rect
                        fill="none"
                        height="39"
                        width="39"
                        x="0.5"
                        y="0.5"
                      />
                    </g>
                  </svg>
                  <p
                    class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                  >
                    Option 1
                  </p>
                </label>
              </div>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="checkbox-module_wrapper__395aH"
                >
                  <input
                    class="hidden-module_hiddenInput__2Pe1h"
                    type="checkbox"
                  />
                  <svg
                    class="checkbox-module_checkbox__2fvmX"
                    height="40"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="#f5f5f5"
                      stroke="#585858"
                      stroke-width="1"
                    >
                      <rect
                        height="40"
                        stroke="none"
                        width="40"
                      />
                      <rect
                        fill="none"
                        height="39"
                        width="39"
                        x="0.5"
                        y="0.5"
                      />
                    </g>
                  </svg>
                  <p
                    class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                  >
                    Option 2
                  </p>
                </label>
                <p
                  class="typography-module_p__25IOk checkbox-module_hint__2mikE"
                >
                  Text can be added to prompt the user
                </p>
              </div>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="checkbox-module_wrapper__395aH"
                >
                  <input
                    checked=""
                    class="hidden-module_hiddenInput__2Pe1h"
                    type="checkbox"
                  />
                  <svg
                    class="checkbox-module_checkbox__2fvmX"
                    height="40"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="#f5f5f5"
                      stroke="#585858"
                      stroke-width="4"
                      transform="translate(2 2)"
                    >
                      <rect
                        height="40"
                        stroke="none"
                        width="40"
                      />
                      <rect
                        fill="none"
                        height="36"
                        width="36"
                        x="0.1"
                        y="0.1"
                      />
                    </g>
                    <g
                      transform="translate(11 10)"
                    >
                      <path
                        d="M3.648-.443l8.18,5.1L23.423-13.085"
                        fill="none"
                        stroke="#006ebc"
                        stroke-width="5"
                        transform="translate(-3.648 13.085)"
                      />
                    </g>
                  </svg>
                  <p
                    class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                  >
                    Option 3
                  </p>
                </label>
                <p
                  class="typography-module_p__25IOk checkbox-module_hint__2mikE"
                >
                  Checkboxes can be preselected
                </p>
              </div>
            </form>
          </div>
        </body>,
        "container": <div>
          <form>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="checkbox-module_wrapper__395aH"
              >
                <input
                  class="hidden-module_hiddenInput__2Pe1h"
                  type="checkbox"
                />
                <svg
                  class="checkbox-module_checkbox__2fvmX"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="#f5f5f5"
                    stroke="#585858"
                    stroke-width="1"
                  >
                    <rect
                      height="40"
                      stroke="none"
                      width="40"
                    />
                    <rect
                      fill="none"
                      height="39"
                      width="39"
                      x="0.5"
                      y="0.5"
                    />
                  </g>
                </svg>
                <p
                  class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                >
                  Option 1
                </p>
              </label>
            </div>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="checkbox-module_wrapper__395aH"
              >
                <input
                  class="hidden-module_hiddenInput__2Pe1h"
                  type="checkbox"
                />
                <svg
                  class="checkbox-module_checkbox__2fvmX"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="#f5f5f5"
                    stroke="#585858"
                    stroke-width="1"
                  >
                    <rect
                      height="40"
                      stroke="none"
                      width="40"
                    />
                    <rect
                      fill="none"
                      height="39"
                      width="39"
                      x="0.5"
                      y="0.5"
                    />
                  </g>
                </svg>
                <p
                  class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                >
                  Option 2
                </p>
              </label>
              <p
                class="typography-module_p__25IOk checkbox-module_hint__2mikE"
              >
                Text can be added to prompt the user
              </p>
            </div>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="checkbox-module_wrapper__395aH"
              >
                <input
                  checked=""
                  class="hidden-module_hiddenInput__2Pe1h"
                  type="checkbox"
                />
                <svg
                  class="checkbox-module_checkbox__2fvmX"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="#f5f5f5"
                    stroke="#585858"
                    stroke-width="4"
                    transform="translate(2 2)"
                  >
                    <rect
                      height="40"
                      stroke="none"
                      width="40"
                    />
                    <rect
                      fill="none"
                      height="36"
                      width="36"
                      x="0.1"
                      y="0.1"
                    />
                  </g>
                  <g
                    transform="translate(11 10)"
                  >
                    <path
                      d="M3.648-.443l8.18,5.1L23.423-13.085"
                      fill="none"
                      stroke="#006ebc"
                      stroke-width="5"
                      transform="translate(-3.648 13.085)"
                    />
                  </g>
                </svg>
                <p
                  class="typography-module_p__25IOk globals-module_ml-3__3QNMG globals-module_fontWeight-3__c78Oh"
                >
                  Option 3
                </p>
              </label>
              <p
                class="typography-module_p__25IOk checkbox-module_hint__2mikE"
              >
                Checkboxes can be preselected
              </p>
            </div>
          </form>
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
