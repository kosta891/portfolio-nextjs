import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useContext } from 'react';
import PortfolioContext from '../context/context';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  //   dark:bg-slate-600
  static contextType = PortfolioContext;
  componentDidMount() {
    const kobasica = this.context;

    console.log(kobasica, 'jebote');
  }
  render() {
    //className='transition ease-in-out duration-150 '
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
