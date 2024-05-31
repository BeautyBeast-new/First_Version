const userWeight = 70; // 使用者體重，單位為公斤

// 動作數據，包括動作名稱、GIF圖片、描述、持續時間、MET值和類型
const exercises = [
  {
    name: "膝蓋俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 12",
    reps: 12,
    met: 4.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 12",
    reps: 12,
    met: 4.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "寬距俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 15",
    reps: 15,
    met: 4.5,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "印度俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 10",
    reps: 10,
    met: 5.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "交錯俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 12",
    reps: 12,
    met: 4.5,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "掌上壓後轉身",
    gif: "./sportimg/images (1).gif",
    description: "X 10",
    reps: 10,
    met: 5.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "膝蓋俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 10",
    reps: 10,
    met: 4.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "印度俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 10",
    reps: 10,
    met: 5.0,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "腳高位俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 12",
    reps: 12,
    met: 4.5,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "交錯俯臥撐",
    gif: "./sportimg/images (1).gif",
    description: "X 10",
    reps: 10,
    met: 4.5,
    type: "reps",
  },
  {
    name: "休息時間",
    gif: "./sportimg/this-is.gif", // 你可以使用一個休息的圖片或GIF
    description: "休息，準備下一組動作。",
    duration: 30, // 休息時間，單位為秒
    met: 0,
    type: "time", // 基於時間的動作
  },
  {
    name: "胸部拉伸",
    gif: "./sportimg/images (1).gif",
    description: "30秒",
    duration: 30,
    met: 2.0,
    type: "time",
  },
];

let currentExerciseIndex = 0; // 當前動作的索引
let totalCaloriesBurned = 0; // 總消耗熱量
let timerInterval; // 計時器間隔

// 綁定“下一步”按鈕的點擊事件
document.getElementById("next-button").addEventListener("click", nextExercise);
// 綁定“結束”按鈕的點擊事件
document.getElementById("end-button").addEventListener("click", () => {
  alert("訓練結束，恭喜您完成了所有動作！");
  window.location.href = "gmy.html";
});
// 綁定“退出”按鈕的點擊事件
document.getElementById("exit-button").addEventListener("click", () => {
  // 退出功能實現，例如跳轉到首頁或關閉窗口
  window.location.href = "gmy.html"; // 假設main2.html是首頁
});

// 加載下一個動作
function nextExercise() {
  clearInterval(timerInterval); // 清除計時器
  calculateCalories(); // 計算已消耗的熱量
  currentExerciseIndex++; // 索引加1
  if (currentExerciseIndex >= exercises.length) {
    // 如果超出動作數組範圍
    document.getElementById("next-button").style.display = "none"; // 隱藏“下一步”按鈕
    document.getElementById("end-button").style.display = "block"; // 顯示“結束”按鈕
    return;
  }
  loadExercise(currentExerciseIndex); // 加載新的動作
}

// 根據索引加載動作
function loadExercise(index) {
  const exercise = exercises[index];
  document.getElementById("exercise-name").textContent = exercise.name;
  document.getElementById("exercise-gif").src = exercise.gif;
  document.getElementById("exercise-description").textContent =
    exercise.description;

  if (exercise.type === "time") {
    // 如果是基於時間的動作
    document.getElementById("timer").style.display = "block"; // 顯示計時器
    document.getElementById("time-left").textContent = exercise.duration; // 設置剩餘時間
    startTimer(exercise.duration); // 開始計時
  } else if (exercise.type === "reps") {
    // 如果是基於次數的動作
    document.getElementById("timer").style.display = "none"; // 隱藏計時器
  }
}

// 開始計時器
function startTimer(duration) {
  let timeLeft = duration;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// 計算消耗的熱量
function calculateCalories() {
  const exercise = exercises[currentExerciseIndex];
  let caloriesBurned = 0;
  if (exercise.type === "time") {
    // 如果是基於時間的動作
    const durationInHours = exercise.duration / 3600;
    caloriesBurned = exercise.met * userWeight * durationInHours;
  } else if (exercise.type === "reps") {
    // 如果是基於次數的動作
    const repsDurationInHours = exercise.reps / 30 / 60; // 假設每個動作花費2秒
    caloriesBurned = exercise.met * userWeight * repsDurationInHours;
  }
  totalCaloriesBurned += caloriesBurned;
  document.getElementById("calories-burned").textContent =
    totalCaloriesBurned.toFixed(2);
}

// 初始加載第一個動作
loadExercise(currentExerciseIndex);
