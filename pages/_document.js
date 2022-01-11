import React from "react";
import Document from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,:after,:before {
    box-sizing: border-box;
  }  
  body {
    background: #131213;
    margin: 0 auto;
    font-family: Fakt Pro;
    padding-top: 6rem;
  }
  @font-face {
    font-family: 'Fakt Pro';
    src: local('Fakt Pro'), local('Fakt Pro'),
    url(/fonts/FaktProNormal.woff2) format('woff2'),
    url(/fonts/FaktProNormal.woff) format('woff');
  }
  @font-face {
    font-family: 'Fakt Pro Bold';
    src: local('Fakt Pro Bold'), local('Fakt Pro Bold'),
    url(/fonts/FaktProBold.woff2) format('woff2'),
    url(/fonts/FaktProBold.woff) format('woff');
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
