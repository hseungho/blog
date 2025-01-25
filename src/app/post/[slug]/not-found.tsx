'use client';

import Link from 'next/link';

const PostNotFound = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      padding: '20px',
    }}
  >
    <h1
      style={{
        fontSize: '120px',
        fontWeight: 700,
        color: '#5678FF',
        margin: 0,
      }}
    >
      404
    </h1>
    <p
      style={{
        fontSize: '24px',
        color: '#111',
        margin: 0,
      }}
    >
      요청하신 포스트를 찾을 수 없습니다.
    </p>
    <div
      style={{
        display: 'flex',
        gap: '16px',
        marginTop: '24px',
      }}
    >
      <Link
        href="/post"
        style={{
          padding: '12px 24px',
          backgroundColor: '#5678FF',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={e => {
          e.currentTarget.style.backgroundColor = '#3863ff';
        }}
        onMouseOut={e => {
          e.currentTarget.style.backgroundColor = '#3863ff';
        }}
      >
        전체 포스트 보기
      </Link>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#5678FF',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={e => {
          e.currentTarget.style.backgroundColor = '#3863ff';
        }}
        onMouseOut={e => {
          e.currentTarget.style.backgroundColor = '#3863ff';
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  </div>
);

export default PostNotFound;
