# Semantic Scholar API for [Delphi](https://github.com/WeCanDoBetter/delphi)

This API provides access to the
[Semantic Scholar](https://www.semanticscholar.org/) database of papers and
citations for [Delphi](https://github.com/WeCanDoBetter/delphi).

## Implemented

- [x] get_paper (single paper)
- [ ] get_papers (multiple papers at once)
- [ ] getPaperAuthors
- [ ] getPaperCitations
- [ ] getPaperReferences
- [x] search_paper (search by query)
- [x] get_author
- [ ] get_authors
- [ ] get_author_papers
- [ ] search_author (search by query)
- [ ] get_recommended_papers
- [ ] get_recommended_papers_from_lists

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

### `author`

Get the author by ID.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `id`      | `string` | Author ID   |

### `paper`

Get the paper by ID.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `id`      | `string` | Paper ID    |

### `search`

Search for papers.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `query`   | `string` | Search term |

## See Also

- [Semantic Scholar API](https://api.semanticscholar.org/)
- [Delpi](https://github.com/WeCanDoBetter/delphi)
- [SemanticScholarJS](https://github.com/thomasuebi/semanticscholarjs)
