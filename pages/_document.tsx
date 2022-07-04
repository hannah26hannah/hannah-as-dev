import Document, { Html, Head, Main, NextScript } from 'next/document';
import Notification from 'components/Notification';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Hahmlet:wght@300;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Notification />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
