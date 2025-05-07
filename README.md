## 📚 Study Log

This repository is not about flashy projects —  
it's where I learn, break things, fix them (sometimes),  
and talk nicely to Cursor AI

---

### ✨ What this repo is for

- Tracking what I learn from the course
- Saving small tips, patterns
- Just real learning

---

### 🤖 Useful Prompts used with Cursor AI

#### 🧩 Component Abstraction

**Template:**

```
Abstract this component to [target file path].
Use props for [dynamic parts or content].
```

**Example Usage:**

```
Abstract this component to /components/common/alert.tsx.
Use props for content
```

### ✅ Tip: Truncating Text in Tailwind (Single-line & Multi-line)

Here's a quick checklist for handling long text in responsive layouts using Tailwind:

---

#### 1. ✂️ Truncating Text

- **Single-line**:  
  Use `truncate` → Applies `overflow-hidden`, `text-overflow: ellipsis`, `white-space: nowrap`
- **Multi-line**:  
  Use `line-clamp-{n}` → Truncates after `n` lines with ellipsis

---

#### 2. 🧱 Container Setup (Important!)

- `min-w-0`:  
  Prevents child from overflowing in `flex` or `grid` containers

- `overflow-hidden`:  
  Hides overflowing content cleanly — often used with `truncate`

---

#### 3. ⚙️ Other Useful Utilities

- `shrink-0`:  
  Prevents things like `<Avatar />` from shrinking in a flex layout

- `flex-1`:  
  Allows a child element to take up remaining available space

---

#### 📝 Example Code

```jsx
<CardHeader className="flex-1 min-w-0 overflow-hidden">
  <CardTitle className="truncate">긴 제목 텍스트 예시</CardTitle>
  <CardDescription className="line-clamp-2">
    여러 줄에 걸친 설명 텍스트 예시입니다. 이 텍스트는 두 줄까지만 표시되고,
    초과 부분은 말줄임표로 처리됩니다.
  </CardDescription>
</CardHeader>
```

---

### 🗺️ Generating Page Files from routes.ts with Cursor AI

I first define all the app routes inside `routes.ts` (open navigation.tsx).  
Once the structure is ready, I let **Cursor AI** auto-generate the page files — super useful for fast scaffolding.

---

#### ✅ Example: `routes.ts`

```ts
export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/categories-page.tsx"),
    ]),
    route("promote", "features/products/pages/promote-page.tsx"),
  ]),
] satisfies RouteConfig;
```

#### 💬 Prompt to CursorAI

```txt
Create all the files for the routes in the file.
No fixing types and other files. Just create page files.
```
