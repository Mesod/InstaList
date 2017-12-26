module.exports.counterStart = (desc) => {
  console.log(`**********\n${desc}`)
}

module.exports.counter = () => {
  process.stdout.write(".");
}

module.exports.counterFinish = (desc) => {
  console.log(`\n${desc}\n**********`)
}
