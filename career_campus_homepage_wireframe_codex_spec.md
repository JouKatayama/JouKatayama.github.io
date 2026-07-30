# NPO法人キャリアキャンパス
# トップページ・ワイヤーフレーム／Codex実装仕様書

## 0. 文書の目的

本書は、NPO法人キャリアキャンパスの初期ホームページを、Codexで実装し、GitHub Pagesで無料公開するための設計・実装仕様書である。

初期リリースでは、会員機能、独自データベース、AI診断、決済、マッチング機能は実装しない。

ホームページの役割は、次の3点に限定する。

1. 日本社会にある「キャリアの無反応」という課題を提示する
2. 「リスキリングの前に、Re:Mind」という思想への共感をつくる
3. 個人、企業・大学・自治体、メンター・支援者を具体的な参加行動へ導く

---

# 1. サイトの基本方針

## 1.1 ポジショニング

キャリアキャンパスを、単なるキャリア支援NPO、就活支援団体、研修事業者として見せない。

サイト上では次のように定義する。

> 会社でも学校でもない、学びと実践の外部インフラ。

> キャリアキャンパスは、固定化した前提を問い直し、人と知識と実践機会をつなぎ、自分の未来にもう一度反応できる人を増やす。

## 1.2 中核メッセージ

### メインコピー

> 所属環境で、可能性は決まってしまうのか？

### ブランドコピー

> リスキリングの前に、Re:Mind。

### 補足コピー

> キャリアキャンパスは、会社や学校の外で、多様な人・知識・実践機会をつなぐ外部インフラです。固定化した前提を問い直し、自分の人生にもう一度反応し、次の一歩を選べる人を増やします。

## 1.3 トーン

- 問題提起は強くする
- 人格や世代を批判しない
- 不安だけを煽らない
- 問いと同時に、希望と具体的な参加先を示す
- アカデミックさとビジネス上の信頼感を両立する
- 代表者個人への依存や宗教的な印象を避ける
- 意識の高さではなく、当事者性、実践、完遂、他者貢献を重視する

---

# 2. 初期リリースの対象ページ

```text
/
├── /about/
├── /activities/
├── /projects/
├── /insights/
├── /news/
├── /join/
├── /organization/
├── /contact/
├── /privacy/
└── /404.html
```

本書ではトップページ `/` を詳細設計する。

---

# 3. トップページ全体ワイヤーフレーム

## 3.1 デスクトップ版

```text
┌──────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│ Logo       About  Activities  Insights  News  Organization   │
│                                            [活動に参加する]   │
├──────────────────────────────────────────────────────────────┤
│ HERO                                                         │
│                                                              │
│ 所属環境で、可能性は決まってしまうのか？                     │
│ リスキリングの前に、Re:Mind。                                │
│ 説明文                                                       │
│ [活動に参加する] [Re:Mindを知る] [企業・大学の方へ]          │
│                                      円環・接続線のSVG        │
├──────────────────────────────────────────────────────────────┤
│ PROBLEM                                                      │
│ 問題は、スキル不足だけではない。                             │
│ 自分の未来に反応しなくなっていることだ。                     │
│                                                              │
│ [若手]          [中堅]          [高能力・未完遂層]           │
│                                                              │
│ 共通構造：前提更新不足／実践不足／自己決定不足／完遂不足     │
├──────────────────────────────────────────────────────────────┤
│ REMIND                                                       │
│ Re:Mindとは                                                  │
│ 定義文                                                       │
│                                                              │
│ 01 Re:Mind → 02 Re:Choose → 03 Re:Act → 04 Re:Build          │
│                                   → 05 Re:Connect             │
├──────────────────────────────────────────────────────────────┤
│ EXTERNAL INFRASTRUCTURE                                      │
│ 会社でも学校でもない、キャリアの外部インフラ。               │
│                                                              │
│ [先端情報] [仲間・メンター] [問い・対話]                     │
│ [実践機会] [成果の可視化]   [次の機会]                       │
│                                                              │
│          複数環境の知・経験・価値観が交わる円環図             │
├──────────────────────────────────────────────────────────────┤
│ ACTIVITIES                                                   │
│ 活動領域                                                     │
│ [Re:Mind] [実践プロジェクト] [コミュニティ] [研究・社会実装] │
├──────────────────────────────────────────────────────────────┤
│ AUDIENCE PATHS                                               │
│ あなたの関わり方                                             │
│ [個人]            [企業・大学・自治体]       [支援者]         │
├──────────────────────────────────────────────────────────────┤
│ FEATURED CONTENT                                             │
│ 注目プロジェクト                 研究・インサイト             │
│ [Card] [Card] [Card]             [Article] [Article] [Article]│
├──────────────────────────────────────────────────────────────┤
│ IMPACT STRIP                                                 │
│ 問い → 視野 → 当事者性 → 実践 → 完遂 → 次の機会             │
│                                              可能性の最大化   │
├──────────────────────────────────────────────────────────────┤
│ FINAL CTA                                                    │
│ あなたは、自分のキャリアを選んでいるか。                     │
│ それとも、置かれ続けているだけか。                           │
│ [活動に参加する] [連携について相談する]                      │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
│ Mission / Navigation / SNS / Legal / Organization            │
└──────────────────────────────────────────────────────────────┘
```

## 3.2 モバイル版

```text
┌──────────────────────────────┐
│ Logo                  [Menu] │
├──────────────────────────────┤
│ HERO                         │
│ 所属環境で、                 │
│ 可能性は決まってしまうのか？ │
│                              │
│ リスキリングの前に、         │
│ Re:Mind。                    │
│                              │
│ [活動に参加する]             │
│ [Re:Mindを知る]              │
│ 円環SVG                      │
├──────────────────────────────┤
│ PROBLEM                      │
│ 見出し                       │
│ [Card]                       │
│ [Card]                       │
│ [Card]                       │
├──────────────────────────────┤
│ REMIND                       │
│ 01 Re:Mind                   │
│ ↓                            │
│ 02 Re:Choose                 │
│ ↓                            │
│ 03 Re:Act                    │
│ ↓                            │
│ 04 Re:Build                  │
│ ↓                            │
│ 05 Re:Connect                │
├──────────────────────────────┤
│ EXTERNAL INFRASTRUCTURE      │
│ [6 cards: 1 column / 2 col]  │
├──────────────────────────────┤
│ ACTIVITIES                   │
│ [4 cards: 1 column]          │
├──────────────────────────────┤
│ AUDIENCE PATHS               │
│ [Individual]                 │
│ [Organization]               │
│ [Supporter]                  │
├──────────────────────────────┤
│ FEATURED CONTENT             │
│ Horizontal cards / vertical  │
├──────────────────────────────┤
│ IMPACT                       │
│ Vertical process             │
├──────────────────────────────┤
│ FINAL CTA                    │
├──────────────────────────────┤
│ FOOTER                       │
└──────────────────────────────┘
```

---

# 4. セクション別詳細仕様

## 4.1 Header

### 目的

- ブランド認知
- 主要ページへの移動
- 参加導線の常時表示

### 内容

左：

- Career Campusロゴ
- テキストロゴ `CAREER CAMPUS`

中央〜右：

- 私たちについて
- 活動
- プロジェクト
- 研究・インサイト
- お知らせ
- 団体情報

右端CTA：

- `活動に参加する`

### 動作

- デスクトップでは高さ72px
- スクロール後は白背景・薄い影付きでsticky
- 最上部では背景を半透明にしてもよい
- モバイルではロゴとハンバーガーボタンのみ
- モバイルメニューは画面右から表示
- Escapeキーと背景クリックで閉じる
- 現在ページを `aria-current="page"` で示す

### コンポーネント

```text
Header.astro
MobileMenu.astro
Logo.astro
PrimaryNav.astro
```

---

## 4.2 Hero

### 目的

訪問後5秒以内に、以下を理解させる。

1. 何を問題にしているか
2. どのような組織か
3. 次に何をすればよいか

### コピー

ラベル：

> NPO法人キャリアキャンパス

H1：

> 所属環境で、  
> 可能性は決まってしまうのか？

ブランドコピー：

> リスキリングの前に、Re:Mind。

本文：

> キャリアキャンパスは、会社や学校の外で、多様な人・知識・実践機会をつなぐ外部インフラです。固定化した前提を問い直し、自分の人生にもう一度反応し、次の一歩を選べる人を増やします。

CTA：

- Primary：`活動に参加する`
- Secondary：`Re:Mindを知る`
- Text link：`企業・大学・自治体の方へ`

### ビジュアル

写真ではなく、初期版はCSSとSVGで実装する。

構成：

- 中心円：`CAREER CAMPUS`
- 周囲のノード：Knowledge / People / Practice / Research / Community / Opportunity
- 線で接続した円環
- 緑の小さなドット
- 背景の薄い座標・グリッド線

### 実装要件

- SVGは装飾扱いとし `aria-hidden="true"`
- `prefers-reduced-motion` 時は動きを停止
- 通常時もアニメーションは10〜20秒の緩い回転または点滅に限定
- Hero全体の最小高さはデスクトップ760px、モバイルauto
- 文章幅は最大650px

### コンポーネント

```text
Hero.astro
OrbitVisual.astro
ButtonLink.astro
```

---

## 4.3 Problem

### 見出し

> 問題は、スキル不足だけではない。

### 強調コピー

> 自分の未来に反応しなくなっていることだ。

### リード

> 選択そのものが悪いのではありません。問題は、環境が変化しても前提を問い直さず、学びや気づきを行動へ変えられない状態が続くことです。

### 3カード

#### Card 1：違和感から、すぐ離れる若手

> 辞めること自体は悪くない。ただ、次の仮説や自分側の学びを持たないまま環境だけを変えると、同じ問題が繰り返される。

#### Card 2：安定の中で、変化を止める中堅

> 今の仕事を続けること自体は悪くない。ただ、会社や役職を将来の安全性と混同すると、社外で通用する経験が増えない。

#### Card 3：能力はあるが、完成させられない人

> 学歴や知識はあっても、曖昧な課題を自分で定義し、他者に価値を届ける成果物まで完了できるとは限らない。

### 共通構造

- 前提を更新しない
- 変化を自分事にしない
- 学びを実践へ移さない
- 小さく始めて完了しない

### 注記

> 人を責めるためではなく、環境と行動の関係を問い直すための問題提起です。

### コンポーネント

```text
ProblemSection.astro
PersonaCard.astro
IssueTag.astro
```

---

## 4.4 Re:Mind

### 見出し

> Re:Mindとは

### 定義

> 固定化した自己認識や将来予測を現実に照らして問い直し、自分の人生にもう一度反応し、選び、動ける状態を取り戻すこと。

### 5ステップ

1. `Re:Mind｜現実を知る`：自分と環境の現在地を、思い込みではなく事実から捉える。
2. `Re:Choose｜選び直す`：辞める、残る、学ぶ、挑戦する理由を自分の言葉で決める。
3. `Re:Act｜小さく試す`：大きな決断の前に、7〜90日で検証できる行動を始める。
4. `Re:Build｜成果を残す`：行動を成果物、実績、他者評価、学びとして蓄積する。
5. `Re:Connect｜次の機会へつなぐ`：異動、転職、副業、研究、起業、社会貢献など次の選択肢へ接続する。

### UI

- デスクトップ：横並び5ステップ
- 1024px以下：3＋2段
- 640px以下：縦タイムライン
- 各ステップにSVGアイコン

### コンポーネント

```text
RemindSection.astro
ProcessStep.astro
```

---

## 4.5 External Infrastructure

### 見出し

> 会社でも学校でもない、キャリアの外部インフラ。

### 説明

> 所属先だけでは得にくい知識、経験、価値観、人とのつながりを持ち寄り、小さな実践を通じて次の可能性をつくります。

### 6カード

1. `先端情報`：AI、仕事、社会、キャリアの変化を知る
2. `仲間・メンター`：所属、職種、世代を越えて対話する
3. `問い・対話`：自己認識や将来の前提を問い直す
4. `実践機会`：実在する課題に小さく挑戦する
5. `成果の可視化`：経験と成果物をキャリア資産にする
6. `次の機会`：異動、転職、副業、研究、起業へ接続する

### 中央ビジュアル

中心：

- CAREER CAMPUS
- 外部インフラ／サードプレイス

周囲：

- 企業
- 大学・研究機関
- 行政・自治体
- NPO
- スタートアップ
- フリーランス
- 学生
- 社会人
- メンター

実在企業ロゴは使用しない。

### コンポーネント

```text
InfrastructureSection.astro
ValueCard.astro
EcosystemDiagram.astro
```

---

## 4.6 Activities

### 見出し

> 4つの活動領域

### カード

- `Re:Mind`：強い問い、対話、診断、振り返りを通じて、現在地と固定化した前提を可視化します。
- `実践プロジェクト`：企業、NPO、大学、行政、地域の課題に、小さなチームで取り組み、成果物まで完成させます。
- `コミュニティ・メンタリング`：所属や世代を越えた仲間、専門家、メンターとつながり、視野と選択肢を広げます。
- `研究・社会実装`：AI、キャリア、People Analytics、well-being、組織開発に関する調査・実証・発信を行います。

### コンポーネント

```text
ActivitiesSection.astro
ActivityCard.astro
```

---

## 4.7 Audience Paths

### 見出し

> あなたの関わり方

### 個人

> 問いに触れ、イベントやプロジェクトに参加し、自分の可能性を小さく試すことができます。

CTA：`個人として参加する`

### 企業・大学・自治体

> 越境学習、実践機会、キャリア自律、共同研究、若者支援、社会実証について連携できます。

CTA：`連携について相談する`

### メンター・支援者

> 専門性、経験、ネットワーク、プロジェクト、寄付・協賛を通じて挑戦を支えることができます。

CTA：`支援方法を見る`

### コンポーネント

```text
AudienceSection.astro
AudienceCard.astro
```

---

## 4.8 Featured Projects

`projects` content collectionから最大3件取得する。

優先順位：

1. `featured: true`
2. `status: recruiting`
3. 開始日の新しい順

カード項目：

- サムネイル
- カテゴリ
- 募集状態
- タイトル
- 80文字以内の説明
- 対象者
- 開始日・期間
- 詳細リンク

データが0件の場合はセクションを非表示にする。

### コンポーネント

```text
FeaturedProjects.astro
ProjectCard.astro
StatusBadge.astro
```

---

## 4.9 Featured Insights

`insights` content collectionから、公開日の新しい順で最大3件。

カード項目：

- カテゴリ
- タイトル
- 要約
- 公開日
- 読了時間
- 詳細リンク

カテゴリ：

- Re:Mind
- AIとキャリア
- 組織開発
- People Analytics
- 若者・学生支援
- well-being
- 活動レポート

データが0件の場合はセクションを非表示にする。

### コンポーネント

```text
FeaturedInsights.astro
InsightCard.astro
```

---

## 4.10 Impact Strip

### コピー

左：

> IMPACT  
> 個人の可能性を拡張し、社会全体の適応力を高める

プロセス：

1. 問いに触れる
2. 視野が広がる
3. 当事者性が育つ
4. 小さく実践する
5. 成果を完了する
6. 次の機会へ進む

右：

> 可能性の最大化

### デザイン

- 黒または濃いチャコール背景
- アイコンと重要語のみ緑
- 光彩は右端に限定
- 数字は実測値以外掲載しない
- モバイルは縦並びまたは横スクロール

---

## 4.11 Final CTA

### コピー

> あなたは、自分のキャリアを選んでいるか。  
> それとも、置かれ続けているだけか。

補足：

> 完璧な答えは必要ありません。まずは、今の前提を一つ問い直すところから始められます。

CTA：

- `活動に参加する`
- `連携について相談する`

---

## 4.12 Footer

### Mission

> 所属環境にかかわらず、すべての人が自分の可能性を信じ、学びと実践を通じて未来を自ら切り拓ける社会をつくる。

### リンク群

- 私たちについて
- Mission
- Re:Mind
- 代表メッセージ
- 団体情報
- 活動
- プロジェクト
- 研究・インサイト
- お知らせ
- 個人として参加
- 企業・大学・自治体
- メンター・支援
- お問い合わせ
- プライバシーポリシー
- 情報公開
- 定款・事業報告

---

# 5. デザインシステム

## 5.1 デザイントークン

```css
:root {
  --cc-green-50: #f3f8ec;
  --cc-green-100: #e4f0d5;
  --cc-green-300: #a8cf73;
  --cc-green-500: #6daa24;
  --cc-green-600: #568d18;
  --cc-green-700: #3d6f0f;

  --cc-black: #111510;
  --cc-charcoal: #252a24;
  --cc-text: #1b201a;
  --cc-muted: #667061;
  --cc-line: #dce5d6;
  --cc-surface: #f6f8f3;
  --cc-white: #ffffff;

  --font-sans:
    "Noto Sans JP",
    "Hiragino Kaku Gothic ProN",
    "Yu Gothic",
    system-ui,
    sans-serif;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-card: 0 12px 36px rgb(27 32 26 / 0.08);
  --container: 1200px;
  --section-space: clamp(80px, 10vw, 144px);
}
```

## 5.2 色の利用比率

- 白・明るい背景：70%
- 黒・チャコール：20%
- 緑：10%

## 5.3 カード

- 白背景
- 1pxの薄い枠
- 角丸18px
- 24〜32px padding
- ホバー時は `translateY(-4px)` 程度
- 影を強くしすぎない

## 5.4 写真

- 実際のイベント、対話、制作、発表を優先
- 人物のAI生成画像を実在活動のように見せない
- 写真が不足する場合はSVGとタイポグラフィで構成

---

# 6. 技術構成

```text
Astro
TypeScript
CSS
Markdown
Astro Content Collections
GitHub Actions
GitHub Pages
```

React、Vue、Tailwind CSS、UIフレームワークは使わない。

JavaScriptを使う機能：

- モバイルメニュー
- FAQアコーディオン
- プロジェクトの簡易フィルター
- スクロール表示アニメーション

---

# 7. ディレクトリ

```text
career-campus-web/
├── .github/workflows/deploy.yml
├── public/
│   ├── images/
│   ├── logo/
│   ├── documents/
│   ├── favicon.svg
│   ├── robots.txt
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── common/
│   │   ├── home/
│   │   ├── cards/
│   │   └── seo/
│   ├── content/
│   │   ├── projects/
│   │   ├── insights/
│   │   └── news/
│   ├── content.config.ts
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

# 8. Content Collections

## `src/content.config.ts`

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      category: z.enum(["remind", "project", "community", "research"]),
      status: z.enum(["recruiting", "ongoing", "completed", "planned"]),
      audience: z.array(z.string()),
      featured: z.boolean().default(false),
      publishedAt: z.coerce.date(),
      startAt: z.coerce.date().optional(),
      endAt: z.coerce.date().optional(),
      image: image().optional(),
      externalUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(180),
      category: z.enum([
        "remind",
        "ai-career",
        "organization",
        "people-analytics",
        "youth",
        "wellbeing",
        "report",
      ]),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      author: z.string().default("キャリアキャンパス"),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum(["event", "recruitment", "activity", "media", "organization"]),
    publishedAt: z.coerce.date(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, insights, news };
```

---

# 9. トップページ実装構造

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/layout/Header.astro";
import Footer from "../components/layout/Footer.astro";
import Hero from "../components/home/Hero.astro";
import ProblemSection from "../components/home/ProblemSection.astro";
import RemindSection from "../components/home/RemindSection.astro";
import InfrastructureSection from "../components/home/InfrastructureSection.astro";
import ActivitiesSection from "../components/home/ActivitiesSection.astro";
import AudienceSection from "../components/home/AudienceSection.astro";
import FeaturedProjects from "../components/home/FeaturedProjects.astro";
import FeaturedInsights from "../components/home/FeaturedInsights.astro";
import ImpactStrip from "../components/home/ImpactStrip.astro";
import FinalCTA from "../components/home/FinalCTA.astro";

const pageTitle = "NPO法人キャリアキャンパス｜リスキリングの前に、Re:Mind。";
const pageDescription = "会社や学校の外で、人・知識・実践機会をつなぎ、所属環境にかかわらず未来を選べる人を増やすNPO法人です。";
---

<BaseLayout title={pageTitle} description={pageDescription}>
  <Header />
  <main id="main-content">
    <Hero />
    <ProblemSection />
    <RemindSection />
    <InfrastructureSection />
    <ActivitiesSection />
    <AudienceSection />
    <FeaturedProjects />
    <FeaturedInsights />
    <ImpactStrip />
    <FinalCTA />
  </main>
  <Footer />
</BaseLayout>
```

---

# 10. 外部フォーム

```env
PUBLIC_INDIVIDUAL_FORM_URL=
PUBLIC_PARTNER_FORM_URL=
PUBLIC_SUPPORTER_FORM_URL=
PUBLIC_NEWSLETTER_URL=
```

URL未設定時は `/contact/` へフォールバックする。

---

# 11. SEO・OGP

必須：

- title
- meta description
- canonical URL
- OGP
- Twitter Card
- favicon
- theme-color
- Organization JSON-LD
- WebSite JSON-LD
- Article JSON-LD
- sitemap
- robots.txt

トップページtitle：

```text
NPO法人キャリアキャンパス｜リスキリングの前に、Re:Mind。
```

OGP画像：1200 × 630px

---

# 12. アクセシビリティ

- キーボード操作
- visible focus
- skip link
- 正しい見出し階層
- アイコンボタンにaria-label
- 装飾SVGはaria-hidden
- reduced motion対応
- hoverだけに依存しない
- 適切なalt
- `lang="ja"`

---

# 13. パフォーマンス

- 静的HTML中心
- JavaScript最小化
- Hero SVGは100KB以下
- 画像はAVIFまたはWebP
- lazy loading
- 画像サイズ指定
- 外部Webフォントを原則使わない

禁止：

- 背景動画
- 大型Lottie
- Three.js
- 不要なReact hydration
- 大量のパララックス
- 自動再生カルーセル
- 巨大PNG

---

# 14. レスポンシブ

| 領域 | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Hero | 1列 | 1列 | 7:5の2列 |
| Persona cards | 1列 | 3列 | 3列 |
| Re:Mind steps | 1列 | 3+2 | 5列 |
| Value cards | 1〜2列 | 3列 | 3列 |
| Activities | 1列 | 2列 | 4列 |
| Audience | 1列 | 3列 | 3列 |
| Projects | 1列 | 2列 | 3列 |
| Insights | 1列 | 2列 | 3列 |
| Footer | 1列 | 2列 | 4列 |

---

# 15. GitHub Pages設定

## `astro.config.mjs`

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.github.io",
  output: "static",
});
```

リポジトリ配下の場合は `base: "/career-campus-web"` を追加する。

## `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# 16. 品質保証

- `npm run build` が成功
- 内部リンクが有効
- 404ページが存在
- 画像altが適切
- モバイルメニューがキーボード操作可能
- JavaScript無効時も主要コンテンツが読める
- 320px幅で横スクロールなし
- Markdownのdraft記事が公開されない
- コンテンツ0件でもビルド成功
- 実測していない数値を掲載しない

---

# 17. 初期リリースで実装しないもの

- 会員登録・ログイン
- データベース
- 独自問い合わせバックエンド
- Re:Mind診断の保存
- AIチャット
- 決済
- プロジェクト自動マッチング
- 管理画面
- SNS機能
- コメント
- 多言語対応

---

# 18. Codexへの実装指示

```text
NPO法人キャリアキャンパスの公式サイトを新規実装してください。

目的：
- 「キャリアの無反応」という社会課題を提示する
- 「リスキリングの前に、Re:Mind」というブランド思想を伝える
- 個人、企業・大学・自治体、メンター・支援者を参加行動へ導く
- GitHub Pagesで静的公開できるようにする

技術要件：
- Astro
- TypeScript
- 通常のCSS
- Astro Content Collections
- Markdown
- GitHub Actions
- GitHub Pages
- React、Vue、Tailwind CSS、UIフレームワークは使用しない
- output: static
- 不要なクライアントJavaScriptを追加しない

ページ：
- /
- /about/
- /activities/
- /projects/
- /insights/
- /news/
- /join/
- /organization/
- /contact/
- /privacy/
- /404.html

トップページのセクション順：
1. Header
2. Hero
3. Problem
4. Re:Mind
5. External Infrastructure
6. Activities
7. Audience Paths
8. Featured Projects
9. Featured Insights
10. Impact Strip
11. Final CTA
12. Footer

トップページの主要コピー：
- H1: 所属環境で、可能性は決まってしまうのか？
- Brand copy: リスキリングの前に、Re:Mind。
- Lead: キャリアキャンパスは、会社や学校の外で、多様な人・知識・実践機会をつなぐ外部インフラです。固定化した前提を問い直し、自分の人生にもう一度反応し、次の一歩を選べる人を増やします。

デザイン：
- 白70%、黒・チャコール20%、緑10%
- 白背景、黒文字、緑アクセント、円環、接続点、細いデータライン
- アカデミックかつビジネスライク
- 代表者のカリスマ性や宗教的な印象に依存しない
- 実写がない箇所はAI人物画像で埋めず、SVGとタイポグラフィで構成
- カードは白背景、薄い枠、18px角丸
- Impactのみ黒背景
- モバイルファースト

必須コンポーネント：
- Header
- MobileMenu
- Hero
- OrbitVisual
- ProblemSection
- PersonaCard
- RemindSection
- ProcessStep
- InfrastructureSection
- EcosystemDiagram
- ActivitiesSection
- ActivityCard
- AudienceSection
- AudienceCard
- FeaturedProjects
- ProjectCard
- FeaturedInsights
- InsightCard
- ImpactStrip
- FinalCTA
- Footer
- SEO

コンテンツ管理：
- projects、insights、newsをContent Collectionsで管理
- Zod schemaを定義
- draft: trueは公開しない
- トップではprojectsとinsightsを最大3件表示
- 0件の場合はセクション非表示

外部フォーム：
- PUBLIC_INDIVIDUAL_FORM_URL
- PUBLIC_PARTNER_FORM_URL
- PUBLIC_SUPPORTER_FORM_URL
- PUBLIC_NEWSLETTER_URL
- 未設定時は/contact/へ遷移

SEO：
- title、description、canonical、OGP、Twitter Card
- Organization JSON-LD、WebSite JSON-LD
- sitemap、robots.txt

アクセシビリティ：
- skip link
- keyboard navigation
- visible focus
- aria-current
- aria-label
- reduced motion
- semantic headings
- alt text
- lang=ja

パフォーマンス：
- 静的HTML中心
- 外部フォントなし
- 不要なhydrationなし
- SVGは軽量化
- 画像はWebP/AVIF
- 背景動画、Lottie、Three.js、カルーセルは禁止

GitHub Pages：
- astro.config.mjsにsite、必要に応じてbaseを設定
- GitHub Actionsでmain push時にbuild/deploy
- distをPages artifactとして公開
- READMEにローカル起動、記事追加、デプロイ、独自ドメイン設定手順を書く

品質：
- npm run build成功
- 320pxで横スクロールなし
- コンテンツ0件でもビルド成功
- 実測していない数値は掲載しない
- 主要ページに仮コンテンツを用意
- ロゴがない場合は文字ロゴと仮SVGを分離し、後で差し替え可能にする

実装後に報告すること：
1. 作成ファイル一覧
2. ローカル起動手順
3. GitHub Pages公開手順
4. ロゴ、写真、フォームURLなど差し替え箇所
5. 未実装・将来対応機能
```

---

# 19. 実装優先順位

## Priority 1

- Astro初期化
- BaseLayout
- Header / Footer
- デザイントークン
- トップページ全セクション
- レスポンシブ
- GitHub Pages deploy

## Priority 2

- Content Collections
- Projects
- Insights
- News
- SEO / OGP
- 404

## Priority 3

- 下層ページの文章
- プロジェクトフィルター
- スクロールアニメーション
- 独自ドメイン
- アクセス解析

---

# 20. 完成の定義

以下が1〜3分で理解できる状態を完成とする。

1. キャリアキャンパスが問題にしていること
2. Re:Mindの意味
3. キャリアキャンパスが提供する価値
4. どのような活動をしているか
5. 自分がどのように参加できるか
6. NPO法人として信頼できる情報が公開されていること
