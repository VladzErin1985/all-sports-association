# Quick Reference — Top 3 Tips Per Domain
> Distilled from expert_knowledge_base.md · April 2026

---

## 1. Web Design & UI/UX
**Source experts: Kevin Powell, Josh Comeau, Steve Schoger, Adam Wathan**

1. **Use `clamp()` for all font sizes and padding** — eliminates most responsive breakpoints.
   `font-size: clamp(1rem, 2.5vw, 1.5rem)` scales smoothly from mobile to desktop with zero media queries.

2. **Container queries > media queries for components** — components should respond to their container width, not the viewport. Enables truly reusable components in any layout context.
   ```css
   .card { container-type: inline-size; }
   @container (min-width: 400px) { .card { flex-direction: row; } }
   ```

3. **Spacing creates separation; borders are a last resort** — use white space, background color shifts, and shadow depth to separate sections. Add borders only when nothing else works.

---

## 2. Web Development
**Source experts: Jack Herrington, Lee Robinson, Theo, Traversy Media**

1. **Server Components by default; Client Components only for interactivity** — In Next.js App Router, async Server Components fetch data on the server with zero client JS overhead. Add `"use client"` only when you need useState/useEffect/event handlers.

2. **TanStack Query for all server state** — replaces useState + useEffect + manual loading/error handling with automatic caching, background refetch, and optimistic updates. Use hierarchical keys: `["posts", userId, "active"]`.

3. **Never mix inline `style={{ display: 'flex' }}` with Tailwind `hidden`** — inline styles always win over CSS classes. The `hidden` class (`display: none`) will be overridden. Use only Tailwind responsive prefixes (`lg:hidden`, `lg:flex`) for show/hide logic.

---

## 3. AI Agents & Agentic AI
**Source experts: Andrew Ng, Harrison Chase (LangChain), Cole Medin**

1. **Use LangGraph for stateful agents** — LangChain chains break down with multi-step, conditional logic. LangGraph gives you explicit graph-based control flow with a checkpointer for resumability.

2. **Tool descriptions are more important than your system prompt** — the LLM reads tool schemas at runtime to decide what to call. Write tool descriptions like documentation: what it does, when to use it, what each param means.

3. **Add `max_iterations` guard + human-in-the-loop for production** — every agent loop needs a hard stop. For high-stakes actions (sending emails, charging cards, modifying data), require human approval before execution.

---

## 4. AI Automation & Workflow (n8n)
**Source experts: Nate Herk, Leon van Zyl, Cole Medin**

1. **Respond 200/202 immediately to webhooks, then process async** — never do slow work (LLM calls, DB queries, API chains) inside the webhook handler. Acknowledge receipt instantly, queue the payload, process in a background worker.

2. **Filter data before sending to LLM nodes** — remove irrelevant fields, limit text length, extract only what the AI needs. Reduces token costs 30–50% and improves response quality.

3. **Modular sub-workflows: one job per workflow** — when a workflow exceeds 15–20 nodes or has 3+ branching paths, split it. Call sub-workflows via "Execute Workflow" node. Makes testing, debugging, and reuse dramatically easier.

---

## 5. JSON & API Integration
**Source experts: Phil Sturgeon (APIs You Won't Hate), Stripe Engineering**

1. **Idempotency keys for every POST mutation** — allow clients to safely retry failed requests. Store the `Idempotency-Key` header value in DB; return the cached response if the same key appears again. Critical for payments, emails, and any non-reversible operation.

2. **HMAC-SHA256 sign every outbound webhook** — compute `X-Signature: sha256=<hmac>` on the payload. Recipients verify before processing. Use `crypto.timingSafeEqual()` to prevent timing attacks.

3. **Use RFC 7807 Problem Details for error responses** — consistent error shape: `{ type, title, status, detail, instance }`. Clients can parse errors programmatically instead of parsing human-readable strings.

---

## 6. RAG (Retrieval Augmented Generation)
**Source experts: Jerry Liu (LlamaIndex), Jason Liu, Pinecone**

1. **Hybrid retrieval (BM25 + dense vector) beats pure vector by 15–30%** — BM25 catches exact keyword matches that embeddings miss. Use `EnsembleRetriever` with weights [0.6, 0.4]. Always try hybrid before tuning embeddings.

2. **Re-ranking is cheap and high-impact** — retrieve top-20 with vector search, then re-rank with Cohere Rerank or a cross-encoder. Final top-5 quality beats pure top-5 similarity significantly.

3. **HyDE for short queries** — "Hypothetical Document Embeddings": ask the LLM to write a hypothetical answer, embed that, retrieve with it. The hypothetical answer is semantically closer to relevant chunks than the short query itself.

---

## 7. Voice AI Agents
**Source experts: Vapi, Retell AI, ElevenLabs, Deepgram**

1. **Voice prompts need strict length rules** — always include: "Keep every response to 1–2 sentences. You are speaking aloud, not writing. Never use lists, bullet points, or markdown." Long responses kill voice UX.

2. **Stream everything for <500ms perceived latency** — chain: Deepgram Nova-3 (streaming STT) → LLM (streaming tokens) → ElevenLabs Turbo (starts speaking before LLM finishes). Each stage pipes into the next without waiting for completion.

3. **Always have a human transfer escape hatch** — define `forwardingPhoneNumber` or a `transfer_to_human` tool. Users lose trust instantly if they can't reach a real person when the AI fails.

---

## 8. Python for AI
**Source experts: Sam Witteveen, Tech With Tim, Sentdex**

1. **`asyncio.gather()` for parallel LLM calls** — processing a batch of 10 items sequentially vs in parallel: ~30s vs ~5s. Always use `async/await` + `asyncio.gather()` for I/O-bound AI workloads.

2. **`instructor` + Pydantic for structured LLM output** — LLMs return unpredictable JSON. `instructor` wraps any LLM (OpenAI, Anthropic, etc.) and retries automatically until output validates against your Pydantic model.

3. **`tenacity` for retry logic** — wrap all external API calls with `@retry(wait=wait_exponential(min=4, max=60), stop=stop_after_attempt(5))`. Never write manual retry loops for rate limits.

---

## Universal Rules Across All Domains

| Rule | Applies To |
|---|---|
| Fail fast, validate at the boundary | API, RAG, n8n, Python |
| Log inputs + outputs + latency for every external call | AI Agents, Voice, Python |
| Version everything: prompts, schemas, workflows | Agents, RAG, API, n8n |
| Test with real data, not synthetic mocks | RAG, Voice, API |
| Cost-aware architecture: filter/route before expensive operations | n8n, RAG, Python, Voice |
| Human fallback for high-stakes actions | Agents, Voice, n8n |

---

*Full details in `expert_knowledge_base.md`*
