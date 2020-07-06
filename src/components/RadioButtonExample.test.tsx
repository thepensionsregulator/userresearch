import React from 'react';
import { render } from '@testing-library/react';
import RadioButtonExample from './RadioButtonExample';
describe('Radio Button Example Component', () => {
  it('does not regress', () => {
    const tree = render(<RadioButtonExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <form>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="radio-module_wrapper__3Bpxd"
                >
                  <input
                    class="hidden-module_hiddenInput__2Pe1h"
                    name="radioButton"
                    type="radio"
                    value="value1"
                  />
                  <svg
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
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        stroke="none"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        fill="none"
                        r="19.5"
                      />
                    </g>
                  </svg>
                  <p
                    class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                  >
                    option1
                  </p>
                </label>
              </div>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="radio-module_wrapper__3Bpxd"
                >
                  <input
                    class="hidden-module_hiddenInput__2Pe1h"
                    name="radioButton"
                    type="radio"
                    value="value2"
                  />
                  <svg
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
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        stroke="none"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        fill="none"
                        r="19.5"
                      />
                    </g>
                  </svg>
                  <p
                    class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                  >
                    option2
                  </p>
                </label>
                <p
                  class="typography-module_p__25IOk radio-module_hint__3qwYs"
                >
                  Text can be added to prompt the user
                </p>
              </div>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
              >
                <label
                  class="radio-module_wrapper__3Bpxd"
                >
                  <input
                    checked=""
                    class="hidden-module_hiddenInput__2Pe1h"
                    name="radioButton"
                    type="radio"
                    value="value3"
                  />
                  <svg
                    class="radio-module_radio__3bFhI"
                    height="40"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="#f5f5f5"
                      stroke="#585858"
                      stroke-width="4"
                      transform="translate(0.5 0.5)"
                    >
                      <circle
                        cx="19.6"
                        cy="19.6"
                        r="20"
                        stroke="none"
                      />
                      <circle
                        cx="19.6"
                        cy="19.6"
                        fill="none"
                        r="18"
                      />
                    </g>
                    <circle
                      cx="10"
                      cy="10"
                      fill="#006ebc"
                      r="10"
                      transform="translate(10.3 10.3)"
                    />
                  </svg>
                  <p
                    class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                  >
                    option3
                  </p>
                </label>
                <p
                  class="typography-module_p__25IOk radio-module_hint__3qwYs"
                >
                  One radio button can be preselected
                </p>
              </div>
            </form>
          </div>
        </body>,
        "container": <div>
          <form>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="radio-module_wrapper__3Bpxd"
              >
                <input
                  class="hidden-module_hiddenInput__2Pe1h"
                  name="radioButton"
                  type="radio"
                  value="value1"
                />
                <svg
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
                    <circle
                      cx="20"
                      cy="20"
                      r="20"
                      stroke="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      fill="none"
                      r="19.5"
                    />
                  </g>
                </svg>
                <p
                  class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                >
                  option1
                </p>
              </label>
            </div>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="radio-module_wrapper__3Bpxd"
              >
                <input
                  class="hidden-module_hiddenInput__2Pe1h"
                  name="radioButton"
                  type="radio"
                  value="value2"
                />
                <svg
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
                    <circle
                      cx="20"
                      cy="20"
                      r="20"
                      stroke="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      fill="none"
                      r="19.5"
                    />
                  </g>
                </svg>
                <p
                  class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                >
                  option2
                </p>
              </label>
              <p
                class="typography-module_p__25IOk radio-module_hint__3qwYs"
              >
                Text can be added to prompt the user
              </p>
            </div>
            <div
              class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_mb-3__1I9aK globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
            >
              <label
                class="radio-module_wrapper__3Bpxd"
              >
                <input
                  checked=""
                  class="hidden-module_hiddenInput__2Pe1h"
                  name="radioButton"
                  type="radio"
                  value="value3"
                />
                <svg
                  class="radio-module_radio__3bFhI"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="#f5f5f5"
                    stroke="#585858"
                    stroke-width="4"
                    transform="translate(0.5 0.5)"
                  >
                    <circle
                      cx="19.6"
                      cy="19.6"
                      r="20"
                      stroke="none"
                    />
                    <circle
                      cx="19.6"
                      cy="19.6"
                      fill="none"
                      r="18"
                    />
                  </g>
                  <circle
                    cx="10"
                    cy="10"
                    fill="#006ebc"
                    r="10"
                    transform="translate(10.3 10.3)"
                  />
                </svg>
                <p
                  class="typography-module_p__25IOk radio-module_label__QOMDZ globals-module_ml-2__2A_GT globals-module_fontWeight-3__c78Oh"
                >
                  option3
                </p>
              </label>
              <p
                class="typography-module_p__25IOk radio-module_hint__3qwYs"
              >
                One radio button can be preselected
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
