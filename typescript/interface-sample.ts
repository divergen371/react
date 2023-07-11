interface Color {
  readonly rgb: string;
  opacity: number;
  alias?: string; // プロパティ名の末尾に?をつけると省略可能になる
}

const tq: Color = { rgb: "00afcc", opacity: 1 };
tq.alias = "turquoise";
tq.rgb = "03c1ff" // 読み取り専用のプロパティに代入するとエラー
