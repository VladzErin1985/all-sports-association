# Expert Knowledge Base
> Synthesized from 25+ expert sources, top YouTube creators, official docs, and production experience.
> Last updated: April 2026

---

## 1. Web Design & UI/UX

### Top Experts
- **Kevin Powell** | YouTube, kevinpowell.co | The #1 CSS authority. Teaches modern CSS without media queries using clamp(), container queries, subgrid. His "Conquering Responsive Layouts" is the definitive free course.
- **Josh Comeau** | joshwcomeau.com | CSS for JavaScript developers. Bridges the gap between React and CSS. "CSS for JavaScript Developers" course is the best investment for React devs.
- **Steve Schoger** | refactoringui.com | Co-author of Refactoring UI. Practical micro-improvements: spacing, shadows, hierarchy without design school.
- **Adam Wathan** | tailwindcss.com | Tailwind CSS creator. Utility-first philosophy, design tokens, the "Refactoring UI" book.
- **Theo (t3.gg)** | YouTube, t3.gg | TypeScript-first, Tailwind + shadcn/ui advocate. DX-first design philosophy.
- **Fireship** | fireship.io | Fast-paced, high-signal content. Best for framework comparisons and trend awareness.
- **Smashing Magazine** | smashingmagazine.com | Editorial authority. Deep UX strategy, accessibility, design systems.

### Key Principles
- **Utility-first CSS**: Compose low-level utilities; extract React components (not @apply) when repetition appears.
- **Work with the browser**: Use clamp(), minmax(), auto-fit — let the browser calculate layout instead of fighting it with fixed values.
- **Hierarchy through restraint**: Limit to 3-4 font sizes, 6-8 colors. Use weight + color for emphasis, not just size.
- **Container queries over media queries**: Components should respond to their container, not the viewport. 96%+ browser support in 2025.
- **Design tokens as infrastructure**: Reference → Semantic → Component token hierarchy. Single source of truth for color, spacing, radius.
- **Accessibility as baseline**: WCAG 2.2 AA. 4.5:1 contrast, 44px touch targets, keyboard nav, semantic HTML first.
- **Motion must have purpose**: 200–500ms duration, ease-out easing, respect prefers-reduced-motion.
- **Spacing creates distinction**: Use white space instead of borders and dividers wherever possible.
- **Dark mode via CSS variables**: Use `[data-theme="dark"]` + `prefers-color-scheme` fallback + localStorage persistence.
- **Semantic HTML first**: Structure before styling. Enables accessibility, SEO, reader modes.

### Best Practices
- Use `clamp(min, preferred, max)` for all font sizes and padding — eliminates most responsive breakpoints.
- Extract React components instead of @apply for Tailwind reuse — keeps classes visible, enables prop customization.
- Use `grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))` for fluid grids with no media queries.
- Saturate grey colors with a slight blue or brown tint — pure `#808080` looks lifeless.
- Vertical shadow offset (2–4px) feels natural; equal offsets feel artificial.
- Adjacent elements: use slightly different background colors instead of borders to create separation.
- Font pairing: one display font (personality) + one body font (readability). Avoid Inter/Roboto/Arial for hero text.
- 60/30/10 color rule: 60% dominant, 30% secondary, 10% accent for CTAs.
- Inline critical CSS in `<head>`. Defer non-critical stylesheets. Preload fonts with `rel="preload"`.
- Use `content-visibility: auto` on off-screen sections for paint performance.

### Code Patterns
```css
/* Fluid typography — no media queries needed */
.hero-heading { font-size: clamp(2rem, 6vw, 5rem); line-height: 1.1; }
.body-text     { font-size: clamp(1rem, 1.5vw, 1.125rem); line-height: 1.7; }

/* Fluid grid — auto-reflows at any width */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}

/* Container query */
.card { container-type: inline-size; }
@container (min-width: 400px) { .card { flex-direction: row; } }

/* CSS design tokens */
:root {
  --color-primary: #003087;
  --color-accent: #00A86B;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --radius: 0.75rem;
}

/* Dark mode */
[data-theme="dark"] { --color-bg: #0f172a; --color-text: #f8fafc; }
@media (prefers-color-scheme: dark) { :root { --color-bg: #0f172a; } }

/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

```jsx
// Compound component pattern
function Dialog({ children }) {
  const [open, setOpen] = React.useState(false);
  return <DialogCtx.Provider value={{ open, setOpen }}>{children}</DialogCtx.Provider>;
}
Dialog.Trigger = ({ children }) => {
  const { setOpen } = React.useContext(DialogCtx);
  return <button onClick={() => setOpen(true)}>{children}</button>;
};

// Dark mode hook
function useTheme() {
  const [theme, setTheme] = React.useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') };
}
```

### Resources
- https://cssdemystified.com/ — Kevin Powell's complete CSS course
- https://css-for-js.dev/ — Josh Comeau's CSS for React devs
- https://refactoringui.com/ — Adam Wathan + Steve Schoger book
- https://www.smashingmagazine.com/guides/ux-design/
- https://www.w3.org/TR/WCAG22/ — WCAG 2.2 official
- https://radix-ui.com — Unstyled accessible components
- https://tailwindcss.com/docs/upgrade-guide — Tailwind v4 migration

---

## 2. Web Development

### Top Experts
- **Jack Herrington** | YouTube, pronextjs.dev | Advanced React patterns: micro-frontends, module federation, React Compiler. Most technically advanced educator.
- **Traversy Media (Brad Traversy)** | YouTube | Project-based learning. Best annual "State of Web Dev" roadmap videos. 2M+ subscribers.
- **Web Dev Simplified (Kyle Cook)** | YouTube, courses | React Simplified course. Logical progression from zero to proficiency.
- **Lee Robinson** | leerob.io, Vercel | Official Next.js + Vercel best practices. VP of Product at Vercel.
- **Theo (t3.gg)** | YouTube, t3.gg | T3 Stack creator. End-to-end type safety philosophy. 26K+ GitHub stars on create-t3-app.
- **Wes Bos** | wesbos.com, syntax.fm | JavaScript mastery. JavaScript30 (30 projects, zero frameworks). Syntax.fm podcast.
- **Fireship** | fireship.io | Framework comparisons (built same app 10 ways). Performance-first perspective.

### Key Principles
- **Server-first architecture**: Default to React Server Components. Ship zero JS unless interactivity requires it.
- **End-to-end type safety**: TypeScript everywhere. Discriminated unions for props. tRPC for internal APIs.
- **Minimize client JavaScript**: Code splitting, lazy loading, tree-shaking. Bundle size = Core Web Vitals.
- **Declarative data fetching**: TanStack Query for server state. Co-locate queries with components.
- **Atomic state**: Zustand (3KB) for most apps. Jotai for complex interdependent atoms. Redux Toolkit only for enterprise.
- **Suspense as architecture**: Wrap logical data boundaries, not just lazy imports. Enables streaming.
- **Performance metrics are non-negotiable**: LCP < 2.5s, INP < 200ms, CLS < 0.1. Measure in CI.
- **ISR for content**: Incremental Static Regeneration with 60s+ revalidation cuts origin bandwidth 95%.
- **Middleware for cross-cutting concerns**: Auth, logging, A/B testing — keep it out of route handlers.
- **Test by purpose**: Unit (Vitest), Component (Testing Library), E2E (Playwright). MSW for API mocking.

### Best Practices
- Always use `next/image` with explicit `width` and `height` — prevents CLS automatically.
- Preload your LCP image: `<link rel="preload" as="image" fetchpriority="high">`.
- Use hierarchical TanStack Query keys: `["todos", userId, "active"]` for precise cache invalidation.
- Optimistic updates: mutate UI immediately, roll back on error.
- Route-based code splitting with `dynamic()` or `lazy()` — don't lazy-load inside routes.
- Run webpack-bundle-analyzer in CI to catch bundle regressions before production.
- ISR with `revalidate: 60` for marketing pages; `revalidate: 0` (SSR) for user-specific pages.
- Edge functions for geo-targeting, A/B tests, auth redirects — Vercel has 126 PoPs.
- Tailwind v4: use `@theme` block in CSS instead of tailwind.config.js.
- Never mix inline `style={{ display: 'flex' }}` with Tailwind's `hidden` class — inline wins.

### Code Patterns
```typescript
// Discriminated union props — impossible invalid states
type ButtonProps =
  | { variant: 'primary'; onClick: () => void }
  | { variant: 'link'; href: string }
  | { variant: 'disabled' };

// Server Component with Suspense streaming
async function PostList() {
  return (
    <Suspense fallback={<PostSkeleton />}>
      <PostContent />  {/* Data fetch happens here, streams in */}
    </Suspense>
  );
}

// Zustand store with selectors (prevents unnecessary re-renders)
const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));
const itemCount = useCart((state) => state.items.length); // Selector

// TanStack Query with hierarchical keys
const { data } = useQuery({
  queryKey: ['todos', userId, 'active'],
  queryFn: () => fetchTodos(userId, 'active'),
  staleTime: 1000 * 60 * 5,
});

// Next.js Route Handler with caching
export async function GET() {
  const data = await db.posts.findMany();
  return Response.json(data, {
    headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
  });
}

// Tailwind v4 theme (replaces tailwind.config.js)
/* @import "tailwindcss";
@theme {
  --color-primary: #003087;
  --font-family-heading: "Space Grotesk", sans-serif;
  --radius-lg: 1rem;
} */
```

### Resources
- https://react.dev — React 19 official docs
- https://nextjs.org/docs — Next.js 15 App Router
- https://www.pronextjs.dev/tutorials — Jack Herrington advanced patterns
- https://create.t3.gg/ — T3 Stack
- https://tanstack.com/query — TanStack Query
- https://zustand-demo.pmnd.rs/ — Zustand
- https://vitest.dev/ — Vitest
- https://playwright.dev/ — Playwright E2E

---

## 3. AI Agents & Agentic AI

### Top Experts
- **Andrew Ng** | deeplearning.ai | Defined the 4 agent design patterns (Reflection, Tool Use, Planning, Multi-Agent). Most authoritative educator.
- **Harrison Chase** | LangChain/LangGraph creator | LangChain (2022) → LangGraph (2024). LangSmith for observability. Most widely adopted agent framework.
- **Andrej Karpathy** | YouTube, X | Deep intuition for LLM internals. "LLM OS" mental model. Neural network fundamentals.
- **AI Jason** | YouTube | Practical agent builds with n8n, LangChain, OpenAI. Most accessible production tutorials.
- **Cole Medin** | YouTube, GitHub (coleam00) | Production RAG + agentic workflows. Context engineering specialist.
- **David Ondrej** | YouTube | AI automation with agents, business applications.
- **Greg Brockman** | OpenAI co-founder | OpenAI Assistants API, Swarm (lightweight multi-agent), function calling evolution.

### Key Principles
- **Andrew Ng's 4 Agentic Patterns**: (1) Reflection — agent reviews own output; (2) Tool Use — call APIs/functions; (3) Planning — decompose into subtasks; (4) Multi-Agent — specialized agents collaborate.
- **ReAct loop**: Reason → Act → Observe → repeat. The fundamental agentic loop.
- **Tools are the agent's hands**: Clean tool definitions (name, description, JSON schema) are more important than the system prompt.
- **Memory is architecture**: Short-term (context window) + Long-term (vector DB) + Episodic (past runs) + Semantic (facts).
- **Human-in-the-loop by default**: Production agents need checkpoints for high-stakes actions.
- **Deterministic > Probabilistic**: Use agents for tasks where tools + structured outputs can make behavior predictable.
- **Cost and latency awareness**: Every LLM call costs money and time. Design agent graphs to minimize unnecessary calls.
- **Fail gracefully**: Agents must handle tool errors, API timeouts, and unexpected outputs without crashing.

### Best Practices
- Use LangGraph (not LangChain) for stateful multi-step agents — graph-based control flow is more reliable.
- Define tool schemas with maximal clarity in descriptions — the LLM reads them at runtime.
- Use Pydantic models for structured output parsing — prevents JSON parse failures.
- Implement max_iterations guard to prevent infinite loops.
- Store agent state (conversation history, tool results) externally — enables resumability.
- Use streaming for user-facing agents — shows progress, reduces perceived latency.
- Use gpt-4o-mini / claude-haiku for tool selection, gpt-4o / claude-sonnet for generation.
- LangSmith for tracing every agent step in production — non-negotiable for debugging.
- OpenAI Assistants API: use for stateful conversations with file search + code interpreter.
- Multi-agent: define clear input/output contracts between agents. Avoid shared mutable state.

### Code Patterns
```python
# LangGraph agent (stateful, graph-based)
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolNode

def should_continue(state):
    if state["messages"][-1].tool_calls:
        return "tools"
    return END

graph = StateGraph(AgentState)
graph.add_node("agent", call_model)
graph.add_node("tools", ToolNode(tools))
graph.add_conditional_edges("agent", should_continue)
graph.add_edge("tools", "agent")
app = graph.compile(checkpointer=MemorySaver())

# Tool definition (clean schema = better tool selection)
@tool
def search_database(query: str, limit: int = 10) -> list[dict]:
    """Search the product database. Use when user asks about specific products.
    Args:
        query: Search terms to match against product name and description
        limit: Maximum results to return (default 10, max 50)
    """
    return db.search(query, limit=limit)

# Structured output with Pydantic
from langchain_core.output_parsers import PydanticOutputParser

class LeadScore(BaseModel):
    score: int = Field(description="Lead quality score 0-100")
    reasoning: str = Field(description="Why this score was assigned")
    next_action: Literal["call", "email", "disqualify"]

parser = PydanticOutputParser(pydantic_object=LeadScore)

# ReAct agent loop (conceptual)
while iterations < max_iterations:
    thought = llm.think(state)        # Reason
    if thought.is_final: break
    result = tool.run(thought.action) # Act
    state.observe(result)             # Observe
    iterations += 1
```

### Resources
- https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/ — Andrew Ng + LangGraph
- https://langchain-ai.github.io/langgraph/ — LangGraph docs
- https://smith.langchain.com/ — LangSmith tracing
- https://platform.openai.com/docs/assistants — OpenAI Assistants API
- https://github.com/microsoft/autogen — AutoGen multi-agent
- https://github.com/joaomdmoura/crewai — CrewAI
- https://github.com/coleam00/ottomator-agents — Cole Medin production agents

---

## 4. AI Automation & Workflow (n8n / Make / Zapier)

### Top Experts
- **Nate Herk** | nateherk.com, YouTube | Former Goldman Sachs BI analyst. Created "Ultimate n8n Starter Kit 2025". AI Automation Society community founder.
- **Leon van Zyl** | YouTube, n8n Community | Step-by-step n8n tutorials. Human-in-the-loop patterns, LLM chains, WhatsApp AI agents.
- **Cole Medin** | YouTube, GitHub (coleam00) | Production RAG + agentic n8n workflows. Context engineering for AI agents.
- **Liam Ottley** | AAA Accelerator (280K+ members) | Business model for AI automation agencies. Scaled Morningside AI to $100K+/month.
- **Mike Speaks** | YouTube | General automation philosophy, enterprise patterns.

### Key Principles
- **Idempotency by design**: Every workflow must safely re-run. Use idempotency keys, store processed event IDs, prevent duplicate side effects.
- **Decouple ingestion from processing**: Webhook → acknowledge 200/202 immediately → queue for async processing. Never do slow work in the webhook handler.
- **Modular sub-workflows**: Each sub-workflow has one job. Call via "Execute Workflow" node. Max 15–20 nodes per workflow before splitting.
- **Error workflows are mandatory**: Every production workflow needs a dedicated error handler that alerts + logs + retries.
- **Filter before AI**: Remove irrelevant data before sending to LLM nodes — reduces token costs 30–50%.
- **Cost routing**: Route simple queries to cheap models (gpt-4o-mini), reserve expensive models for complex reasoning.
- **Self-documenting**: Rename every node from defaults. "Fetch User from CRM" beats "HTTP Request 3".
- **n8n wins on cost at scale**: $150–200/month self-hosted vs $500+ cloud for 50K+ executions.
- **Incremental processing**: Track last processed timestamp/ID. Only fetch new/changed records on each run.
- **Human governance**: Critical workflows need approval checkpoints. Build pause-for-human into the graph.

### Best Practices
- Use Continue On Fail on critical nodes, then handle error explicitly in parent (don't let it cascade).
- Implement exponential backoff: `{{$json.delay_seconds * 2}}` with jitter for retries.
- Webhook signature validation before processing anything — security first.
- Store all execution metadata (trigger time, record ID, status) for observability.
- Batch process arrays instead of looping item-by-item to reduce execution count costs.
- Use Set node + If node + Wait node for custom retry loops with fine-grained control.
- Disable execution logging on successful automated tasks — reduces DB costs significantly.
- Self-hosted Kubernetes Queue Mode: 1 main + 50+ workers for massive scale.
- JSON schema validation at workflow entry — fail fast, prevent wasted downstream API calls.
- Use environment variables for all API keys — never hardcode credentials in nodes.

### Code Patterns (n8n Expressions)
```javascript
// Access incoming data
{{$json.fieldName}}
{{$json.user.profile.name}}         // Nested
{{$json.items[0].id}}               // Array

// Access other nodes
{{$node["NodeName"].json.fieldName}}

// Date operations (Luxon)
{{$now.toFormat('yyyy-MM-dd HH:mm')}}
{{$now.minus({days: 7}).toISO()}}   // 7 days ago

// Conditional
{{$json.amount > 1000 ? 'high' : 'low'}}
{{$json.status === 'active' && $json.verified ? 'proceed' : 'skip'}}

// String manipulation
{{$json.email.toLowerCase()}}
{{$json.name.split(' ')[0]}}        // First name only

// Array operations
{{$json.items.filter(x => x.active).map(x => x.id)}}
{{$json.tags.includes('urgent')}}
{{$json.numbers.reduce((a,b) => a+b, 0)}}  // Sum

// Environment variables
{{$env.OPENAI_API_KEY}}
{{$env.BASE_URL}}
```

### Common Workflow Architectures
```
// 1. Webhook → Queue → Worker (production standard)
Webhook Trigger → Validate Signature → Store in Queue → 200 OK
Scheduled Worker → Dequeue → Process → Update Record → Notify

// 2. AI Enrichment Pipeline
Trigger → Fetch Data → Validate Schema → Filter Noise →
  OpenAI/Anthropic Node → Parse Structured Output → Update CRM → Notify

// 3. Error Recovery
Error Trigger → Log to DB → Slack Alert → Retry Logic → Final Status Report

// 4. Agentic RAG
User Input → n8n AI Agent → Query Vector DB → Fetch Relevant Chunks →
  LLM Synthesis → Return Answer → Store for Learning
```

### n8n vs Make vs Zapier
| Feature | Zapier | Make | n8n |
|---|---|---|---|
| Integrations | 8,000+ | 3,000+ | 1,500+ |
| Pricing | Per task (expensive at scale) | Per operation | Per execution |
| AI-native | Limited | Moderate | Excellent (70+ AI nodes) |
| Self-hosted | No | No | Yes |
| Best for | Non-technical, needs 7K apps | Visual SMB workflows | Developers, AI-heavy, scale |

### Resources
- https://docs.n8n.io/workflows/ — n8n official docs
- https://docs.n8n.io/flow-logic/error-handling/ — Error handling
- https://n8n.io/workflows/ — 9,000+ workflow templates
- https://www.nateherk.com/ — Nate Herk starter kit
- https://github.com/enescingoz/awesome-n8n-templates — 280+ free templates
- https://community.n8n.io/ — n8n community forum

---

## 5. JSON & API Integration

### Top Experts
- **Phil Sturgeon** | apisyouwonthate.com | "APIs You Won't Hate" book + podcast. REST design, versioning, OpenAPI.
- **Stripe Engineering** | stripe.com/docs | Industry gold standard for API DX. Idempotency keys, webhooks, versioning.
- **Postman Blog** | blog.postman.com | API testing strategies, documentation, mock servers.
- **Nordic APIs** | nordicapis.com | API strategy, governance, enterprise patterns.

### Key Principles
- **REST resource naming**: Nouns not verbs. `/users/{id}/orders` not `/getUserOrders`.
- **HTTP methods as intent**: GET (read, idempotent), POST (create), PUT (replace, idempotent), PATCH (partial update), DELETE (idempotent).
- **Status codes mean something**: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error.
- **Consistent error format**: Use RFC 7807 Problem Details or your own consistent schema. Never return different shapes.
- **Idempotency keys for POST**: Allow clients to safely retry without creating duplicates.
- **Webhook signatures**: HMAC-SHA256 sign every outbound webhook. Verify on receipt.
- **Versioning strategy**: URL path versioning (`/v1/`) for breaking changes. Header versioning for minor variants.
- **Rate limiting headers**: Always return `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.
- **Pagination**: Cursor-based for large/real-time datasets; offset for small static datasets.
- **OWASP API Top 10**: Broken object-level auth, excessive data exposure, lack of rate limiting are the top killers.

### Best Practices
- Return consistent response envelope: `{ data: {}, meta: {}, error: null }` or plain resource — pick one and never deviate.
- HMAC webhook validation: `crypto.timingSafeEqual(expectedSig, receivedSig)` — use timing-safe comparison.
- Implement idempotency: store `idempotency_key` in DB, return cached response on replay.
- Add `Retry-After` header on 429 — clients need to know when to retry.
- Use cursor pagination for feeds: `?cursor=eyJpZCI6MTIzfQ&limit=20` — stable under inserts.
- Document with OpenAPI 3.1 spec — enables code generation, Postman import, validation.
- Never expose internal IDs directly — use opaque tokens or UUIDs.
- Rate limit by user + endpoint, not just globally.
- Add `ETag` + `Last-Modified` headers for cacheable resources.
- Validate all inputs at boundary: JSON Schema or Zod/Yup before any business logic.

### Code Patterns
```javascript
// Consistent error response (RFC 7807 Problem Details)
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Failed",
  "status": 422,
  "detail": "The email field is required",
  "instance": "/users/register",
  "errors": [{ "field": "email", "message": "Required" }]
}

// HMAC webhook verification (Node.js)
const crypto = require('crypto');
function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  const received = signature.replace('sha256=', '');
  return crypto.timingSafeEqual(
    Buffer.from(expected, 'hex'),
    Buffer.from(received, 'hex')
  );
}

// Idempotency key pattern
async function createCharge(amount, idempotencyKey) {
  const existing = await db.find({ idempotency_key: idempotencyKey });
  if (existing) return existing; // Replay — return cached result
  const result = await stripe.charges.create({ amount });
  await db.save({ idempotency_key: idempotencyKey, result });
  return result;
}

// Cursor pagination
GET /api/posts?cursor=eyJpZCI6MTAwfQ&limit=20
// Response:
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTIwfQ",
    "has_more": true
  }
}

// Retry with exponential backoff
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url);
      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get('Retry-After') || '1');
        await sleep(retryAfter * 1000 * Math.pow(2, i));
        continue;
      }
      return res.json();
    } catch (e) {
      if (i === maxRetries - 1) throw e;
      await sleep(1000 * Math.pow(2, i));
    }
  }
}
```

### Resources
- https://apisyouwonthate.com/ — Phil Sturgeon's API design book/podcast
- https://stripe.com/docs/api — Gold standard API design reference
- https://swagger.io/specification/ — OpenAPI 3.1 spec
- https://datatracker.ietf.org/doc/html/rfc7807 — Problem Details RFC
- https://owasp.org/www-project-api-security/ — OWASP API Top 10
- https://nordicapis.com/blog/ — Nordic APIs patterns

---

## 6. RAG (Retrieval Augmented Generation)

### Top Experts
- **Jerry Liu** | llamaindex.ai, blog.llamaindex.ai | LlamaIndex founder. Most authoritative on RAG pipeline design. Query transformation, evaluation, agentic RAG.
- **Jason Liu** | jxnl.co | instructor library creator. Structured outputs, RAG evaluation, production engineering practices.
- **Pinecone Blog** | pinecone.io/learn | Best vector DB tutorials: chunking, embedding, hybrid search.
- **Weights & Biases** | wandb.ai/blog | RAG evaluation, experiment tracking, LLM observability.
- **LangChain Team** | python.langchain.com | Document loaders, text splitters, retrievers, RAG chains.

### Key Principles
- **Garbage in, garbage out**: Document preprocessing quality determines RAG quality more than model choice.
- **Chunk size is a hyperparameter**: There is no universal chunk size. Experiment with 256, 512, 1024 tokens for your data.
- **Retrieval strategy matters**: Similarity search alone is baseline. Hybrid search (BM25 + dense) beats pure vector by 15–30%.
- **Re-ranking is cheap and powerful**: A cross-encoder re-ranker (Cohere Rerank, BGE-reranker) on top-20 results beats top-5 similarity alone.
- **Evaluate early and often**: RAGAS (faithfulness, answer relevancy, context precision, context recall) as CI gate.
- **The lost-in-the-middle problem**: LLMs attend poorly to the middle of long contexts. Put key context first and last.
- **Metadata filtering beats brute force**: Filter by date, author, category before vector search — faster + more precise.
- **Agentic RAG**: Agents that decide whether to retrieve, what to retrieve, and when to stop. Better than always-retrieve pipelines.

### Best Practices
- Clean documents before chunking: remove headers/footers, fix encoding, normalize whitespace.
- Use sentence-aware chunking (RecursiveCharacterTextSplitter) not fixed token splits.
- Add 10–20% chunk overlap to preserve context at boundaries.
- Store both chunk text AND parent document ID — enables parent-child retrieval.
- Use HyDE (Hypothetical Document Embeddings): generate a hypothetical answer, embed it, retrieve with that embedding. Beats direct query embedding for short queries.
- Multi-query retrieval: generate 3 query variants, retrieve for each, deduplicate — catches different phrasings.
- Embed metadata into chunk text: "Document: [title]. Section: [section]. Content: [text]" — improves retrieval.
- Use OpenAI `text-embedding-3-large` for highest quality, `text-embedding-3-small` for cost efficiency.
- Never embed raw PDF text — parse with pymupdf, pdfplumber, or Unstructured.io first.
- Cache embeddings — they're deterministic. Never re-embed the same text twice.

### Code Patterns
```python
# LlamaIndex production RAG pipeline
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.retrievers.bm25 import BM25Retriever
from llama_index.core.query_engine import RetrieverQueryEngine

# 1. Chunking with overlap
splitter = SentenceSplitter(chunk_size=512, chunk_overlap=64)

# 2. Hybrid retriever (BM25 + vector)
vector_retriever = VectorIndexRetriever(index, similarity_top_k=10)
bm25_retriever = BM25Retriever.from_defaults(index, similarity_top_k=10)

# 3. HyDE (Hypothetical Document Embeddings)
from llama_index.core.indices.query.query_transform import HyDEQueryTransform
hyde = HyDEQueryTransform(include_original=True)

# 4. RAGAS evaluation
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

results = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevancy, context_precision]
)

# LangChain RAG with multi-query retrieval
from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain_community.retrievers import BM25Retriever
from langchain.retrievers import EnsembleRetriever

# Ensemble: 60% vector + 40% BM25
ensemble = EnsembleRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.6, 0.4]
)

# Multi-query for coverage
multi_query = MultiQueryRetriever.from_llm(
    retriever=ensemble,
    llm=ChatOpenAI(temperature=0)
)

# Pinecone with metadata filtering
results = index.query(
    vector=embedding,
    filter={"category": {"$in": ["finance", "legal"]}, "date": {"$gte": "2024-01-01"}},
    top_k=10,
    include_metadata=True
)
```

### Vector Store Comparison
| Store | Best For | Hosting | Special Feature |
|---|---|---|---|
| Pinecone | Production, scale | Cloud-only | Serverless, metadata filtering |
| Weaviate | Hybrid search | Self/Cloud | GraphQL API, modules |
| Chroma | Local dev | Local/Cloud | Zero-config, Python-first |
| Qdrant | Performance | Self/Cloud | Payload indexing, filtering |
| pgvector | Existing Postgres | Your DB | SQL joins with vectors |

### Resources
- https://blog.llamaindex.ai/ — Jerry Liu's RAG techniques
- https://www.pinecone.io/learn/ — Pinecone RAG tutorials
- https://docs.ragas.io/ — RAGAS evaluation framework
- https://python.langchain.com/docs/how_to/#retrievers — LangChain retrievers
- https://jxnl.co/ — Jason Liu's production RAG practices
- https://unstructured.io/ — Document parsing for RAG

---

## 7. Voice AI Agents

### Top Platforms & Experts
- **Vapi** | vapi.ai | Most developer-friendly voice agent platform. REST API + SDKs. Assistants, phone numbers, call webhooks. Community-driven.
- **Retell AI** | retellai.com | Best for reliability and latency. Knowledge base built-in. Webhook-based event system.
- **ElevenLabs** | elevenlabs.io | Best voice quality (TTS + voice cloning). Conversational AI feature (agent builder). Industry-leading naturalness.
- **Bland AI** | bland.ai | Outbound calling specialist. Cold call automation, appointment booking.
- **Deepgram** | deepgram.com | Best STT (speech-to-text). Nova-3 model. Streaming transcription, low latency.
- **PlayHT** | play.ht | TTS alternative to ElevenLabs. Competitive on price.

### Key Principles
- **Latency is everything**: Target < 500ms end-to-end (STT → LLM → TTS). Users tolerate up to 1s. > 1.5s = abandoned call.
- **Voice is not chat**: No markdown, no lists, no code. Write prompts as speech: "I can help you with that" not "Here are 3 options:".
- **Interruption handling is UX**: Users will interrupt. Graceful barge-in detection is non-negotiable.
- **Conversational, not robotic**: Use filler words ("Sure", "Of course", "Let me check that for you"), natural hesitations.
- **Short turns**: LLM responses should be 1–3 sentences max. Long monologues fail in voice.
- **Silence detection**: 1.5–2s of silence = user finished speaking. Tune per use case.
- **Pipeline optimization**: Stream everything. STT streams in real-time → LLM generates tokens → TTS speaks first sentence before LLM finishes.
- **Fallbacks are safety nets**: If STT fails, if LLM errors — have a human transfer fallback ready.

### Best Practices
- Use Deepgram Nova-3 for STT — best accuracy + streaming latency combination.
- Use ElevenLabs Turbo v2.5 for TTS when quality matters; Cartesia or Deepgram TTS for lowest latency.
- Keep system prompts under 500 words for voice — long prompts increase first-response latency.
- Explicitly prompt: "Keep responses to 1-2 sentences. You are speaking aloud, not writing."
- Build call flows with clear state machine: greeting → qualification → objection handling → transfer/close.
- Always have a "transfer to human" tool available.
- Log full call transcripts + outcomes for continuous improvement.
- Test with real phones — emulators miss real-world audio quality issues.
- Use phone number provisioning through Twilio or Vonage via platform integrations.
- Vapi webhooks: `call-started`, `call-ended`, `transcript` events for CRM integration.

### Code Patterns
```javascript
// Vapi call initiation (outbound)
const call = await vapi.calls.create({
  assistant: {
    model: { provider: 'anthropic', model: 'claude-3-5-haiku-20241022' },
    voice: { provider: 'elevenlabs', voiceId: 'YOUR_VOICE_ID' },
    transcriber: { provider: 'deepgram', model: 'nova-3' },
    systemPrompt: `You are Alex, a friendly assistant for Acme Corp.
Keep all responses to 1-2 sentences. Speak naturally and conversationally.
If you cannot help, transfer to a human immediately.`,
    firstMessage: "Hi there! This is Alex from Acme Corp. How can I help you today?",
    endCallFunctionEnabled: true,
    forwardingPhoneNumber: '+15551234567', // Human transfer
  },
  phoneNumberId: 'YOUR_PHONE_NUMBER_ID',
  customer: { number: '+15559876543' }
});

// Retell agent creation
const agent = await retellClient.agent.create({
  llm_websocket_url: 'wss://your-llm-server.com/llm-websocket',
  agent_name: 'Appointment Scheduler',
  voice_id: 'eleven_turbo_v2',
  language: 'en-US',
  response_engine: {
    type: 'retell-llm',
    llm_id: 'your-llm-id'
  }
});

// Voice-optimized system prompt template
const VOICE_SYSTEM_PROMPT = `
You are [NAME], a [ROLE] for [COMPANY].

SPEAKING RULES:
- Keep every response to 1-2 sentences maximum
- Never use lists, bullet points, or markdown
- Use natural speech: "Sure thing", "Let me look that up", "Got it"
- If you need to think, say "One moment" rather than going silent
- Always end with a question to keep conversation moving

YOUR GOAL: [SPECIFIC_OBJECTIVE]

TOOLS AVAILABLE: [LIST TOOLS WITH WHEN TO USE THEM]

TRANSFER TO HUMAN WHEN: [SPECIFIC CONDITIONS]
`;
```

### Voice Agent Pipeline
```
User Speech
  → Deepgram STT (streaming, ~100ms)
  → LLM (claude-haiku / gpt-4o-mini for speed, ~200ms first token)
  → ElevenLabs TTS (streaming, speaks while LLM still generating)
  → Audio to user
Total target: <500ms perceived latency
```

### Resources
- https://docs.vapi.ai/ — Vapi official docs
- https://docs.retellai.com/ — Retell AI docs
- https://elevenlabs.io/docs/conversational-ai — ElevenLabs ConvAI
- https://developers.deepgram.com/ — Deepgram STT
- https://bland.ai/blog — Bland AI tutorials
- https://www.youtube.com/@retellai — Retell AI YouTube

---

## 8. Python for AI

### Top Experts
- **Sentdex (Harrison Kinsley)** | YouTube, pythonprogramming.net | Python ML fundamentals. Neural networks from scratch. Long-form practical tutorials.
- **Patrick Loeber** | YouTube | PyTorch for ML, Python AI applications. Clear beginner-to-advanced progression.
- **Tech With Tim** | YouTube | Python projects, Django/Flask, practical apps. Strong fundamentals.
- **Nicholas Renotte** | YouTube | Hands-on AI with Python: object detection, NLP, Stable Diffusion.
- **Sam Witteveen (Red Dragon AI)** | YouTube | LangChain, prompt engineering, RAG with Python. Most production-focused.
- **1littlecoder** | YouTube | Hugging Face, transformers, Gradio demos. Best for open-source models.

### Key Principles
- **Async-first for I/O-bound AI**: All LLM API calls are network I/O. Use `async/await` + `asyncio.gather()` for parallel calls.
- **Pydantic for everything AI**: Validate LLM outputs, API inputs, config files. Prevents silent failures.
- **Retry with backoff for LLM calls**: Rate limits are inevitable. Use `tenacity` library or implement manually.
- **Stream by default**: Streaming responses reduce perceived latency 60–80% in user-facing apps.
- **Prompt is code**: Version control prompts like code. Use constants or Jinja2 templates, not f-strings.
- **Log everything**: Every LLM call, every tool invocation, input + output + latency + cost. LangSmith or custom.
- **Type hints everywhere**: AI code is complex enough without dynamic types adding confusion.
- **Test with determinism**: Mock LLM calls in unit tests. Use fixed seeds where possible.
- **Environment management**: python-dotenv for local, secrets manager (AWS SSM, Vault) for production.
- **Cost tracking**: Count tokens explicitly. `tiktoken` for OpenAI, `anthropic.count_tokens()` for Claude.

### Best Practices
- Use `httpx.AsyncClient` instead of `requests` for async HTTP.
- Use `asyncio.gather()` for parallel LLM calls — 5x faster than sequential when processing batches.
- FastAPI for AI backends: native async, automatic OpenAPI docs, Pydantic integration, streaming support.
- Use `instructor` library for reliable structured output extraction from any LLM.
- Implement circuit breaker pattern for external API calls — prevent cascade failures.
- Cache LLM responses with `functools.lru_cache` or Redis for identical prompts.
- Use `python-dotenv` locally; never hardcode API keys; `.env` in `.gitignore`.
- Token limit guardrails: count input tokens before sending, raise early if over limit.
- Use `structlog` or standard `logging` with JSON format for production log aggregation.
- Profile with `cProfile` or `py-spy` before optimizing — don't guess bottlenecks.

### Code Patterns
```python
# Async parallel LLM calls (5x faster than sequential)
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def process_item(item: str) -> str:
    message = await client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=500,
        messages=[{"role": "user", "content": item}]
    )
    return message.content[0].text

async def process_batch(items: list[str]) -> list[str]:
    return await asyncio.gather(*[process_item(i) for i in items])

# Streaming response (FastAPI)
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()

@app.post("/chat")
async def chat(prompt: str):
    async def generate():
        async with client.messages.stream(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            messages=[{"role": "user", "content": prompt}]
        ) as stream:
            async for text in stream.text_stream:
                yield f"data: {text}\n\n"
    return StreamingResponse(generate(), media_type="text/event-stream")

# Retry with tenacity
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
import anthropic

@retry(
    retry=retry_if_exception_type((anthropic.RateLimitError, anthropic.APITimeoutError)),
    wait=wait_exponential(multiplier=1, min=4, max=60),
    stop=stop_after_attempt(5)
)
async def call_llm_with_retry(prompt: str) -> str:
    message = await client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}]
    )
    return message.content[0].text

# Structured output with instructor
import instructor
from pydantic import BaseModel

client_structured = instructor.from_anthropic(AsyncAnthropic())

class LeadAnalysis(BaseModel):
    intent: str
    urgency_score: int  # 1-10
    recommended_action: str

async def analyze_lead(email_text: str) -> LeadAnalysis:
    return await client_structured.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=500,
        response_model=LeadAnalysis,
        messages=[{"role": "user", "content": f"Analyze this email: {email_text}"}]
    )

# Environment + config pattern
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    openai_api_key: str
    anthropic_api_key: str
    pinecone_api_key: str
    max_tokens: int = 1024
    model: str = "claude-sonnet-4-6"

    class Config:
        env_file = ".env"

settings = Settings()

# Token counting before sending
import anthropic

def count_tokens(text: str, model: str = "claude-sonnet-4-6") -> int:
    client = anthropic.Anthropic()
    response = client.messages.count_tokens(
        model=model,
        messages=[{"role": "user", "content": text}]
    )
    return response.input_tokens
```

### Resources
- https://platform.openai.com/docs/api-reference — OpenAI Python SDK
- https://docs.anthropic.com/en/api — Anthropic SDK
- https://python.langchain.com/ — LangChain Python
- https://python.instructor-ai.com/ — instructor (structured outputs)
- https://tenacity.readthedocs.io/ — Tenacity retry library
- https://fastapi.tiangolo.com/ — FastAPI
- https://pydantic-settings.readthedocs.io/ — pydantic-settings
- https://github.com/coleam00/ottomator-agents — Production agent examples

---

*Knowledge base compiled from research across YouTube, official documentation, GitHub, and production engineering blogs. April 2026.*
