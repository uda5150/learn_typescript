# learn_typescript

## ES6移行のJavaScript

- 変数の宣言
  - varは原則使わない
    - varの変数のスコープが関数単位のため、ブロックをすり抜け、バグを生みやすい
  - 再代入の必要がない場合はconst、再代入の必要がある場合だけletを使う

- アロー関数
  - const 関数名 = (引数) => { return 返り値 }

