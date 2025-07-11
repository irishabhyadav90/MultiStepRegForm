export default async function handler(request, response) {
   // This url will be from env
    const targetUrl = `http://demo3575906.mockable.io${request.url}`;
  
    try {
      const apiResponse = await fetch(targetUrl, {
        method: request.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: request.body,
      });
  
      const data = await apiResponse.json();
      response.status(apiResponse.status).json(data);
    } catch (error) {
      response.status(500).json({ error: 'Error forwarding the request' });
    }
  }