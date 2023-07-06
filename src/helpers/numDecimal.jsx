const NumDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(1)
}

export default NumDecimal