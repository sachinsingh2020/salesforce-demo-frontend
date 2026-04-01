export const getLoginUrl = () => {
  console.log("client id: ", import.meta.env.VITE_CLIENT_ID);
  console.log("redirect uri: ", import.meta.env.VITE_REDIRECT_URI);
  const params = new URLSearchParams({
    response_type: "code",
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  });

  return `${import.meta.env.VITE_AUTH_URL}?${params.toString()}`;
};
