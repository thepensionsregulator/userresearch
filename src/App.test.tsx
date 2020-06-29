import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App Component', () => {
  it('does not regress', () => {
    const tree = render(<App />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="App"
            >
              <header
                class="AppHeader"
              >
                <img
                  alt="logo"
                  class="AppLogo"
                  src="logo.svg"
                />
                <p>
                  Edit 
                  <code>
                    src/App.tsx
                  </code>
                   and save to reload.
                </p>
                <a
                  class="AppLink"
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Learn React
                </a>
                <p
                  class="RedBorder"
                >
                  Styled with CSS Modules
                </p>
              </header>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="App"
          >
            <header
              class="AppHeader"
            >
              <img
                alt="logo"
                class="AppLogo"
                src="logo.svg"
              />
              <p>
                Edit 
                <code>
                  src/App.tsx
                </code>
                 and save to reload.
              </p>
              <a
                class="AppLink"
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn React
              </a>
              <p
                class="RedBorder"
              >
                Styled with CSS Modules
              </p>
            </header>
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
