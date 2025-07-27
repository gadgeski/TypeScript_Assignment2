// ======================================
// TypeScript課題2: 関数の型定義
// ======================================

// 【課題の説明】
// 関数の引数と戻り値に適切な型注釈を付けましょう。
// 通常の関数宣言とアロー関数の両方で練習します。

// ======================================
// 【練習問題】
// ======================================

// 1. 長方形の面積を計算する関数
// 引数: width(数値), height(数値)
// 戻り値: 面積(数値)
// function calculateArea(width, height) {
//   return width * height;
// }

// 2. ユーザーに挨拶する関数（アロー関数）
// 引数: name(文字列), age(数値・オプショナル)
// 戻り値: 挨拶メッセージ(文字列)
// const greetUser = (name, age) => {
//   if (age !== undefined) {
//     return `こんにちは、${name}さん（${age}歳）！`;
//   }
//   return `こんにちは、${name}さん！`;
// };

// 3. 配列の合計を計算する関数
// 引数: numbers(数値の配列)
// 戻り値: 合計値(数値)
// function calculateSum(numbers) {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// 4. ログを出力する関数（戻り値なし）
// 引数: message(文字列)
// 戻り値: なし
// function logMessage(message) {
//   console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
// }

// ======================================
// 【解答例】
// ======================================

// 1. 長方形の面積を計算する関数
function calculateArea(width: number, height: number): number {
  return width * height;
}

// 2. ユーザーに挨拶する関数（アロー関数）
const greetUser = (name: string, age?: number): string => {
  if (age !== undefined) {
    return `こんにちは、${name}さん（${age}歳）！`;
  }
  return `こんにちは、${name}さん！`;
};

// 3. 配列の合計を計算する関数
function calculateSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 4. ログを出力する関数（戻り値なし）
function logMessage(message: string): void {
  console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
}

// ======================================
// 【使用例・テスト】
// ======================================

console.log("=== 課題2: 関数の型定義 ===");

// calculateArea関数のテスト
const area1 = calculateArea(10, 5);
const area2 = calculateArea(7.5, 4.2);
console.log(`面積1: ${area1}平方メートル`);
console.log(`面積2: ${area2}平方メートル`);

// greetUser関数のテスト
console.log(greetUser("James"));
console.log(greetUser("Sophia", 25));
console.log(greetUser("Noah", 30));

// calculateSum関数のテスト
const scores = [85, 92, 78, 96, 88];
const total = calculateSum(scores);
console.log(`スコア合計: ${total}, 平均: ${total / scores.length}`);

// logMessage関数のテスト
logMessage("アプリケーション開始");
logMessage("課題2の実行中");

// ======================================
// 【ポイント解説】
// ======================================

// 1. 関数の型注釈の基本形式
//    function 関数名(引数: 型): 戻り値の型 { }
//    const 関数名 = (引数: 型): 戻り値の型 => { }

// 2. オプショナル引数
//    引数名?: 型  （"?"を付けるとオプショナルになる）

// 3. void型
//    戻り値がない関数の場合は ": void" を使用

// 4. 型推論
//    戻り値の型は省略できる場合もありますが、明示的に書く方が読みやすい

// ======================================
// 【追加練習】
// ======================================

// より高度な関数の型定義を試してみましょう

// 1. デフォルト引数を持つ関数
function createMessage(name: string, prefix: string = "様"): string {
  return `${name}${prefix}、お疲れ様です`;
}

// 2. 複数の戻り値の型を持つ関数（Union型）
function parseInput(input: string): number | string {
  const num = parseFloat(input);
  return isNaN(num) ? input : num;
}

// 3. 関数型の引数を受け取る関数（コールバック）
function processArray(
  arr: number[],
  processor: (item: number) => number
): number[] {
  return arr.map(processor);
}

// 追加練習のテスト
console.log("\n=== 追加練習 ===");
console.log(createMessage("Noah"));
console.log(createMessage("Sophia", "さん"));

console.log(`parseInput("123"): ${parseInput("123")}`);
console.log(`parseInput("hello"): ${parseInput("hello")}`);

const doubled = processArray([1, 2, 3, 4, 5], (x) => x * 2);
console.log(`2倍にした配列: [${doubled.join(", ")}]`);
