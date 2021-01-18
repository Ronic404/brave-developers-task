/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Link from 'next/link';
import MainLayout from '../components/MainLayout';

export default function ErrorPage() {
  return (
    <MainLayout>
      <h2>Page is not found</h2>
      <p>
        Please&nbsp;
        <Link href="/"><a>go back</a></Link>
        {' '}
        to safety
      </p>
    </MainLayout>
  );
}
