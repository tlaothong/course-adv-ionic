# Search function

* When user type in any search keyword(s) we will make a query to the server.
* The query only make after the user stop typing at least 500ms.
* But if in the duration of 500ms the user is typing anything in between, we need to wait for another 500ms.
* After 500ms is completed we need to check if the keyword has changed.
* The server must be called inly if the keyword has changed.

```
const inputStream = Rx.Observable
  .fromEvent(document.getElementById('input'), 'keyup')
  .debounceTime(500)
  .distinctUntilChanged()
  .map(ev => ev.target.value)
  .switchMap(
    // cancle the the server call in processing.
    value => fetch(<API_ENDPOINT>)
  )
```