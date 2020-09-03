import Link from "next/link";
import Router from 'next/router'

const Index = () => {
  return (
    <>
      <div onClick={() => Router.push("/top")}>トップ</div>
      <Link href="/top">トップへ</Link>
    </>
  );
};

export default Index;
