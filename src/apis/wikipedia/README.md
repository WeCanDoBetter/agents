## Wikipedia API for [Delphi](https://github.com/WeCanDoBetter/delphi)

This API provides access to Wikipedia data for
[Delphi](https://github.com/WeCanDoBetter/delphi).

## Example

```ts
import {
  Agent,
  type ChatMessage,
  type ClientOptions,
  Context,
} from "@wecandobetter/delphi";
import { addToMap } from "./index";

async function fn(messages: ChatMessage[], options: ClientOptions) {
  // Call the model here and return the result
}

// Create an agent
const agent = new Agent("my-agent", fn, {
  client: { model: "gpt-4-1106-preview" },
});

// Create a context
const context = new Context();

// Add the functions to the contex's function map anbd enable them
addToMap(context.functions, true);

// Now the agent can use the functions in the context
```

## Functions

### `categories`

Get the categories for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `content`

Get the content for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `coordinates`

Get the coordinates for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `infobox`

Get the infobox for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `intro`

Get the introduction for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `links`

Get the links for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `mobileHtml`

Get the mobile HTML for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `references`

Get the references for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `related`

Get the related pages for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

### `search`

Search Wikipedia for pages matching a query.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `query`   | `string` | Query       |

### `tables`

Get the tables for a Wikipedia page.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `title`   | `string` | Page title  |

## See Also

- [Wikipedia](https://wikipedia.org)
- [Delphi](https://github.com/WeCanDoBetter/delphi)
- [Wikipedia API for Node.js](https://npmjs.com/package/wikipedia)
