import React from "react";
import { useRouter } from "next/router";
import Meta from "components/Meta";
import AuthSection from "components/AuthSection";

function AuthPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        type={router.query.type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath={router.query.next || "/dashboard"}
      />
    </>
  );
}

// Tell Next.js to export static files for each page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = () => ({
  paths: [
    { params: { type: "signin" } },
    { params: { type: "signup" } },
    { params: { type: "forgotpass" } },
    { params: { type: "changepass" } },
  ],
  fallback: true,
});

export function getStaticProps({ params }) {
  return { props: {} };
}

export default AuthPage;
