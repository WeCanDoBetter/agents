# PubMed API for [Delphi](https://github.com/WeCanDoBetter/delphi)

This API provides access to the [PubMed](https://www.ncbi.nlm.nih.gov/pubmed/)
database of biomedical literature for
[Delphi](https://github.com/WeCanDoBetter/delphi).

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
import { Agent, type ChatMessage, Context } from "@wecandobetter/delphi";
import { addToMap } from "./index";

async function fn(messages: ChatMessage[]) {
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

### `abstract`

Get the abstract for a PubMed ID.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

### `citedBy`

Get the PubMed IDs of papers that cite a given paper.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

### `cites`

Get the PubMed IDs of papers cited by a given paper.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

### `fullText`

Get the full text for a PubMed ID.

Returns `"null"` if the full text is not available.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

### `search`

Search PubMed for papers matching a query.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `query`   | `string` | Query       |

### `similar`

Get the PubMed IDs of papers similar to a given paper.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

### `summary`

Get the summary for a PubMed ID.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `pmid`    | `string` | PubMed ID   |

## See Also

- [PubMed API](https://www.ncbi.nlm.nih.gov/home/develop/api/)
- [Delphi](https://gibhub.com/WeCanDoBetter/delphi)
- [node-ncbi](https://npmjs.com/package/node-ncbi)
