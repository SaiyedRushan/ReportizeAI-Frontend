import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

const useSubscriptionInfo = () => {
  const [subscriptionInfo, setSubscriptionInfo] = useState(null);
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isSignedIn && isLoaded) setSubscriptionInfo({ user: user, subscriptionPlan: "free" });

    // get the user's subscription plan and display the dashboard accordingly

    // const fetchSubscriptionInfo = async () => {
    //   try {
    //     const response = await fetch('/api/users', {
    //       method: 'GET',
    //       headers: {
    //         Authorization: `Bearer ${user.publicMetadata.clerkJWT}`,
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       setSubscriptionInfo(data);
    //     } else {
    //       throw new Error('Failed to fetch subscription info');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching subscription info:', error);
    //   }
    // };

    // if (user && user.publicMetadata.clerkJWT) {
    //   fetchSubscriptionInfo();
    // }
  }, [isSignedIn, isLoaded, user]);

  return subscriptionInfo;
};

export default useSubscriptionInfo;
