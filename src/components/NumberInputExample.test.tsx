import React from 'react';
import { render } from '@testing-library/react';
import NumberInputExample from './NumberInputExample';
describe('Number Input Example Component', () => {
  it('does not regress', () => {
    const tree = render(<NumberInputExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <p
                class="typography-module_p__25IOk"
              >
                Number inputs can be optional
              </p>
              <form>
                <label
                  class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    What is your favorite number?
                     
                  </div>
                  <div
                    class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                  >
                    <input
                      aria-label="What is your favorite number?"
                      class="input-module_inputText__2Lbg4"
                      name="FavNumberEntry"
                      type="number"
                      value=""
                    />
                  </div>
                </label>
              </form>
              <p
                class="typography-module_p__25IOk root"
              >
                Number inputs can have validation
              </p>
              <form>
                <label
                  class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    What is your favorite number?
                     
                  </div>
                  <span
                    class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                  >
                    Your favorite number must be between 0 and 9
                  </span>
                  <div
                    class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                  >
                    <input
                      aria-label="What is your favorite number?"
                      class="input-module_inputText__2Lbg4"
                      name="FavNumberEntry"
                      type="number"
                      value=""
                    />
                  </div>
                </label>
              </form>
            </div>
          </div>
        </body>,
        "container": <div>
          <div>
            <p
              class="typography-module_p__25IOk"
            >
              Number inputs can be optional
            </p>
            <form>
              <label
                class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  What is your favorite number?
                   
                </div>
                <div
                  class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                >
                  <input
                    aria-label="What is your favorite number?"
                    class="input-module_inputText__2Lbg4"
                    name="FavNumberEntry"
                    type="number"
                    value=""
                  />
                </div>
              </label>
            </form>
            <p
              class="typography-module_p__25IOk root"
            >
              Number inputs can have validation
            </p>
            <form>
              <label
                class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  What is your favorite number?
                   
                </div>
                <span
                  class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                >
                  Your favorite number must be between 0 and 9
                </span>
                <div
                  class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                >
                  <input
                    aria-label="What is your favorite number?"
                    class="input-module_inputText__2Lbg4"
                    name="FavNumberEntry"
                    type="number"
                    value=""
                  />
                </div>
              </label>
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
