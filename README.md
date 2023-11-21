# Agents for [Delphi](https://github.com/WeCanDoBetter/delphi)

This repo contains agents for Delphi, a versatile and adaptable conversational
agent framework that streamlines chatbots and AI-driven agent systems.

## Agents

- [Wikipedia](./src/apis/wikipedia/README.md)
- [PubMed](./src/apis/pubmed/README.md)
- [Samantic Scholar](./src/apis/samantic-scholar/README.md)

## Example

```ts
import { wikipedia } from "./index";
import { Context } from "@wecandobetter/delphi";

const functionMap = wikipedia.getMap();
const context = new Context([/* message */], functionMap);

// use the context on a Delphi agent, e.g.:
// const result = await agent.run(context);
```

See the [Delphi documentation](https://wecandobetter.github.io/delphi/) for more
information. The [Delphi repository](https://github/com/WeCanDoBetter/delphi)
also contains a number of examples.

## Related

- [Delphi](https://wecandobetter.github.io/delphi/)
- [We Can Do Better](https://wcdb.life/)
- [Wikipedia](https://www.wikipedia.org/)
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
- [Semantic Scholar](https://www.semanticscholar.org/)

## Contributing

Contributions are welcome! Open an issue or submit a pull request to get
started.

## License

This project is licensed under the [MIT License](./LICENSE).
