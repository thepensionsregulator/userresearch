import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('App Component', () => {
  it('does not regress', () => {
    const tree = render(<App />);
    expect(tree).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="layout-module_docWidth__2uFR8 header-module_headerBackground__4gZ2V"
            >
              <div
                class="layout-module_appWidth__3GSsf"
              >
                <div
                  class="globals-module_flex__nsQfU globals-module_justifyContent-space-between__13izy globals-module_py-2__17tLB globals-module_pr-3__2WIzq"
                >
                  <div
                    class="globals-module_flex__nsQfU globals-module_alignItems-center__2SCcI"
                  >
                    <div
                      class="header-module_logo__3D700"
                    >
                      <img
                        alt="TPR Logo"
                        class="header-module_img__29b96"
                        src="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-header.ashx"
                      />
                    </div>
                    <p
                      class="typography-module_p__25IOk globals-module_color-white__1yeLp globals-module_fontWeight-2__1Gwk5"
                    >
                      User Research
                    </p>
                  </div>
                  <div
                    class="globals-module_flex__nsQfU globals-module_alignItems-center__2SCcI"
                  >
                    <button
                      class="buttons-module_link__2CAzL buttons-module_link-underline__3b-EH globals-module_color-white__1yeLp globals-module_mr-4__2NYxF"
                      data-testid="onClickSchemeOptions"
                      type="button"
                    >
                      Scheme Options
                    </button>
                    <button
                      class="buttons-module_link__2CAzL buttons-module_link-underline__3b-EH globals-module_color-white__1yeLp"
                      data-testid="onClickLogout"
                      type="button"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="layout-module_docWidth__2uFR8 highlight-module_highlight__32pr5"
            >
              <div
                class="highlight-module_leftBackground__1Wobq"
              />
              <div
                class="layout-module_appWidth__3GSsf highlight-module_highlightContent__zIrtw"
              >
                <div
                  class="globals-module_flex__nsQfU highlight-module_schemeReturn__CSgNV globals-module_flex-0-0-auto__3nGx3"
                >
                  <p
                    class="typography-module_p__25IOk globals-module_fontWeight-3__c78Oh"
                  >
                    Scheme return
                  </p>
                </div>
                <div
                  class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1 globals-module_alignItems-center__2SCcI globals-module_justifyContent-space-between__13izy"
                >
                  <p
                    class="typography-module_p__25IOk highlight-module_truncate__EA5YC globals-module_fontWeight-3__c78Oh globals-module_px-4__2RTn2"
                  >
                    Scheme Name
                  </p>
                  <div
                    class="globals-module_flex__nsQfU highlight-module_psrNumber__O7iNo globals-module_flex-0-0-auto__3nGx3 globals-module_alignItems-center__2SCcI globals-module_justifyContent-flex-end__2j5-0 globals-module_pl-3__1PiOl"
                  >
                    <p
                      class="typography-module_p__25IOk globals-module_fontWeight-3__c78Oh"
                    >
                      PSR: 
                      012161
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="layout-module_docWidth__2uFR8 footer-module_wrapper__EHBWP"
            >
              <div
                class="layout-module_appWidth__3GSsf"
              >
                <div
                  class="globals-module_flex__nsQfU globals-module_flexDirection-column__2H2b3"
                >
                  <div
                    class="globals-module_flex__nsQfU globals-module_justifyContent-flex-start__1B8kV globals-module_py-6__1Xssg globals-module_alignItems-center__2SCcI"
                  >
                    <div
                      class="footer-module_logo__20aJJ"
                    >
                      <img
                        alt="TPR Logo"
                        src="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
                      />
                    </div>
                  </div>
                  <div
                    class="globals-module_flex__nsQfU footer-module_footerText__11URY globals-module_justifyContent-space-between__13izy globals-module_mt-3__cehUr"
                  >
                    <div
                      class="globals-module_flex__nsQfU"
                    >
                      <button
                        class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                        type="button"
                      >
                        Website help
                      </button>
                      <button
                        class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                        type="button"
                      >
                        Cymraeg
                      </button>
                      <button
                        class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                        type="button"
                      >
                        Site map
                      </button>
                    </div>
                    <p
                      class="typography-module_p__25IOk globals-module_fontSize-1__1Bj-7 globals-module_color-neutral-a2__1wYmQ"
                    >
                      © 2020 The Pensions Regulator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="layout-module_docWidth__2uFR8 header-module_headerBackground__4gZ2V"
          >
            <div
              class="layout-module_appWidth__3GSsf"
            >
              <div
                class="globals-module_flex__nsQfU globals-module_justifyContent-space-between__13izy globals-module_py-2__17tLB globals-module_pr-3__2WIzq"
              >
                <div
                  class="globals-module_flex__nsQfU globals-module_alignItems-center__2SCcI"
                >
                  <div
                    class="header-module_logo__3D700"
                  >
                    <img
                      alt="TPR Logo"
                      class="header-module_img__29b96"
                      src="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-header.ashx"
                    />
                  </div>
                  <p
                    class="typography-module_p__25IOk globals-module_color-white__1yeLp globals-module_fontWeight-2__1Gwk5"
                  >
                    User Research
                  </p>
                </div>
                <div
                  class="globals-module_flex__nsQfU globals-module_alignItems-center__2SCcI"
                >
                  <button
                    class="buttons-module_link__2CAzL buttons-module_link-underline__3b-EH globals-module_color-white__1yeLp globals-module_mr-4__2NYxF"
                    data-testid="onClickSchemeOptions"
                    type="button"
                  >
                    Scheme Options
                  </button>
                  <button
                    class="buttons-module_link__2CAzL buttons-module_link-underline__3b-EH globals-module_color-white__1yeLp"
                    data-testid="onClickLogout"
                    type="button"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="layout-module_docWidth__2uFR8 highlight-module_highlight__32pr5"
          >
            <div
              class="highlight-module_leftBackground__1Wobq"
            />
            <div
              class="layout-module_appWidth__3GSsf highlight-module_highlightContent__zIrtw"
            >
              <div
                class="globals-module_flex__nsQfU highlight-module_schemeReturn__CSgNV globals-module_flex-0-0-auto__3nGx3"
              >
                <p
                  class="typography-module_p__25IOk globals-module_fontWeight-3__c78Oh"
                >
                  Scheme return
                </p>
              </div>
              <div
                class="globals-module_flex__nsQfU globals-module_flex-1-1-auto__JkaO1 globals-module_alignItems-center__2SCcI globals-module_justifyContent-space-between__13izy"
              >
                <p
                  class="typography-module_p__25IOk highlight-module_truncate__EA5YC globals-module_fontWeight-3__c78Oh globals-module_px-4__2RTn2"
                >
                  Scheme Name
                </p>
                <div
                  class="globals-module_flex__nsQfU highlight-module_psrNumber__O7iNo globals-module_flex-0-0-auto__3nGx3 globals-module_alignItems-center__2SCcI globals-module_justifyContent-flex-end__2j5-0 globals-module_pl-3__1PiOl"
                >
                  <p
                    class="typography-module_p__25IOk globals-module_fontWeight-3__c78Oh"
                  >
                    PSR: 
                    012161
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="layout-module_docWidth__2uFR8 footer-module_wrapper__EHBWP"
          >
            <div
              class="layout-module_appWidth__3GSsf"
            >
              <div
                class="globals-module_flex__nsQfU globals-module_flexDirection-column__2H2b3"
              >
                <div
                  class="globals-module_flex__nsQfU globals-module_justifyContent-flex-start__1B8kV globals-module_py-6__1Xssg globals-module_alignItems-center__2SCcI"
                >
                  <div
                    class="footer-module_logo__20aJJ"
                  >
                    <img
                      alt="TPR Logo"
                      src="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
                    />
                  </div>
                </div>
                <div
                  class="globals-module_flex__nsQfU footer-module_footerText__11URY globals-module_justifyContent-space-between__13izy globals-module_mt-3__cehUr"
                >
                  <div
                    class="globals-module_flex__nsQfU"
                  >
                    <button
                      class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                      type="button"
                    >
                      Website help
                    </button>
                    <button
                      class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                      type="button"
                    >
                      Cymraeg
                    </button>
                    <button
                      class="buttons-module_link__2CAzL globals-module_mr-3__HF2Vw globals-module_color-neutral-a2__1wYmQ"
                      type="button"
                    >
                      Site map
                    </button>
                  </div>
                  <p
                    class="typography-module_p__25IOk globals-module_fontSize-1__1Bj-7 globals-module_color-neutral-a2__1wYmQ"
                  >
                    © 2020 The Pensions Regulator
                  </p>
                </div>
              </div>
            </div>
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
