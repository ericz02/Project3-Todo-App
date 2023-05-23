"use client";

import { logoutUser } from "@/utils/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [error, setError] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const innerLogout = async () => {
      const { success, error } = await logoutUser();
      if (!success) {
        setError(error.message);
      }
    };
    innerLogout();
    router.push("/login");
  }, []);

  return (
    <div className="">
      <p>Logging out, please wait...</p>
      {error && <p> Error: {error}</p>}
    </div>
  );
};

export default Logout;
