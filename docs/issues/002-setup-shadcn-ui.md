# Issue #002: shadcn/uiとTailwindCSSの設定

## 概要
UIコンポーネントライブラリとしてshadcn/uiを導入し、TailwindCSSと統合する。

## 実装要件
- shadcn/uiのCLIセットアップ
- 必要なコンポーネントのインストール
  - Button
  - Card
  - Dialog
  - Navigation Menu
  - Theme Toggle
  - その他必要に応じて
- グローバルスタイルの設定
- カスタムテーマの作成

## 技術的考慮事項
- TailwindCSS v4との互換性確認
- モバイルファーストでのレスポンシブ設定
- ダークモード対応の設計
- アクセシビリティの確保

## 依存関係
- なし（基本設定）

## 優先度
**高** - UIコンポーネントは全ての画面で使用される