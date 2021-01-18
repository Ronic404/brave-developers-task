import NextNprogress from 'nextjs-progressbar';

interface IApp {
  Component: () => any
  pageProps: object
}

export default function MyApp({ Component, pageProps }: IApp) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          body {
            height: 100vh;
          }

          li {
            list-style: none;
          }

          a {
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
