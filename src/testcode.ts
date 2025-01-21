// https://www.geeksforgeeks.org/typescript-eslint/
const unusedVar = 42;

function test() {
  console.log('Hello');
}

const menuConfig = [
  {
    title: 'Home',
    isVisible: false,
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
    isVisible: false,
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
    isVisible: false,
  },
];

const temp = menuConfig.map((v: any) => {
  return { ...v, isVisible: false };
});

console.log(temp);
