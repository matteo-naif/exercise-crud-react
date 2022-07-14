# Exercise

## Step 1/a

- create an `api.ts` file with the networking logic (using the native `fetch` function)
  - Endpoint: https://my-json-server.typicode.com/matteo-naif/example-crud
- create a `Users` component that renders raw JSON
- Render the data visually in a dedicated `Trip` component

## Step 2

- Define a `Trip` model using `io-ts`
- Use the model to validate the incoming JSON
- 💡 Tips
    - create a `model.ts` file to hold the `io-ts` models
    - you can use `t.array(Trip)` to create an `io-ts` model for a list of trips

## Step 3

- Use `useQuery` from `react-query` instead of fetching data in `useEffect`
- Handle error and loading cases in the rendering

## Step 4

- Use sum types and `switch` to improve the handling of query states
- 💡 Tips
    - Use `.status` on the result of `useQuery`

## Step 5

- Show trip `status` in the UI, by visualizing trips with a different style (e.g. color)
- 💡 Tips:
    - use a sum type to model the different states of a trip
    - `seatNumber` has a value only if you are checked in

## Step 6

- For each trip, show a button to delete it
- Display the status of the deletion in the button
- 💡 Tips:
    - Use a `react-query` mutation to delete
    - Invalidate `trips` to refresh the list
    - Use `.status` to display the status