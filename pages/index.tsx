import { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          <div>ログインしていません</div>
          <button onClick={() => signIn()}>ログイン</button>
        </>
      )}
      {session && (
        <>
          こんにちは、{session.user.name ?? session.user.email} さん
          <br />
          <button>
            <Link href="/secret">秘密のページへ</Link>
          </button>
          <button onClick={() => signOut()}>ログアウト</button>
        </>
      )}
    </>
  );
};

export default IndexPage;
