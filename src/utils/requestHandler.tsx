/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { addRequest, getRequests, clearRequests } from './indexDBHelper';

const URL = 'https://webhook.site/da2b574f-7a6f-4046-8665-934dbf7e2b7d';

const sendBufferedRequests = async () => {
  try {
    const requests = await getRequests();
    for (const request of requests) {
      try {
        await axios.post(URL, request);
        console.log('Buffered request sent:', request);
      } catch (error) {
        console.error('Error sending buffered request:', error);
      }
    }
    await clearRequests();
  } catch (error) {
    console.error('Error sending buffered requests:', error);
  }
};

export const sendRequest = async (requestData: any) => {
  if (navigator.onLine) {
    try {
      await axios.post(URL, requestData);
      console.log('Request sent successfully');
    } catch (error) {
      console.error('Error sending request:', error);
    }
  } else {
    console.warn('No internet connection. Request will be buffered.');
    await addRequest(requestData);
  }
};

window.addEventListener('online', async () => {
  console.log('Back online. Sending buffered requests...');
  await sendBufferedRequests();
});
