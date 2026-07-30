# NPO法人キャリアキャンパス 公式サイト

「リスキリングの前に、Re:Mind。」を中核メッセージとする、NPO法人キャリアキャンパスの静的公式サイトです。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

生成物は `dist/` に出力されます。

## 公開設定

GitHub PagesのRepository variablesに以下を設定します。

- `SITE_URL`: 公開サイトのオリジン（例: `https://example.github.io`）
- `BASE_PATH`: リポジトリ配下で公開する場合のパス（例: `/career-campus-web`）

フォームを公開する場合は、ビルド環境に以下のURLを設定します。

- `PUBLIC_INDIVIDUAL_FORM_URL`
- `PUBLIC_PARTNER_FORM_URL`
- `PUBLIC_SUPPORTER_FORM_URL`
- `PUBLIC_NEWSLETTER_URL`

未設定の参加導線は `/contact/` へ移動します。
