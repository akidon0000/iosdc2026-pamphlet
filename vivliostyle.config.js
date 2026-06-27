module.exports = {
  title: '明日から使える！海外コンペで評価されたアクセシビリティ実装ガイド',
  author: '@akidon0000',
  language: 'ja',
  size: 'A4',
  theme: [
    '@mitsuharu/vivliostyle-theme-iosdc-pamphlet@0.2.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp',
    'theme/styles',
  ],
  entry: ['index.md'],
  entryContext: './manuscripts',
  output: ['./output/output.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
  vfm: {
    hardLineBreaks: false,
    disableFormatHtml: false,
  },
}
