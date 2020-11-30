import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <title>GitHub OAuth Demo</title>
                    <meta name="description" content="A GitHub OAuth Demo" />
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" container="width-device-width" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument;