/* eslint-disable max-len */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class CapsuleDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Archivo:ital,wght@0,100;1,100&family=Audiowide&family=Bruno+Ace&family=Chango&family=Cherry+Bomb+One&family=Cute+Font&family=DM+Sans:ital,opsz,wght@0,9..40,200;1,9..40,200&family=DotGothic16&family=Fjalla+One&family=Fugaz+One&family=Handjet:wght@500&family=Inter+Tight&family=Inter:wght@100;500&family=Manjari&family=Monomaniac+One&family=Orbitron:wght@600&family=Oxanium:wght@500&family=Press+Start+2P&family=Quicksand&family=Racing+Sans+One&family=Righteous&family=Silkscreen:wght@400;700&family=Spline+Sans:wght@300;400&family=Syne+Mono&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CapsuleDocument;
