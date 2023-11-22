# Agents for Delphi

This repo contains agents for [Delphi](https://github.com/WeCanDoBetter/delphi),
a versatile and adaptable conversational agent framework that streamlines
chatbots and AI-driven agent systems.

## Usage

Clone the repo, install the dependencies, and build the project:

```sh
git clone https://github.com/WeCanDoBetter/delphi.git
cd delphi
npm install
npm run build:ts
```

Then, import the agents you want to use. For example:

```ts
import { wikipedia } from "./agents/dist";
```

## Agents

They are more like
[agent functions](https://wecandobetter.github.io/delphi/api/agent_function.html),
anyway. Each provides a set of functions that can be used by a Delphi agent.

See the [Delphi documentation](https://wecandobetter.github.io/delphi/) for more
information. The [repository](https://github/com/WeCanDoBetter/delphi) also
contains a number of examples.

### APIs

- [Wikipedia](./src/apis/wikipedia/README.md)
- [PubMed](./src/apis/pubmed/README.md)
- [Semantic Scholar](./src/apis/semantic-scholar/README.md)

### Utilities

- [NLP](./src/nlp/README.md) (readability scores, etc.)

## Example

```ts
import { wikipedia } from "./index";
import { Context } from "@wecandobetter/delphi";

// Get a map of functions for the Wikipedia API
// Enable the functions by passing true
const functionMap = wikipedia.getMap(true);

// Create a context with the functions
const context = new Context({
  messages: [],
  functions: functionMap,
});

// use the context on a Delphi agent, e.g.:
// const result = await agent.run(context);
```

## Related

- [Delphi](https://wecandobetter.github.io/delphi/)
- [We Can Do Better](https://wcdb.life/)

### APIs

- [Wikipedia](https://www.wikipedia.org/)
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
- [Semantic Scholar](https://www.semanticscholar.org/)

### Utilities

- [NLP](https://en.wikipedia.org/wiki/Natural_language_processing)

## Contributing

Contributions are welcome! Open an issue or submit a pull request to get
started.

## License

This project is licensed under the [MIT License](./LICENSE).
