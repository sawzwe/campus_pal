"use client";

import React, { useState, useEffect } from "react";
import withAuth from "@/app/auth/WithAuth";
import { UserAuth } from "@/app/auth/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/client/Login");
    } else {
      setRender(true);
    }
  });

  if (render) {
    return <div>Client Category Page</div>;
  } else {
    return <div>Redirecting...</div>;
  }
};

export default withAuth(Page);
