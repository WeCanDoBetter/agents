# NLP Utility for [Delphi](https://github.com/WeCanDoBetter/delphi)

This utiity provides natural language processing (NLP) functions for
[Delphi](https://github.com/WeCanDoBetter/delphi).

## Utilities

### Readaibility Scores

- [Coleman-Liau Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)
- [Flesch-Kincaid Grade Level](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)
- [SMOG (Simple Measure of Gobbledygook) Index](https://en.wikipedia.org/wiki/SMOG)

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
