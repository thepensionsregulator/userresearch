import React from 'react';
import { render } from '@testing-library/react';
import SelectInputExample from './SelectInputExample';
describe('Select Input Example Component', () => {
  it('does not regress', () => {
    const tree = render(<SelectInputExample />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div>
              <form>
                <div
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-labelledby="downshift-0-label"
                  role="combobox"
                >
                  <div
                    class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3"
                    for="downshift-0-input"
                    id="downshift-0-label"
                  >
                    <div
                      class="elements-module_labelText__3Behw"
                    >
                      Select animal
                       
                    </div>
                    <span
                      class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                    >
                      Please select an animal from the dropdown menu
                    </span>
                    <div
                      class="globals-module_flex__nsQfU select-module_relative__3zdik"
                    >
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-autocomplete="list"
                          aria-label="Select animal"
                          aria-labelledby="downshift-0-label"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          id="downshift-0-input"
                          type="text"
                          value=""
                        />
                      </div>
                      <button
                        class="select-module_iconButton__F7qu3"
                        data-testid="undefined-button"
                        type="button"
                      >
                        <svg
                          class=""
                          data-testid="unfold-more"
                          fill=""
                          height="24"
                          stroke=""
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path
                            d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="globals-module_flex__nsQfU select-module_relative__3zdik"
                  >
                    <div
                      aria-labelledby="downshift-0-label"
                      class="select-module_popup__3TklV"
                      id="downshift-0-menu"
                      role="listbox"
                    />
                  </div>
                </div>
              </form>
              <p
                class="typography-module_p__25IOk root"
              >
                Dropdown boxes can be optional
              </p>
              <form>
                <div
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-labelledby="downshift-1-label"
                  role="combobox"
                >
                  <div
                    class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3"
                    for="downshift-1-input"
                    id="downshift-1-label"
                  >
                    <div
                      class="elements-module_labelText__3Behw"
                    >
                      Select animal
                       
                      (optional)
                    </div>
                    <span
                      class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                    >
                      Please select an animal from the dropdown menu
                    </span>
                    <div
                      class="globals-module_flex__nsQfU select-module_relative__3zdik"
                    >
                      <div
                        class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                      >
                        <input
                          aria-autocomplete="list"
                          aria-label="Select animal"
                          aria-labelledby="downshift-1-label"
                          autocomplete="off"
                          class="input-module_inputText__2Lbg4"
                          id="downshift-1-input"
                          type="text"
                          value=""
                        />
                      </div>
                      <button
                        class="select-module_iconButton__F7qu3"
                        data-testid="undefined-button"
                        type="button"
                      >
                        <svg
                          class=""
                          data-testid="unfold-more"
                          fill=""
                          height="24"
                          stroke=""
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path
                            d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="globals-module_flex__nsQfU select-module_relative__3zdik"
                  >
                    <div
                      aria-labelledby="downshift-1-label"
                      class="select-module_popup__3TklV"
                      id="downshift-1-menu"
                      role="listbox"
                    />
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
                aria-expanded="false"
                aria-haspopup="listbox"
                aria-labelledby="downshift-0-label"
                role="combobox"
              >
                <div
                  class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3"
                  for="downshift-0-input"
                  id="downshift-0-label"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    Select animal
                     
                  </div>
                  <span
                    class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                  >
                    Please select an animal from the dropdown menu
                  </span>
                  <div
                    class="globals-module_flex__nsQfU select-module_relative__3zdik"
                  >
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-autocomplete="list"
                        aria-label="Select animal"
                        aria-labelledby="downshift-0-label"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        id="downshift-0-input"
                        type="text"
                        value=""
                      />
                    </div>
                    <button
                      class="select-module_iconButton__F7qu3"
                      data-testid="undefined-button"
                      type="button"
                    >
                      <svg
                        class=""
                        data-testid="unfold-more"
                        fill=""
                        height="24"
                        stroke=""
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path
                          d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  class="globals-module_flex__nsQfU select-module_relative__3zdik"
                >
                  <div
                    aria-labelledby="downshift-0-label"
                    class="select-module_popup__3TklV"
                    id="downshift-0-menu"
                    role="listbox"
                  />
                </div>
              </div>
            </form>
            <p
              class="typography-module_p__25IOk root"
            >
              Dropdown boxes can be optional
            </p>
            <form>
              <div
                aria-expanded="false"
                aria-haspopup="listbox"
                aria-labelledby="downshift-1-label"
                role="combobox"
              >
                <div
                  class="elements-module_label__24GET globals-module_flexDirection-column__2H2b3"
                  for="downshift-1-input"
                  id="downshift-1-label"
                >
                  <div
                    class="elements-module_labelText__3Behw"
                  >
                    Select animal
                     
                    (optional)
                  </div>
                  <span
                    class="typography-module_span__1KXnm globals-module_mb-2__3YnD8 globals-module_fontSize-2__SoimP globals-module_color-neutral-6__3xC65"
                  >
                    Please select an animal from the dropdown menu
                  </span>
                  <div
                    class="globals-module_flex__nsQfU select-module_relative__3zdik"
                  >
                    <div
                      class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1"
                    >
                      <input
                        aria-autocomplete="list"
                        aria-label="Select animal"
                        aria-labelledby="downshift-1-label"
                        autocomplete="off"
                        class="input-module_inputText__2Lbg4"
                        id="downshift-1-input"
                        type="text"
                        value=""
                      />
                    </div>
                    <button
                      class="select-module_iconButton__F7qu3"
                      data-testid="undefined-button"
                      type="button"
                    >
                      <svg
                        class=""
                        data-testid="unfold-more"
                        fill=""
                        height="24"
                        stroke=""
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path
                          d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  class="globals-module_flex__nsQfU select-module_relative__3zdik"
                >
                  <div
                    aria-labelledby="downshift-1-label"
                    class="select-module_popup__3TklV"
                    id="downshift-1-menu"
                    role="listbox"
                  />
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
