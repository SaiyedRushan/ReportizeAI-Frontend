import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

const useSubscriptionInfo = () => {
  const [subscriptionInfo, setSubscriptionInfo] = useState(null);
  const { user, isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();

  const fetchSubscriptionInfo = async () => {
    try {
      const response = await fetch("/api/users/subscriptionInfo", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getToken()}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to fetch subscription info");
      }
    } catch (error) {
      console.error("Error fetching subscription info:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn && isLoaded) setSubscriptionInfo({ user: user, subscriptionPlan: "free" });
    fetchSubscriptionInfo();
  }, [isSignedIn, isLoaded, user]);

  return subscriptionInfo;
};

export default useSubscriptionInfo;
