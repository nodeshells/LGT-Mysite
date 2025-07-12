# Issue #001: Three.jsの導入と設定

## 概要
スプラッシュスクリーンと各画面で使用する3Dグラフィックスのために、Three.jsを導入し基本設定を行う。

## 実装要件
- Three.jsのインストール
- @types/threeの追加（TypeScript型定義）
- 基本的なシーン、カメラ、レンダラーのセットアップ
- React環境での最適な統合方法の実装
- パフォーマンス最適化の設定

## 技術的考慮事項
- React Three Fiber（@react-three/fiber）の使用を検討
- WebGLサポートの確認とフォールバック
- モバイルデバイスでのパフォーマンス
- Next.jsのSSR/RSCとの互換性（client componentとして実装）

## 依存関係
- なし（初期セットアップ）

## 優先度
**高** - 3D要素はこのプロジェクトの核心機能のため