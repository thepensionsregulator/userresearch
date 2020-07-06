import React from 'react';
import { render } from '@testing-library/react';
import DateInputExample from './DateInputExample';
describe('DateInputExample Component', () => {
  it('does not regress', () => {
    const tree = render(<DateInputExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <form>
                <div
                  class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
                  data-testid="date-input-field"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    When were you born?
                     
                  </div>
                  <div
                    class="globals-module_flex__nsQfU"
                  >
                    <label
                      class="date-module_inputSmall__2_tNw"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Day
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="dd-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="dd-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                    <label
                      class="date-module_inputSmall__2_tNw"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Month
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="mm-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="mm-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                    <label
                      class="date-module_inputLarge__1bjAf"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Year
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="yyyy-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="yyyy-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </form>
              <p
                class="typography-module_p__25IOk root"
              >
                Date fields can be optional
              </p>
              <form>
                <div
                  class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
                  data-testid="date-input-field"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    When were you born?
                     
                    (optional)
                  </div>
                  <div
                    class="globals-module_flex__nsQfU"
                  >
                    <label
                      class="date-module_inputSmall__2_tNw"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Day
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="dd-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="dd-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                    <label
                      class="date-module_inputSmall__2_tNw"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Month
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="mm-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="mm-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                    <label
                      class="date-module_inputLarge__1bjAf"
                    >
                      <p
                        class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                      >
                        Year
                      </p>
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-label="yyyy-When were you born?"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          data-testid="yyyy-field"
                          meta="[object Object]"
                          type="number"
                          value=""
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <form>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
                data-testid="date-input-field"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  When were you born?
                   
                </div>
                <div
                  class="globals-module_flex__nsQfU"
                >
                  <label
                    class="date-module_inputSmall__2_tNw"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Day
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="dd-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="dd-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                  <label
                    class="date-module_inputSmall__2_tNw"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Month
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="mm-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="mm-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                  <label
                    class="date-module_inputLarge__1bjAf"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Year
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="yyyy-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="yyyy-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                </div>
              </div>
            </form>
            <p
              class="typography-module_p__25IOk root"
            >
              Date fields can be optional
            </p>
            <form>
              <div
                class="elements-module_label__24GET globals-module_mt-1__38Kz9 globals-module_py-1__1fRiD globals-module_alignItems-flex-start__1EK4S globals-module_flexDirection-column__2H2b3"
                data-testid="date-input-field"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  When were you born?
                   
                  (optional)
                </div>
                <div
                  class="globals-module_flex__nsQfU"
                >
                  <label
                    class="date-module_inputSmall__2_tNw"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Day
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="dd-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="dd-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                  <label
                    class="date-module_inputSmall__2_tNw"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Month
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="mm-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="mm-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                  <label
                    class="date-module_inputLarge__1bjAf"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-2__SoimP globals-module_fontWeight-3__c78Oh globals-module_mb-1__3wuOf"
                    >
                      Year
                    </p>
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-label="yyyy-When were you born?"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        data-testid="yyyy-field"
                        meta="[object Object]"
                        type="number"
                        value=""
                      />
                    </div>
                  </label>
                </div>
              </div>
            </form>
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
