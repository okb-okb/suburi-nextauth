import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

const Secret: NextPage = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return <></>;

  if (!session) {
    return (
      <>
        <h1>ログインしてください</h1>
      </>
    );
  }

  return (
    <>
      <h1>秘密のページ</h1>
      {content}
    </>
  );
};

export default Secret;
