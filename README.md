# learn_typescript

## ES6移行のJavaScript

- 変数の宣言
  - varは原則使わない
    - varの変数のスコープが関数単位のため、ブロックをすり抜け、バグを生みやすい
  - 再代入の必要がない場合はconst、再代入の必要がある場合だけletを使う

- アロー関数
  - const 関数名 = (引数) => { return 返り値 }
  - アロー関数式では、thisは関数それ自体になる

- クラス
  - constructor
    - オブジェクト生成と初期化のためのメソッド
    - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/constructor
  - static
    - クラスのインスタンスを作らずに呼び出せるメソッド
      - rubyのselfみたいなもんか
    - 
  - super
    - 親クラスのconstructor、関数を呼び出せる
    - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/super
  - extends
    - クラス継承
    - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/extends

- スプレッド構文(ES2018)
  - スプレッド演算子：...
  ```
  const arr1 = [ 'A', 'B', 'C'];
  const arr2 = [...arr1, 'D', 'E'];
  ```
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- プロパティ名のショートハンド
  ```
  const foo = 65536;
  const obj = { foo, bar: 4096 };
  ```
- 非同期処理(Promise構文)
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - async/await(ES2017)
    - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await

- カリー化
  - なにがうれしいのか？
    - 複雑な処理をシンプルに書ける？  

- 関数の部分適用
  - カリー化された関数の一部の引数を固定した関数を作成すること

## TypeScriptの実行

```
tsc ファイル.ts
node ファイル.js
```