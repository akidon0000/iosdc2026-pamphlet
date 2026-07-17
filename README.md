# iOSDC Japan 2026 パンフレット記事

## 概要

「明日から使える！海外コンペで評価されたアクセシビリティ実装ガイド」

- [記事内容](output/output.pdf)

- [iOSDC Japan 2026](https://fortee.jp/iosdc-japan-2026)

## 執筆・ビルド方法

原稿は `manuscripts/index.md` に記述します。PDF は以下で生成できます。

```bash
yarn install
yarn pdf      # output/output.pdf を生成
yarn start    # ビルドして PDF を開く
yarn lint     # textlint で校正
```

---

※iOSDC Japan 2026 パンフレット用の記事を [mitsuharu/iosdc-pamphlet-template](https://github.com/mitsuharu/iosdc-pamphlet-template) を使用して作成しました。
