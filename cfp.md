# CfP — iOSDC Japan 2026 パンフレット記事

fortee 投稿フォーム用のドラフト。（本文 `manuscripts/index.md` の現状に同期）

## ページ数
パンフ記事（8ページ）
※本文ドラフトは現在約10ページ。投稿は8ページ枠なので、提出前に8pへ調整予定。

## 記事タイトル（70字以内）※2案
- 案A（控えめ・現行 h1）: `明日から使える！海外コンペで評価されたアクセシビリティ実装リファレンス`（35字）
- 案B（実績明示）: `明日から使える！海外コンペで優勝したアクセシビリティ実装リファレンス`（34字）

## トーク概要（800字以内 / 718字）
構成: ①対応の全体像 → ②HIG のアクセシビリティ項目を軸に整理（題材＝海外コンペで優勝した実装、受賞は一言）→ ③代表実装をコードで解説（API は列挙しすぎない）。「押せる判断」「回線が悪くても使える」等はアクセシビリティと区別し "UX 向上" として触れる（"広義のアクセシビリティ"とは断定しない）／VoiceOver の重複を避け前半の支援技術リストから外す／「なぜ必要か」は説かない。

> アクセシビリティ対応は一部のユーザーだけのための特別な対応ではなく、すべての人の使いやすさに直結する「アプリの実装品質」そのものです。iOS には Dynamic Type や Voice Control、Switch Control などの強力な支援技術が標準で備わっています。これらは、開発側が意識して対応してこそ、その力を最大限に発揮します。さらに、タップ領域やコントラストのように、標準機能だけでは満たせず実装でしか担保できない領域もあります。本記事は、筆者が今年、海外のアクセシビリティコンペで優勝した実装を題材に、Apple の Human Interface Guidelines が挙げるアクセシビリティ項目（Vision / Mobility / Cognitive / Hearing / Speech の5カテゴリ）を軸として「何に・どう対応するか」を体系的に整理します。具体的には、文字サイズに追従するレイアウト、WCAG を満たすコントラストとその確認方法、VoiceOver の読み上げ順やカスタム読み上げの設計、地図を読み上げに対応させる工夫、色だけで状態を判断させない方法などを、コードを交えて解説します。さらに、アクセシビリティとは少し異なりますが、ユーザー体験を底上げするものとして、「押せる」と気づかせる工夫や、回線が悪くても使えることを前提にした作りにも触れます。明日から自分のアプリでも取り入れてみたくなる内容を、たっぷりお届けします！

## 出典・備考
- 題材: iOSDevUK Accessibility Challenge（主催・審査: Robin Kanatzar）／題材アプリ **MythConf**（SwiftUI 製）／期間 2026/5/7〜5/21（GAAD 締切）
- 受賞: 応募10件中 **PR #4** が優勝 — https://github.com/robinkanatzar/iosdevuk-accessibility-challenge/pull/4
- 受賞告知（2026/6/1, X, @RobinKanatzar）: "Congratulations to @akidon0000, the winner of the iOSDevUK Accessibility Challenge! 👏 … his was our favorite."
- 本文で扱う主トピック: Dynamic Type（ViewThatFits / @ScaledMetric）/ コントラスト（AAA トークン・Accessibility Inspector）/ 色に頼らない（SF Symbols・形）/ VoiceOver（読み上げ順・accessibilityRepresentation）/ Mobility（44pt・⌘キー・Voice Control・ジェスチャ代替）/ Cognitive（一貫性・空状態・Reduce Motion）/ Hearing & Speech（触覚・キーボードのみ）/ その他（オフラインマップ・多言語化・横向き 等。HIG 5カテゴリ外）
