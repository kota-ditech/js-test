//問題文・選択肢・正解セット
const quiz = [
    {
        question : 'ゲーム史上、最も売れたゲーム機は次のうちのどれ？',
        answers : [
            'ファミコン', 
            'プレステ', 
            'スイッチ', 
            'DS'
        ],
        correct : 'DS'
    }, {
        question : '糸井重里',
        answers : [
            'マザー２', 
            'スーパーマリオ', 
            'スーパードンキ', 
            'かーびい'
        ],
        correct : 'マザー２'
    }, {
        question : 'ファイナルファンタ',
        answers : [
            'フリオニール', 
            'クラウド', 
            'ティーダ', 
            'セシル'
        ],
        correct :'セシル'
    }
];

// 定義
const $button = document.getElementsByClassName('btn') ;
const buttonLength = $button.length;
let quizIndex = 0;
let score = 0;

// 問題文と選択肢の表示
const setupQuiz = () => {
    
    // 問題文を表示
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    
    // 選択肢の表示
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        document.getElementsByClassName('btn')[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

// 正否判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解')
        score++;
    } else {
        window.alert('不正解')
    };
    
    quizIndex++;
    
    if(quizIndex < quiz.length) {
        setupQuiz();
    } else {
        window.alert('終了！'+score)
    }
}


//ボタンをクリックしたら次の問題文を表示する
handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    })
    handlerIndex++;
}




// // 定数定義
// const quizLength = quiz.length;
// let quizIndex = 0;
// let score = 0;
// const $button = document.getElementsByTagName('button');
// const buttonLength =$button.length

// //クイズの問題文と選択を定義
// const setupQuiz = () => {
//     document.getElementById('js-question').textContent = quiz[quizIndex].question;
//     let buttonIndex = 0;
//     while(buttonIndex < buttonLength){
//     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
//     buttonIndex++;
//     }
// }
// setupQuiz();


// // 正誤判定関数
// const clickHandler = (e) => {
//     if(quiz[quizIndex].correct === e.target.textContent){
//         window.alert('正解');
//         score++;
//     } else {
//         window.alert('不正解');
//     }

//     quizIndex++;

//     if(quizIndex < quizLength) {
//         setupQuiz();
//     } else {
//         window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！')
//     }
// };

// //選択肢をクリックしたら正誤判定関数を起動
// let handlerIndex = 0;
// while (handlerIndex < buttonLength) {
//     $button[handlerIndex].addEventListener('click', (e) => {
//         clickHandler(e);
//     }) ;
//     handlerIndex++;
// }