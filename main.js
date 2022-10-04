const str = `
010-1234-5678
thesecon@gmail.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') // 생성자 방식
// const regexp = /the/gi  // 리터럴 방식

const regexp = /fox/gi
console.log(regexp.test(str))