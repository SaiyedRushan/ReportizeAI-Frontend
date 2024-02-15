export default async function createCheckoutSession(priceId) {
  const res = await fetch("/api/stripe/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      priceId: priceId,
    }),
  });

  const session = await res.json();
  window.location.href = session.url;
}
