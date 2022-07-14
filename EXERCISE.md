# Exercise

## Step 1

- create an `api.ts` file with the networking logic (using the native `fetch` function)
  - Endpoint: https://my-json-server.typicode.com/matteo-naif/example-crud
- create a `component/userList` component that renders raw JSON
- Render the data visually in a dedicated `component/user` component

## Step 2

- Define a `User` model using `io-ts`
- Use the model to validate the incoming JSON

## Step 3

- Use `useQuery` from `react-query` instead of fetching data in `useEffect`
- Handle error and loading cases in the rendering

## Step 4

- Use sum types and `switch` to improve the handling of query states
- 💡 Tips
    - Use `.status` on the result of `useQuery`

## Step 6

- For each user, show a button to delete it
- Display the status of the deletion in the button
- 💡 Tips:
    - Use a `react-query` mutation to delete
    - Invalidate `trips` to refresh the list