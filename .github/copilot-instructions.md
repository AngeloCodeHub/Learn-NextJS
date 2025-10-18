# Copilot Instructions for Learn-NextJS

## 專案架構與主要技術
- 本專案以 Next.js 14 (app directory) 為主，結合 HeroUI (v2)、Tailwind CSS、TypeScript、Framer Motion、next-themes。
- 主要目錄：
  - `app/`：Next.js 14 的 App Router 結構，包含 `layout.tsx`、`page.tsx`、`error.tsx`。
  - `components/`：共用 UI 元件，含 shadcn/ui 風格元件（如 `ui/button.tsx`、`ui/card.tsx`）。
  - `config/`：專案設定（如字型、站台資訊）。
  - `hooks/`：自訂 React hooks。
  - `lib/`：工具函式與外部服務整合。
  - `public/`、`styles/`：靜態資源與 CSS。
  - `types/`：型別定義。

## 開發流程
- 安裝依賴：`pnpm install` 或 `npm install`
- 啟動開發伺服器：`pnpm dev` 或 `npm run dev`
- 編譯/建置：`pnpm build` 或 `npm run build`
- 測試：本專案未見明確測試流程，請依需求補充。

## 重要慣例與模式
- UI 元件採用 shadcn/ui 樣式，集中於 `components/ui/`。
- Tailwind CSS 變體與主題切換由 `theme-provider.tsx`、`next-themes` 管理。
- 跨頁面/元件溝通以 props、hooks 為主，無明顯 Redux/MobX 狀態管理。
- 外部服務（如 Supabase）整合於 `lib/` 或 `SrcCode/supabase-starter/`。
- 型別集中於 `types/index.ts`。

## 進階結構
- `SrcCode/` 目錄下有官方 Next.js 範例、舊專案、Supabase Starter 等，供參考或測試。
- `config/` 目錄可自訂字型、站台資訊，建議修改時同步檢查相關引用。

## 常見問題
- 若遇到 Tailwind 或 shadcn/ui 樣式異常，請檢查 `postcss.config.mjs`、`tailwind.config.ts`。
- 若需新增 UI 元件，建議放在 `components/ui/` 並遵循現有命名與 props 設計。
- 若需整合新外部服務，請優先於 `lib/` 建立對應工具函式。

## 參考文件
- [Next.js 官方文件](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---
本檔案供 AI coding agent 快速理解專案結構、慣例與開發流程，請依實際專案狀況持續補充。
