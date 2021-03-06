
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Oi&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-light-background dark:bg-dark-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
