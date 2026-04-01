export const getLoginUrl = () => {
  console.log("client id: ", import.meta.env.VITE_CLIENT_ID);
  console.log("redirect uri: ", import.meta.env.VITE_REDIRECT_URI);
  console.log("auth url: ", import.meta.env.VITE_AUTH_URL);
  const params = new URLSearchParams({
    response_type: "code",
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  });

  console.log(
    "total url returning: ",
    `${import.meta.env.VITE_AUTH_URL}?${params.toString()}`,
  );

  return `${import.meta.env.VITE_AUTH_URL}?${params.toString()}`;
};
