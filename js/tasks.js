'use strict';

const title ='==============================\n現在持っているタスクの一覧\n==============================';
const tasks =[
  {content : '机を片付ける' , jenre : '掃除'},
  {content : '牛乳を買う' , jenre : '買い物'},
  {content : '散歩する' , jenre : '運動'},
];
let input_content , input_jenre;

const question = () => {
  input_content = prompt('タスクの内容を入力してください');
  input_jenre = prompt('ジャンルを入力してください');
};
const taskPush = (input_content, input_jenre) => tasks.push({ content: input_content, jenre: input_jenre });
const taskLists = () => {
  console.log(title);
  tasks.forEach((task) => console.log(`${tasks.indexOf(task) } : [内容]${task.content} [ジャンル]${task.jenre}`));
};

taskLists();
question();
while((input_content !== null) && (input_jenre !== null)) {
  if((input_content === '') && (input_jenre === '')) {
    alert('何も入力されていません');
    input_content = prompt('もう一度タスクの内容を入力してください');
    input_jenre = prompt('もう一度ジャンルを入力してください');
  } else if(input_content === '') {
    alert('タスクの内容が入力されていません');
    input_content = prompt('もう一度タスクの内容を入力してください');
  } else if(input_jenre === '') {
    alert('ジャンルが入力されていません');
    input_jenre = prompt('もう一度ジャンルを入力してください');
  } else if((input_content !== '') && (input_jenre !== '')) {
    taskPush(input_content , input_jenre);
    alert( '入力が完了しました' );
    taskLists();
    question();
  }
};