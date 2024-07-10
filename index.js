// Code your solution here
function superbowlWin(record) {
  const win = record.find((game) => game.result === "W");
  return win ? win.year : undefined;
}
superbowlWin(record);
