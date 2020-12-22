export const fetcher = async (url, token = '', data = undefined) => {
  const res = await fetch(window.location.origin + url, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return await res.json();
};
