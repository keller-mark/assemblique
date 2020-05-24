import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class StyledDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style>{`
                @import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700);
                @import url(https://fonts.googleapis.com/css2?family=Teko:wght@300;400;600);
                @import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;600);
                body {
                    margin: 0;
                    color: #333;
                    background-color: #f1efe9;
                    font-family: sans-serif;
                }
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
            `}</style>
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}