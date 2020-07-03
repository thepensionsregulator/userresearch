import React from 'react';
import { render } from '@testing-library/react';
import TextInputExample from './TextInputExample';
describe('Text Input Example Component', () => {
  it('does not regress', () => {
    const tree = render(<TextInputExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <form>
              <label
                class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9 globals-module_my-5__9GI3C"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  Event Location
                   
                </div>
                <span
                  class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                >
                  The location must be London
                </span>
                <div
                  class="globals-module_flex__nsQfU globals-module_flex-0-0-auto__3nGx3 globals-module_width-5__2UZd8"
                >
                  <input
                    aria-label="Event Location"
                    class="input-module_inputText__2Lbg4"
                    name="event_place"
                    type="text"
                    value=""
                  />
                </div>
              </label>
              <label
                class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9 globals-module_my-5__9GI3C"
              >
                <div
                  class="elements-module_labelText__3Behw"
                >
                  Event name
                   
                </div>
                <div
                  class="globals-module_flex__nsQfU globals-module_flex-0-0-auto__3nGx3 globals-module_width-5__2UZd8"
                >
                  <input
                    aria-label="Event name"
                    class="input-module_inputText__2Lbg4"
                    name="event_name"
                    type="text"
                    value=""
                  />
                </div>
              </label>
              <button
                style="display: none;"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </body>,
        "container": <div>
          <form>
            <label
              class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9 globals-module_my-5__9GI3C"
            >
              <div
                class="elements-module_labelText__3Behw"
              >
                Event Location
                 
              </div>
              <span
                class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
              >
                The location must be London
              </span>
              <div
                class="globals-module_flex__nsQfU globals-module_flex-0-0-auto__3nGx3 globals-module_width-5__2UZd8"
              >
                <input
                  aria-label="Event Location"
                  class="input-module_inputText__2Lbg4"
                  name="event_place"
                  type="text"
                  value=""
                />
              </div>
            </label>
            <label
              class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3 globals-module_mt-1__38Kz9 globals-module_my-5__9GI3C"
            >
              <div
                class="elements-module_labelText__3Behw"
              >
                Event name
                 
              </div>
              <div
                class="globals-module_flex__nsQfU globals-module_flex-0-0-auto__3nGx3 globals-module_width-5__2UZd8"
              >
                <input
                  aria-label="Event name"
                  class="input-module_inputText__2Lbg4"
                  name="event_name"
                  type="text"
                  value=""
                />
              </div>
            </label>
            <button
              style="display: none;"
              type="submit"
            >
              Submit
            </button>
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
