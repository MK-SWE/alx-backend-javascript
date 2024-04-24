export default function handleResponseFromAPI(promise) {
  promise.then(
    (resolve) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    },
    () => {
      console.log('Got a response from the API');
      return {};
    }
  );
}
